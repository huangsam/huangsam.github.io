import { test, expect, type Locator } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  console.log(`Running ${test.info().title}`);
  await page.goto('http://localhost:4173');
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
    const socialLinks = page.locator('a.social-link');
    await expect(socialLinks).toHaveCount(expectedSocialLinksCount);

    for (let i = 0; i < expectedSocialLinksCount; i++) {
      const locator = socialLinks.nth(i);

      await expect(locator).toBeVisible();
      expect(await getBackgroundColor(locator)).toBe('rgb(17, 17, 17)');

      await locator.hover();
      await page.waitForTimeout(300); // Wait for transition to complete (0.2s + buffer)

      await expect(locator).toBeVisible();
      expect(await getBackgroundColor(locator)).toBe('rgb(245, 203, 83)');
    }
  });

  test('displays quote with fade animation', async ({ page }) => {
    const quote = page.locator('blockquote');
    await expect(quote).toBeVisible();
    await expect(quote).toContainText('The days are long, but the years are short.');
  });

  test('opens and closes travel modal', async ({ page }) => {
    const travelLink = page.locator('button').filter({ hasText: /These places/ });
    await expect(travelLink).toBeVisible();
    await travelLink.click();

    const modal = page.locator('[role="dialog"]');
    await expect(modal).toBeVisible();
    await expect(modal).toContainText('Travel History');

    // Close via close button
    const closeButton = modal.locator('button[aria-label="Close"]');
    await closeButton.click();
    await expect(modal).not.toBeVisible();
  });

  test('opens repos modal and loads GitHub data', async ({ page }) => {
    const githubLink = page.locator('button').filter({ hasText: /open-source projects/ });
    await expect(githubLink).toBeVisible();
    await githubLink.click();

    const modal = page.locator('[role="dialog"]');
    await expect(modal).toBeVisible();
    await expect(modal).toContainText('Top GitHub Repositories');

    // Check for loading state
    await expect(page.getByText('Loading GitHub stats...')).toBeVisible();

    // Wait for repos to load (assuming API call succeeds)
    await page.waitForSelector('li', { timeout: 10000 });
    const repos = page.locator('li');
    expect(await repos.count()).toBeGreaterThan(0);

    // Close via close button
    const closeButton = modal.locator('button[aria-label="Close"]');
    await closeButton.click();
    await expect(modal).not.toBeVisible();
  });

  test('family modal opens and closes', async ({ page }) => {
    // Find and click the family button - look for the button containing "wife"
    const familyLink = page.locator('button').filter({ hasText: /wife/ });
    await expect(familyLink).toBeVisible();
    await familyLink.click();

    // Verify the modal is visible with the correct title
    const modalTitle = page.locator('text=Family photo in Hawaii');
    await expect(modalTitle).toBeVisible();

    // Verify the modal contains the expected intro
    await expect(page.locator('text=Meet my family!')).toBeVisible();

    // Wait for the lazy-loaded image to appear
    await expect(page.locator('img[alt="Sam with wife and two kids"]')).toBeVisible({
      timeout: 5000,
    });

    // Close via close button
    const closeButton = page.locator('button[aria-label="Close"]').first();
    await closeButton.click(); // Verify the modal is closed
    await expect(modalTitle).not.toBeVisible();
  });
});

/** Retrieves the background color of a given locator element. */
function getBackgroundColor(locator: Locator): Promise<string> {
  return locator.evaluate((el) => getComputedStyle(el).backgroundColor);
}
