import type { APIRoute } from 'astro';
import { z } from 'zod';
import { Resend } from 'resend';

export const prerender = false;

const WaitlistSchema = z.object({
  email: z.string().trim().email().max(160),
  clinic: z.string().trim().max(160).optional().default(''),
  website: z.string().max(0).optional(),
});

const hits = new Map<string, number[]>();
function rateLimit(ip: string, max = 5, windowMs = 60_000): boolean {
  const now = Date.now();
  const arr = (hits.get(ip) ?? []).filter((t) => now - t < windowMs);
  arr.push(now);
  hits.set(ip, arr);
  return arr.length <= max;
}

function json(status: number, body: Record<string, unknown>): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
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

  const parsed = WaitlistSchema.safeParse(raw);
  if (!parsed.success) return json(400, { error: 'invalid_payload' });
  const data = parsed.data;

  if (data.website && data.website.length > 0) return json(200, { ok: true });

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL ?? 'no-reply@dentalpin.com';
  if (!apiKey || !to) return json(500, { error: 'misconfigured' });

  const resend = new Resend(apiKey);
  const subject = `Waitlist · Dentalpin Cloud · ${data.email}`;
  const html = `
    <h2>Nuevo registro en waitlist Cloud</h2>
    <table cellpadding="6">
      <tr><td><b>Email</b></td><td>${escapeHtml(data.email)}</td></tr>
      <tr><td><b>Clínica</b></td><td>${escapeHtml(data.clinic)}</td></tr>
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

  return json(200, { ok: true });
};
