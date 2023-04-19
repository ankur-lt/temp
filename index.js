const playwright = require('playwright');

async function captureScreenshot() {
    const options = {
        headless: true,
        viewport: { width: 1920, height: 1080 }
    }
    const browser = await playwright.webkit.launch(options);
    const context = await browser.newContext();
    const page = await context.newPage();
    
    await page.goto('https://fonts.google.com/specimen/Montserrat');
    await page.waitForLoadState('networkidle');
    await page.screenshot({path: `ss-headless-webkit-montserrat.png`, fullPage: true});
    await browser.close();
}

captureScreenshot();
