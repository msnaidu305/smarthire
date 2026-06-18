import{expect} from '@playwright/test';

class ScreeningPage {
    constructor(page){
        this.page=page;
        this.screeningTab=page.locator('a[href="/screening"]');


    }

    async screening(){
        await this.screeningTab.click();
    }
}

module.exports=ScreeningPage;