import{expect} from '@playwright/test';

class ScreeningPage {
    constructor(page){
        this.page=page;
        this.screeningTab=page.locator('a[href="/screening"]');
        //this.AIScreeningResultsText=page.getByRole('heading',{name: 'AI Screening Results'});
        this.AIScreeningResultsText=page.getByText('AI Screening Results',{ exact: true });
        // this.ProposedHeader=page.getByRole('heading',{name:'AI Proposed'});
        this.ProposedHeader=page.getByText('AI PROPOSED',{ exact: true });
        this.InvitationSent=page.getByText('INVITATIONS SENT',{ exact: true });

        this.ProposedTab=page.getByText('Proposed',{ exact: true });

        this.ShowingProposedOnlyText=page.getByText('Showing: AI Proposed Only',{ exact: true });
        this.minscore=page.getByText('Min. Score',{ exact: true });
//Interviewiung tab
        this.InterviewingTab=page.getByText('Interviewing',{ exact: true });
        this.ShowingCandidatesInterviewingOnlyText=page.getByText('Showing: Candidates currently in the AI interview workflow ',{exact:true}) 
    }

    async screening(){
       await this.screeningTab.click();
       await expect(this.AIScreeningResultsText).toBeVisible();
       await expect(this.ProposedHeader).toBeVisible();
       await expect(this.InvitationSent).toBeVisible();
       await this.ProposedTab.click();
       await expect(this.ShowingProposedOnlyText).toBeVisible();
       await expect(this.minscore).toBeVisible();
       await this.InterviewingTab.click();
       await expect(this.ShowingCandidatesInterviewingOnlyText).toBeVisible();
    }
    


}

module.exports=ScreeningPage;