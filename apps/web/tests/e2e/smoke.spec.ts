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
  await page.getByRole('menuitem', { name: /português/i }).click();
  await expect(page).toHaveURL(/\/pt\/funcionalidades\/orcamentos\/?$/);
  await expect(page.locator('html')).toHaveAttribute('lang', 'pt');
  await expect(page.getByRole('heading', { name: 'Orçamentos' }).first()).toBeVisible();
});

test('features page renders Bento grid', async ({ page }) => {
  await page.goto('/es/funcionalidades');
  await expect(page.getByRole('heading', { name: /menos pestañas|odontograma/i }).first()).toBeVisible();
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
