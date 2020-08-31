const { chromium } = require('playwright');

(async() => {
  const browser = await chromium.launch({ executablePath: process.argv[2] });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.setContent('<select></select>');
  await page.click('select');
  await context.close();
  await browser.close();
})();
