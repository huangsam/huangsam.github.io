import puppeteer from 'puppeteer';
import { getServices } from './services';

// Web URL
const webUrl = process.env.WEB_URL || 'https://huangsam.github.io';

// Timeout in milliseconds
const allTimeOut = 10000;

describe('Website should work as expected', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 100,
    });
    page = await browser.newPage();
    await page.setCacheEnabled(false);
    await page.goto(webUrl);
    await page.waitForSelector('div.code-block');
  }, allTimeOut);

  test.each(getServices())('select %s from dropdown', async (svc) => {
    await page.select('select#service', svc);
  });

  afterAll(() => {
    browser.close();
  }, allTimeOut);
});
