import puppeteer from 'puppeteer';
import services from './services';

// Web URL
const webUrl = process.env.WEB_URL || 'https://huangsam.github.io';

// Timeout in milliseconds
const allTimeOut = 10000;

describe('Homepage', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.setCacheEnabled(false);
    await page.goto(webUrl);
    await page.waitForSelector('div.code-block');
  }, allTimeOut);

  test.each(services.getServices())('has %s in dropdown', async (svc) => {
    await page.select('select#service', svc);
  });

  afterAll(() => {
    browser.close();
  }, allTimeOut);
});
