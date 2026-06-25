import{expect} from '@playwright/test';

class JobsPage {
    constructor(page){
        this.page=page;
        this.JobsPageTab=page.locator('a[href="/jobs"]');


    }

    async job(){
        await this.JobsPageTab.click();
    }
}

module.exports=JobsPage;