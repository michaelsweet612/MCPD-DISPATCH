const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();
  
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', error => console.log('PAGE ERROR:', error.message));
  page.on('response', response => {
      if (!response.ok()) console.log('HTTP ERROR:', response.url(), response.status());
  });

  await page.goto('file:///' + __dirname.replace(/\\/g, '/') + '/MCPD_DISPATCH_TERMINAL.html', { waitUntil: 'networkidle0' });
  
  await new Promise(r => setTimeout(r, 2000));
  await browser.close();
})();
