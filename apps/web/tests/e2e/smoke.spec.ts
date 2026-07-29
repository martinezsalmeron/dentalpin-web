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
