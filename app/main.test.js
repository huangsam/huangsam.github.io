import puppeteer from 'puppeteer';

const webUrl = process.env.WEBSITE || 'https://huangsam.github.io';

describe('Website should work as expected', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
  });

  test('basic workflow', async () => {
    await page.goto(webUrl);
    await page.waitForSelector('.code-block');
    await page.select('#service', 'github');
  }, 10000);

  afterAll(() => {
    browser.close();
  });
});
