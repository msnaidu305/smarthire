const {test, expect}= require('@playwright/test');

const LoginPage = require('../../pages/LoginPage');
const ScreeningPage = require('../../pages/ScreeningPage');
const logindata=require('../../utils/env.js');


test.beforeEach(async ({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate('https://dev.smarthire.rezolvecloud.com/login');
    await loginPage.login(
        logindata.email,
        logindata.password     
    );
});

test('Verify Screening tab', async ({page}) => {
    const loginPage = new LoginPage(page);
    const screeningPage = new ScreeningPage(page);
    await screeningPage.screening();

    await expect(page).toHaveURL('https://dev.smarthire.rezolvecloud.com/screening?tab=All&page=1&rows=10')    ;
});