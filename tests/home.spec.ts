import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  console.log(`Running ${test.info().title}`);
  await page.goto('http://localhost:5173');
});

test.describe('Site', () => {
  test('has title', async ({ page }) => {
    await expect(page).toHaveTitle(/Sam/);
  });

  test('has source code link', async ({ page }) => {
    await expect(page.getByRole('link', { name: 'Source code' })).toBeVisible();
  });

  test('has social links', async ({ page }) => {
    await expect(page.locator('a.social')).toHaveCount(5);
  });
});
