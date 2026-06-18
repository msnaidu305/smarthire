const { test, expect } = require('@playwright/test');

const LoginPage = require('../../pages/LoginPage');

//const loginData = require('../../testData/loginData.json');
const logindata=require('../../utils/env.js');



test('Verify user login', async ({page}) => {

    const loginPage = new LoginPage(page);

    await loginPage.navigate('https://dev.smarthire.rezolvecloud.com/login');

    await loginPage.login(
        //loginData.validUser.email, 
       // loginData.validUser.password
       // loginData.invalidUser.email,
        //loginData.invalidUser.password
        logindata.email,
        logindata.password
     
    );
  
   await expect(page).toHaveTitle('Smart-Hire');
   //await expect(page.locator('text=Welcome to Smart-Hire')).toBeVisible(); 
   await expect(page).toHaveURL('https://dev.smarthire.rezolvecloud.com/');     
});
