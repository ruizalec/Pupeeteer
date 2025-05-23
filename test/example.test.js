const puppeteer = require('puppeteer');

describe('Mi prueba de navegador', () => {
    it('Debería abrir una página web', async () => {
        // Aquí puedes agregar tu código de prueba
        const browser = await puppeteer.launch({ headless: false })
        const page = await browser.newPage()
        await page.goto('http://automationpractice.com/index.php')
        await browser.close()
    })
    it('Debería abrir una página web x2', async () => {
        // Aquí puedes agregar tu código de prueba
        const browser = await puppeteer.launch({ headless: false })
        const page = await browser.newPage()
        await page.goto('htpp://google.com')
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

