import { test, expect, type Locator } from '@playwright/test';

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
    const socialLinks = page.locator('a.social');
    await expect(socialLinks).toHaveCount(5);

    for (let i = 0; i < 5; i++) {
      const before = await getBackgroundColor(socialLinks.nth(i));
      expect(before).toBe('rgb(17, 17, 17)');

      await socialLinks.nth(i).hover();

      const after = await getBackgroundColor(socialLinks.nth(i));
      expect(after).toBe('rgb(245, 203, 83)');
    }
  });
});

function getBackgroundColor(locator: Locator): Promise<String> {
  return locator.evaluate((el) => getComputedStyle(el).backgroundColor);
}
