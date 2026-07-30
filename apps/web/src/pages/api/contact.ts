import type { APIRoute } from 'astro';
import { z } from 'zod';
import { Resend } from 'resend';
import { BREVO_FORM_ACTION } from '~/config/links';

export const prerender = false;

const REASONS = ['managed', 'demo', 'migration', 'install', 'dev', 'other'] as const;

const ContactSchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(160),
  clinic: z.string().trim().max(160).optional().default(''),
  reason: z.enum(REASONS).optional().default('other'),
  message: z.string().trim().max(2000).optional().default(''),
  locale: z.string().trim().max(5).optional().default(''),
  // The checkbox only reaches us when ticked, so presence is the opt-in.
  subscribe: z.literal('yes').optional(),
  // Honeypot. Validated loosely on purpose: `max(0)` here made the schema
  // reject a filled trap with a 400, so the silent-drop branch below never
  // ran and every bot learned it had been spotted.
  website: z.string().max(200).optional(),
  'cf-turnstile-response': z.string().optional(),
});

// Tiny in-memory sliding-window rate limit (5 req / minute / IP).
const hits = new Map<string, number[]>();
function rateLimit(ip: string, max = 5, windowMs = 60_000): boolean {
  const now = Date.now();
  const arr = (hits.get(ip) ?? []).filter((t) => now - t < windowMs);
  arr.push(now);
  hits.set(ip, arr);
  return arr.length <= max;
}

async function verifyTurnstile(token: string | undefined, ip: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET;
  if (!secret) return true; // disabled
  if (!token) return false;
  try {
    const body = new URLSearchParams({ secret, response: token, remoteip: ip });
    const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      body,
    });
    const data = (await res.json()) as { success?: boolean };
    return data.success === true;
  } catch {
    return false;
  }
}

function json(status: number, body: Record<string, unknown>): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

export const POST: APIRoute = async ({ request, clientAddress }) => {
  const ip =
    request.headers.get('cf-connecting-ip') ??
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    clientAddress ??
    'unknown';

  if (!rateLimit(ip)) return json(429, { error: 'rate_limited' });

  let raw: unknown;
  try {
    raw = await request.json();
  } catch {
    return json(400, { error: 'invalid_json' });
  }

  const parsed = ContactSchema.safeParse(raw);
  if (!parsed.success) return json(400, { error: 'invalid_payload' });

  const data = parsed.data;

  // Honeypot tripped → pretend success, drop silently.
  if (data.website && data.website.length > 0) return json(200, { ok: true });

  const ok = await verifyTurnstile(data['cf-turnstile-response'], ip);
  if (!ok) return json(403, { error: 'turnstile_failed' });

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL ?? 'no-reply@dentalpin.com';
  if (!apiKey || !to) {
    return json(500, { error: 'misconfigured' });
  }

  const resend = new Resend(apiKey);
  // The reason is the first thing you need when triaging, so it leads the
  // subject line rather than hiding in the body.
  const subject = `Lead · ${data.reason} · ${data.name}${data.clinic ? ` · ${data.clinic}` : ''}`;
  const html = `
    <h2>Nueva solicitud de contacto</h2>
    <table cellpadding="6">
      <tr><td><b>Nombre</b></td><td>${escapeHtml(data.name)}</td></tr>
      <tr><td><b>Email</b></td><td>${escapeHtml(data.email)}</td></tr>
      <tr><td><b>Clínica</b></td><td>${escapeHtml(data.clinic)}</td></tr>
      <tr><td><b>Motivo</b></td><td>${escapeHtml(data.reason)}</td></tr>
      <tr><td><b>Idioma</b></td><td>${escapeHtml(data.locale)}</td></tr>
      <tr><td><b>Newsletter</b></td><td>${data.subscribe ? 'sí' : 'no'}</td></tr>
      <tr><td><b>Mensaje</b></td><td>${escapeHtml(data.message).replace(/\n/g, '<br>')}</td></tr>
      <tr><td><b>IP</b></td><td>${escapeHtml(ip)}</td></tr>
    </table>
  `;

  try {
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: data.email,
      subject,
      html,
    });
    if (error) return json(502, { error: 'resend_failed' });
  } catch {
    return json(502, { error: 'resend_failed' });
  }

  // Resend stays transactional, which is all it ever did here. The mailing
  // list lives in Brevo, in the same list the pricing-page waitlist feeds, so
  // there is one list, one consent record and one unsubscribe link.
  //
  // The lead is already safe in the inbox at this point, so a failure here
  // must not turn a delivered message into an error for the visitor. Worst
  // case the address is missing from the list and the email is not.
  if (data.subscribe) {
    try {
      await addToBrevoList(data.email, data.clinic, data.locale);
    } catch (err) {
      console.error('[contact] brevo list add failed', err);
    }
  }

  return json(200, { ok: true });
};

/*
 * Subscribe to the same Brevo list the pricing-page waitlist writes to, by
 * posting to the same hosted form endpoint the browser would. That endpoint
 * carries the list in its token, so this needs nothing in the environment:
 * no API key, no list id, nothing new to configure on deploy.
 *
 * Sent as multipart FormData against `?isAjax=1`, which is exactly what
 * Brevo's own form script does, so the server looks like any other browser
 * submitting the form.
 *
 * `NOMBRE` means the clinic name, not the person's. That is the schema the
 * waitlist form has been writing since day one ("Nombre de la clínica"), and
 * matching it keeps one list coherent instead of two half-filled attributes.
 * The person's name is in the email you receive.
 *
 * Re-subscribing an address already on the list returns success, so someone
 * who joined the waitlist and later writes in needs no special case.
 */
async function addToBrevoList(email: string, clinic: string, locale: string): Promise<void> {
  const form = new FormData();
  form.set('EMAIL', email);
  if (clinic) form.set('NOMBRE', clinic);
  form.set('ACEPTA_PRIVACIDAD', '1'); // required by the form; the ticked box IS the consent
  form.set('email_address_check', ''); // Brevo's own honeypot, must stay empty
  if (locale) form.set('locale', locale);

  const res = await fetch(`${BREVO_FORM_ACTION}?isAjax=1`, { method: 'POST', body: form });

  // Validation failures come back as 400 with a per-field `errors` object.
  if (!res.ok) {
    throw new Error(`brevo ${res.status}: ${await res.text().catch(() => '')}`);
  }
}

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
