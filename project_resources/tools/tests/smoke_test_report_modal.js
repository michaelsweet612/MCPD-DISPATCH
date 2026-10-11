const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();
  
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', error => console.log('PAGE ERROR:', error.message));

  await page.goto('file:///' + path.resolve(__dirname, '..', '..', '..', 'MCPD_DISPATCH_TERMINAL.html').replace(/\\/g, '/'), { waitUntil: 'networkidle0' });
  
  await page.evaluate(() => {
      // Simulate generating a report
      const doc = document.createElement('div');
      doc.id = "test-doc";
      document.body.appendChild(doc);
      
      const fullReport = 'Suspect was bad. They said "I am bad". `Backticks` too.';
      doc.innerHTML = `
          <button class="doc-btn view-report-btn" id="mybtn" style="margin-top: 10px; padding: 5px;">VIEW AUTOMATED REPORT EXTRACT</button>
      `;
      doc.querySelector(".view-report-btn").onclick = () => openReportModal(fullReport);
  });
  
  await page.click('#mybtn');
  
  const text = await page.evaluate(() => document.getElementById('modal-body').innerText);
  console.log("MODAL CONTAINS:", text);
  
  await browser.close();
})();
