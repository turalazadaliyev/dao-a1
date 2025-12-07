const { chromium } = require('playwright');

(async () => {
  try {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    const url = 'http://localhost:3000';
    console.log('Navigating to', url);
    await page.goto(url, { waitUntil: 'networkidle' });
    await page.screenshot({ path: 'dao_screenshot.png', fullPage: true });
    await browser.close();
    console.log('Screenshot saved to dao_screenshot.png');
  } catch (err) {
    console.error('Screenshot failed:', err);
    process.exit(1);
  }
})();
