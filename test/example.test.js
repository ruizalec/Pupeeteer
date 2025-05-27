const { timeout } = require('puppeteer');
const puppeteer = require('puppeteer');

describe('Mi prueba de navegador', () => {
    it('Debería abrir una página web', async () => {
        // Aquí puedes agregar tu código de prueba
        const browser = await puppeteer.launch({ headless: false })
        const page = await browser.newPage()
        await page.goto('http://example.com/index.php')
        await browser.close()
    })
    it('Debería abrir una página web x2', async () => {
        // Aquí puedes agregar tu código de prueba
        const browser = await puppeteer.launch({ headless: false })
        const page = await browser.newPage()
        await page.goto('https://sdmsuplementos.com')
        await browser.close()
    })
    it('Debería abrir una página web x3', async () => {
        // Aquí puedes agregar tu código de prueba
        const browser = await puppeteer.launch({ headless: false })
        const page = await browser.newPage()
        await page.goto('https://espanol.yahoo.com/?p=us')
        await browser.close()
    })
})

