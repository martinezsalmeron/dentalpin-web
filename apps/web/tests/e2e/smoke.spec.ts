import { expect, test } from '@playwright/test';

test('root redirects to /es/', async ({ page }) => {
  const res = await page.goto('/');
  expect(res?.status()).toBeLessThan(400);
  await expect(page).toHaveURL(/\/es\/?$/);
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
});

// The picker is a collapsed <details>, so the menu has to be opened first.
const openLanguagePicker = (page: import('@playwright/test').Page) =>
  page.locator('summary[aria-label="Idioma"]').first().click();

test('language switcher navigates to EN', async ({ page }) => {
  await page.goto('/es/');
  await openLanguagePicker(page);
  await page.getByRole('menuitem', { name: /english/i }).click();
  await expect(page).toHaveURL(/\/en\/?$/);
  await expect(page.locator('html')).toHaveAttribute('lang', 'en-US');
});

// The picker rewrites localised slugs, not just the locale prefix. Before this
// it stripped the prefix only, so every non-home page switched into a 404.
test('language switcher translates the slug, not just the prefix', async ({ page }) => {
  await page.goto('/es/funcionalidades/odontograma/');
  await openLanguagePicker(page);
  await page.getByRole('menuitem', { name: /français/i }).click();
  await expect(page).toHaveURL(/\/fr\/fonctionnalites\/odontogramme\/?$/);
  await expect(page.locator('html')).toHaveAttribute('lang', 'fr-FR');
  await expect(page.getByRole('heading', { name: 'Odontogramme' }).first()).toBeVisible();
});

// PT reuses the Spanish /funcionalidades/ directory but has its own module
// slugs, so both locales are generated from one [slug].astro. If that fan-out
// regresses, /pt/funcionalidades/orcamentos/ stops existing.
test('Portuguese reuses the Spanish path but keeps its own module slug', async ({ page }) => {
  await page.goto('/es/funcionalidades/presupuestos/');
  await openLanguagePicker(page);
  // Two Portuguese entries since pt-BR exists, so the match has to be exact.
  await page.getByRole('menuitem', { name: /português \(pt\)/i }).click();
  await expect(page).toHaveURL(/\/pt\/funcionalidades\/orcamentos\/?$/);
  await expect(page.locator('html')).toHaveAttribute('lang', 'pt');
  await expect(page.getByRole('heading', { name: 'Orçamentos' }).first()).toBeVisible();
});

test('features page renders Bento grid', async ({ page }) => {
  await page.goto('/es/funcionalidades');
  await expect(
    page.getByRole('heading', { name: /menos pestañas|odontograma/i }).first(),
  ).toBeVisible();
});

// The country hint reads Cloudflare's /cdn-cgi/trace, which does not exist off
// production, so the tests serve it themselves. A Mexican landing on the
// Spanish page is the real case: he would otherwise read 89 € and Verifactu.
const fromCountry = (page: import('@playwright/test').Page, loc: string) =>
  page.route('**/cdn-cgi/trace', (route) =>
    route.fulfill({ status: 200, body: `fl=xx1\nloc=${loc}\n` }),
  );

test('a visitor in Mexico is offered the Mexican page, not redirected', async ({ page }) => {
  await fromCountry(page, 'MX');
  await page.goto('/es/precios');
  const strip = page.locator('[data-locale-hint]:not([hidden])');
  await expect(strip).toHaveCount(1);
  await expect(strip.getByRole('link')).toHaveAttribute('href', '/es-mx/precios/');
  // The URL stays put: redirecting by IP hides content from crawlers.
  await expect(page).toHaveURL(/\/es\/precios/);

  await strip.getByRole('button').click();
  await expect(strip).toHaveCount(0);
  await page.reload();
  await expect(page.locator('[data-locale-hint]:not([hidden])')).toHaveCount(0);
});

test('no hint when the country already matches the page', async ({ page }) => {
  await fromCountry(page, 'MX');
  await page.goto('/es-mx/precios');
  await expect(page.locator('[data-locale-hint]:not([hidden])')).toHaveCount(0);
});

// The pricing page is driven by src/data/pricing.ts: a market with a published
// tariff shows figures and a total, one without shows "let's talk" instead.
// Spain is also the only market with the invoicing integration, so it must be
// the only one that does not carry the tax warning.
test('Spanish pricing shows the fee, the total and no tax warning', async ({ page }) => {
  await page.goto('/es/precios');
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Tus datos son tuyos');
  await expect(page.getByText('105 € al mes')).toBeVisible();
  await expect(page.getByRole('row', { name: /Total aproximado/ })).toContainText('105 €');
  await expect(page.getByText(/no está integrada con/)).toHaveCount(0);
});

