import { test, expect, type Locator } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  console.log(`Running ${test.info().title}`);
  await page.goto('https://sambyte.net');
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
      const locator = socialLinks.nth(i);

      const before = await getBackgroundColor(locator);
      expect(before).toBe('rgb(17, 17, 17)');

      await locator.hover();

      const after = await getBackgroundColor(locator);
      expect(after).toBe('rgb(245, 203, 83)');
    }
  });
});

function getBackgroundColor(locator: Locator): Promise<string> {
  return locator.evaluate((el) => getComputedStyle(el).backgroundColor);
}
