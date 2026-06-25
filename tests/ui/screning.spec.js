const {test, expect}= require('@playwright/test');

const LoginPage = require('../../pages/LoginPage');
const ScreeningPage = require('../../pages/ScreeningPage');
const logindata=require('../../utils/env.js');


test.beforeEach(async ({page,browser}) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate('https://dev.smarthire.rezolvecloud.com/login');
    await loginPage.login(
        logindata.email,
        logindata.password     
    );
});

test('Verify Screening tab', async ({page}) => {
  //  const loginPage = new LoginPage(page);
    const screeningPage = new ScreeningPage(page);
    await screeningPage.screening();
    await expect(screeningPage.AIScreeningResultsText).toBeVisible();
    await expect(screeningPage.ProposedHeader).toBeVisible();
    await expect(screeningPage.InvitationSent).toBeVisible();
   

});

test('Verify Proposed tab', async({page})=>{

    const screeningPage = new ScreeningPage(page);
    await screeningPage.screening();
    await screeningPage.ProposedTab.click();
    await expect(screeningPage.ShowingProposedOnlyText).toBeVisible();
    await expect(screeningPage.minscore).toBeVisible();
});

test('verify Interviewing tab', async({page})=>{
    const screeningPage = new ScreeningPage(page);
    await screeningPage.screening();  
    await screeningPage.InterviewingTab.click();
    await expect(screeningPage.ShowingCandidatesInterviewingOnlyText).toBeVisible();      
});

   

