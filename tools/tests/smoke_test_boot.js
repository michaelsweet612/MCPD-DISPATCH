const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();
  
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', error => console.log('PAGE ERROR:', error.message));
  page.on('response', response => {
      if (!response.ok()) console.log('HTTP ERROR:', response.url(), response.status());
  });

  await page.goto('file:///' + path.resolve(__dirname, '..', '..', 'MCPD_DISPATCH_TERMINAL.html').replace(/\\/g, '/'), { waitUntil: 'networkidle0' });
  
  await new Promise(r => setTimeout(r, 2000));
  await browser.close();
})();
