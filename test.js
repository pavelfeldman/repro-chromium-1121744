const { chromium } = require('playwright');

(async() => {
  const browser = await chromium.launch({ executablePath: process.argv[2] });
  const page = await browser.newPage();
  await page.setContent('<select></select>');
  await page.click('select');
  await page.close();
  await browser.close();
})();
