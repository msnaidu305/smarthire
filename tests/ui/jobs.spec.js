const{test,expect}=require('@playwright/test');
const LoginPage=require('../../pages/LoginPage');
const JobsPage=require('../../pages/JobsPage');
const logindata=require('../../utils/env.js');  

test.beforeEach(async({page})=>{
    const loginPage=new LoginPage(page);
    await loginPage.navigate('https://dev.smarthire.rezolvecloud.com/login');       
    await loginPage.login(
        logindata.email,
        logindata.password
    );
});

test('Verify Jobs tab',async({page})=>{
    const loginPage=new LoginPage(page);
    const jobsPage=new JobsPage(page);
    
    await jobsPage.job();
    await expect(page).toHaveURL('https://dev.smarthire.rezolvecloud.com/jobs');
});