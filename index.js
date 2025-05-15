const puppeteer = require('puppeteer');

async function pruebadenavegador() {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.goto('htpp://example.com');
  await browser.close();
}
pruebadenavegador()