test('an unpriced market quotes instead of publishing a figure', async ({ page }) => {
  await page.goto('/fr/tarifs');
  await expect(page.getByText('Parlons-en').first()).toBeVisible();
  await expect(page.getByText(/89/)).toHaveCount(0);
  // The invoicing warning is a legal must in markets without the integration.
  await expect(page.getByRole('heading', { name: /n'est pas raccordée/ })).toBeVisible();
});

test('pricing CTAs preselect the managed reason on the contact form', async ({ page }) => {
  await page.goto('/es/precios');
  await page.getByRole('link', { name: 'Cuéntanos tu caso' }).first().click();
  await expect(page).toHaveURL(/\/es\/contacto\/\?reason=managed$/);
  await expect(page.locator('select[name="reason"]')).toHaveValue('managed');
});

test('contact form shows validation on empty submit', async ({ page }) => {
  await page.goto('/es/contacto');
  await page.getByRole('button', { name: /enviar/i }).click();
  // Native validity — required inputs block submit.
  const nameInput = page.locator('input[name="name"]');
  await expect(nameInput).toBeFocused();
});

// The contact page is the lead funnel, so its four doors have to survive any
// nav or CTA reshuffle: the form, the demo, Telegram and the repo.
test('contact page offers every way in', async ({ page }) => {
  await page.goto('/es/contacto');
  await expect(page.locator('#contact-form')).toBeVisible();
  // Scoped to the rail: the footer links to some of these too, and the point
  // is that they sit next to the form rather than only down there.
  const rail = page.locator('aside');
  await expect(rail.locator('a[href^="https://demo.dentalpin.com"]')).toBeVisible();
  await expect(rail.locator('a[href^="https://t.me/"]')).toBeVisible();
  await expect(rail.locator('a[href*="github.com"]')).toBeVisible();
});

// Both assertions hold with or without Resend configured, so they check the
// schema rather than the environment.
test('contact API drops honeypot hits silently and rejects bad payloads', async ({ request }) => {
  // A filled trap must look like success to the bot, and must not send mail.
  const trapped = await request.post('/api/contact', {
    data: { name: 'Bot Bot', email: 'bot@example.com', website: 'http://spam' },
  });
  expect(trapped.status()).toBe(200);

  const bad = await request.post('/api/contact', {
    data: { name: 'X', email: 'not-an-email', reason: 'not-a-reason' },
  });
  expect(bad.status()).toBe(400);
});

// The India GST module page is generated from the same [slug].astro fan-out
// as every other module, with per-locale slugs (india-gst → gst-inde).
test('India GST module page exists and the picker translates its slug', async ({ page }) => {
  await page.goto('/en/features/india-gst/');
  await expect(page.getByRole('heading', { name: 'India GST' }).first()).toBeVisible();
  // The picker label is localised: "Language" on /en/, "Idioma" on /es/.
  await page.locator('summary[aria-label="Language"]').first().click();
  await page.getByRole('menuitem', { name: /français/i }).click();
  await expect(page).toHaveURL(/\/fr\/fonctionnalites\/gst-inde\/?$/);
});

// The features index carries the tier-2 catalog and the compliance table,
// plus the real product numbers (35 modules, 9 languages).
test('features index shows catalog, compliance and the 35 stat', async ({ page }) => {
  await page.goto('/es/funcionalidades/');
  await expect(page.locator('#catalog')).toBeVisible();
  await expect(page.locator('#compliance')).toBeVisible();
  await expect(page.locator('dd', { hasText: '35' }).first()).toBeVisible();
});

// The India strip mirrors the Verifactu strip: /en/ only. The mega-menu links
// the module everywhere, so the check keys on the callout's own h2.
test('India callout renders on /en/ and not on /es/', async ({ page }) => {
  const callout = (p: import('@playwright/test').Page) =>
    p.locator('a').filter({ has: p.locator('h2') }).filter({ hasText: /GST/ });
  await page.goto('/en/');
  await expect(callout(page).first()).toBeVisible();
  await page.goto('/es/');
  await expect(callout(page)).toHaveCount(0);
});
