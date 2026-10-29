import{test,expect} from '@playwright/test';

class LiveInterviewMonitoringPage{

    constructor(page){
        this.page=page;
        this.LiveInterviewMonitoringTab=page.locator('a[href="/interview-room"]');
    }

    async liveinterviewmonitoring(){
        await this.LiveInterviewMonitoringTab.click();
    }           
};   

module.exports=LiveInterviewMonitoringPage;