const { chromium } =require('@playwright/test');

require('dotenv').config();

async function globalSetup() {

    const browser = await chromium.launch();

    const page = await browser.newPage();

   /* await page.goto('https://dev.smarthire.rezolvecloud.com/login');

    await page.fill('input[inputmode="email"]', process.env.EMAIL);

    await page.fill('input[type="password"]', process.env.PASSWORD);

    */
  //  await page.click('button[type=button]');
   // await page.click('button', { name: 'Log in'});
    
    await page.context().storageState({path: 'auth/auth.json'});

    await browser.close();
}

module.exports = globalSetup;