const {test,expect}=require('@playwright/test');

const LoginPage=require('../../pages/LoginPage.js');
const LiveInterviewMonitoringPage=require('../../pages/LiveInterviewMonitoringPage.js');
const logindata=require('../../utils/env.js');  

test.beforeEach(async({page,browser})=>{
    const loginPage=new LoginPage(page);
    await loginPage.navigate('https://dev.smarthire.rezolvecloud.com/login');       
    await loginPage.login(
        logindata.email  ,          
        logindata.password
    );
});


test('Verify Monotoring tab',async({page})=>{
    const loginPage=new LoginPage(page);
    const liveMonitoringPage=new LiveInterviewMonitoringPage(page);
    await liveMonitoringPage.liveinterviewmonitoring();
    await expect(page).toHaveURL('https://dev.smarthire.rezolvecloud.com/interview-room');  
});
