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
    const expectedSocialLinksCount = 5;
    const socialLinks = page.locator('a.social');
    await expect(socialLinks).toHaveCount(expectedSocialLinksCount);

    for (let i = 0; i < expectedSocialLinksCount; i++) {
      const locator = socialLinks.nth(i);

      await expect(locator).toBeVisible();
      expect(await getBackgroundColor(locator)).toBe('rgb(17, 17, 17)');

      await locator.hover();

      await expect(locator).toBeVisible();
      expect(await getBackgroundColor(locator)).toBe('rgb(245, 203, 83)');
    }
  });
});

/** Retrieves the background color of a given locator element. */
function getBackgroundColor(locator: Locator): Promise<string> {
  return locator.evaluate((el) => getComputedStyle(el).backgroundColor);
}
