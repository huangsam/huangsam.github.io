import puppeteer from 'puppeteer';

const webUrl = process.env.WEB_URL || 'https://huangsam.github.io';

const timeOut = 5000;

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
  });

  test.each(['github', 'facebook', 'linkedin', 'wordpress'])(
    'select %s from dropdown',
    async (item) => {
      await page.select('select#service', item);
    },
    timeOut
  );

  afterAll(() => {
    browser.close();
  });
});
