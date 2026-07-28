import type { APIRoute } from 'astro';
import { z } from 'zod';
import { Resend } from 'resend';

export const prerender = false;

const ContactSchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(160),
  clinic: z.string().trim().max(160).optional().default(''),
  message: z.string().trim().max(2000).optional().default(''),
  website: z.string().max(0).optional(), // honeypot — must be empty
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
  const subject = `Nuevo lead · ${data.name}${data.clinic ? ` · ${data.clinic}` : ''}`;
  const html = `
    <h2>Nueva solicitud de demo</h2>
    <table cellpadding="6">
      <tr><td><b>Nombre</b></td><td>${escapeHtml(data.name)}</td></tr>
      <tr><td><b>Email</b></td><td>${escapeHtml(data.email)}</td></tr>
      <tr><td><b>Clínica</b></td><td>${escapeHtml(data.clinic)}</td></tr>
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

  // The lead is already delivered at this point. Adding them to the
  // audience is best-effort: a Resend hiccup here must not turn a
  // captured lead into an error the visitor sees.
  const audienceId = process.env.RESEND_AUDIENCE_ID;
  if (audienceId) {
    const [firstName, ...rest] = data.name.split(/\s+/);
    try {
      await resend.contacts.create({
        audienceId,
        email: data.email,
        firstName,
        lastName: rest.join(' '),
        unsubscribed: false,
      });
    } catch {
      // Ignored on purpose — see above.
    }
  }

  return json(200, { ok: true });
};

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
