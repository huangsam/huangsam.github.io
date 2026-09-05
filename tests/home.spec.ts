import { test, expect, type Locator } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  console.log(`Running ${test.info().title}`);
  await page.goto('http://localhost:4173');
});

test.describe('Site', () => {
  test('has title', async ({ page }) => {
    await expect(page).toHaveTitle(/Sam/);
  });

  test('has canonical link', async ({ page }) => {
    const canonicalLink = page.locator('link[rel="canonical"]');
    await expect(canonicalLink).toHaveAttribute('href', 'https://sambyte.net');
  });

  test('has valid Schema.org JSON-LD structured data', async ({ page }) => {
    const jsonLdScript = page.locator('script[type="application/ld+json"]');
    await expect(jsonLdScript).toHaveCount(1);
    const content = await jsonLdScript.textContent();
    expect(content).toBeTruthy();

    const data = JSON.parse(content!);
    expect(data['@context']).toBe('https://schema.org');
    expect(data['@graph']).toBeDefined();
    expect(Array.isArray(data['@graph'])).toBe(true);

    const website = data['@graph'].find((item: { '@type': string }) => item['@type'] === 'WebSite');
    expect(website).toBeDefined();
    expect(website.url).toBe('https://sambyte.net');
    expect(website.name).toBe('Sam Huang');

    const person = data['@graph'].find((item: { '@type': string }) => item['@type'] === 'Person');
    expect(person).toBeDefined();
    expect(person.name).toBe('Sam Huang');
    expect(person.jobTitle).toBe('Software Engineer');
    expect(person.worksFor).toEqual({
      '@type': 'Organization',
      name: 'Tesla',
    });
    expect(person.sameAs).toEqual([
      'https://github.com/huangsam',
      'https://www.linkedin.com/in/sambyte/',
      'https://twitter.com/s_c_huang',
    ]);
    expect(person.knowsAbout).toContain('High-Performance Systems');
    expect(person.knowsAbout).toContain('Go');
    expect(person.skills).toContain('Distributed Systems');
  });

  test('has source code link', async ({ page }) => {
    await expect(page.getByRole('link', { name: 'Source code' })).toBeVisible();
  });

  test('has social links', async ({ page }) => {
    const expectedSocialLinksCount = 3;
    const socialLinks = page.locator('a.social-link');
    await expect(socialLinks).toHaveCount(expectedSocialLinksCount);

    for (let i = 0; i < expectedSocialLinksCount; i++) {
      const locator = socialLinks.nth(i);

      await expect(locator).toBeVisible();
      expect(await getBackgroundColor(locator)).toBe('rgb(17, 17, 17)');

      await locator.hover();
      await page.waitForTimeout(500); // Wait for transition to complete (0.15s + buffer for CI)

      await expect(locator).toBeVisible();
      expect(await getBackgroundColor(locator)).toBe('rgb(245, 203, 83)');
    }
  });

  test('displays quote with fade animation', async ({ page }) => {
    const quote = page.locator('blockquote');
    await expect(quote).toBeVisible();
    await expect(quote).toContainText('The days are long, but the years are short.');
  });

  test('renders featured projects section and links', async ({ page }) => {
    const featuredHeading = page.locator('h2', { hasText: 'Featured Projects' });
    await expect(featuredHeading).toBeVisible();

    const ultimatePythonCard = page.locator('h3', { hasText: 'Ultimate Python' });
    await expect(ultimatePythonCard).toBeVisible();

    const systologyCard = page.locator('h3', { hasText: 'Systology' });
    await expect(systologyCard).toBeVisible();

    const rustokuCard = page.locator('h3', { hasText: 'Rustoku' });
    await expect(rustokuCard).toBeVisible();

    // Verify links exist and have external targets
    const link = page.locator('a', { hasText: 'Ultimate Python' });
    await expect(link).toHaveAttribute('href', 'https://ultimatepython.org');
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

  test('keyboard shortcuts modal opens and toggles via hotkey and closes via escape', async ({
    page,
  }) => {
    // Verify subtle footer hint is visible
    const footerHint = page.locator('.shortcuts-hint');
    await expect(footerHint).toBeVisible();
    await expect(footerHint).toContainText('for navigation');

    // 1. Open via '?' hotkey
    await page.keyboard.press('?');
    const modalTitle = page.getByRole('heading', { name: 'Keyboard Navigation' });
    await expect(modalTitle).toBeVisible();
    await expect(page.locator('text=Scroll down / up')).toBeVisible();
    await expect(page.locator('text=Previous / next interactive element')).toBeVisible();
    await expect(page.locator('text=Jump to first / last element')).toBeVisible();
    await expect(page.locator('text=Close modal')).toBeVisible();

    // Toggle closed via '?' hotkey
    await page.keyboard.press('?');
    await expect(modalTitle).not.toBeVisible();

    // 2. Open via '?' hotkey and close via Escape
    await page.keyboard.press('?');
    await expect(modalTitle).toBeVisible();
    await page.keyboard.press('Escape');
    await expect(modalTitle).not.toBeVisible();

    // 3. Open via '?' hotkey and close via close button
    await page.keyboard.press('?');
    await expect(modalTitle).toBeVisible();
    const closeButton = page.locator('button[aria-label="Close"]').first();
    await closeButton.click();
    await expect(modalTitle).not.toBeVisible();
  });
});

/** Retrieves the background color of a given locator element. */
function getBackgroundColor(locator: Locator): Promise<string> {
  return locator.evaluate((el) => getComputedStyle(el).backgroundColor);
}
