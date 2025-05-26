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
        await page.goto('https://sdmsuplementos.com/collections/advance-nutrition/products/hydrotein-5-lbs')
        await page.waitForSelector('h1')
        timeout = 10000
        const title = await page.title()
        await browser.close()
    })
    it('Debería abrir una página web x3', async () => {
        // Aquí puedes agregar tu código de prueba
        const browser = await puppeteer.launch({ headless: false })
        const page = await browser.newPage()
        await page.goto('htpp://yahoo.com')
        await browser.close()
    })
})

