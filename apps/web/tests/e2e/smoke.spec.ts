import { expect, test } from '@playwright/test';

test('root redirects to /es/', async ({ page }) => {
  const res = await page.goto('/');
  expect(res?.status()).toBeLessThan(400);
  await expect(page).toHaveURL(/\/es\/?$/);
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
});

test('language switcher navigates to EN', async ({ page }) => {
  await page.goto('/es/');
  await page.getByRole('menuitem', { name: /english/i }).click();
  await expect(page).toHaveURL(/\/en\/?$/);
  await expect(page.locator('html')).toHaveAttribute('lang', 'en-US');
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
