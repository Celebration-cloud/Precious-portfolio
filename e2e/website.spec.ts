import { expect, test } from '@playwright/test';

const routes = ['/', '/about', '/services', '/portfolio', '/testimonials', '/blog', '/contact'];

for (const route of routes) {
  test(`${route} renders the shared website shell`, async ({ page }) => {
    await page.goto(route);
    await expect(page.getByRole('link', { name: /PEC Media Production home/i })).toBeVisible();
    await expect(page.locator('main')).toBeVisible();
  });
}

test('blog cards open a generated detail route', async ({ page }) => {
  await page.goto('/blog');
  await page
    .getByRole('link', { name: /Read Article/i })
    .first()
    .click();
  await expect(page).toHaveURL(/\/blog\/.+/);
  await expect(page.getByRole('link', { name: /Back to blog/i })).toBeVisible();
});

test('contact form exposes client validation', async ({ page }) => {
  await page.goto('/contact');
  await page.getByRole('button', { name: /Send Message/i }).click();
  await expect(page.getByText(/Name must be at least 2 characters/i)).toBeVisible();
});

test('unknown routes render the branded 404', async ({ page }) => {
  await page.goto('/this-route-does-not-exist');
  await expect(page.getByText(/This page is out of frame/i)).toBeVisible();
});
