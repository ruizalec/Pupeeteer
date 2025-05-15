const puppeteer = require('puppeteer');

describe('Mi prueba de navegador', () => {
    it('Debería abrir una página web', async () => {
        // Aquí puedes agregar tu código de prueba
        const browser = await puppeteer.launch({ headless: false });
        const page = await browser.newPage();
        await page.goto('htpp://example.com');
        await page.waitForSelector('h1');
        await browser.close();
    })
})

