import puppeteer from 'puppeteer';

const webUrl = process.env.WEBSITE || 'https://huangsam.github.io';

describe('Website should work as expected', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 100,
    });
    page = await browser.newPage();
  });

  test('basic workflow', async () => {
    await page.goto(webUrl);
    await page.waitForSelector('div.code-block');
    await page.select('select#service', 'github');
  }, 15000);

  afterAll(() => {
    browser.close();
  });
});
