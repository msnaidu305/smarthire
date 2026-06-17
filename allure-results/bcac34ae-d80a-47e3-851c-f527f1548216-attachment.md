# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\login.spec.js >> Verify user login
- Location: tests\ui\login.spec.js:10:1

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected: "https://dev.smarthire.rezolvecloud.com/dashboard"
Received: "https://dev.smarthire.rezolvecloud.com/"
Timeout:  5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    5 × unexpected value "https://dev.smarthire.rezolvecloud.com/login"
    9 × unexpected value "https://dev.smarthire.rezolvecloud.com/"

```

```yaml
- region "Notifications alt+T"
- link:
  - /url: /
- link:
  - /url: /screening
- link:
  - /url: /jobs
- link:
  - /url: /interview-room
- img "Superadmin"
- main:
  - button "Expand sidebar"
  - textbox "Search jobs, candidates..."
  - heading "AI Pipeline Intelligence" [level=1]
  - paragraph: Control center for automated screening and evaluation.
  - text: "Last Synced: 1 min ago"
  - button "Export Data"
  - paragraph: 1 candidates evaluated and ready for review
  - button "Review Now":
    - text: Review Now
    - img
  - paragraph: AI successfully sent 1 interview invitations today
  - button "Review Now":
    - text: Review Now
    - img
  - text: Total Interviews conducted by AI Total for the last 3 months
  - button "Last 3 months"
  - button "Last 30 days"
  - button
  - text: 2026-06-17 Baseline 1 Total Interviews 1
  - application: 2026-06-17
  - heading "AI Recruiter Status" [level=3]
  - text: Autonomous Screening
  - img
  - text: Inactive Screening Progress 100 1 Invitations Sent AI handled all candidate comms 1 Interviews Scheduled Smart scheduling in progress Live Tracking Activity
  - paragraph: AI screening is currently inactive
  - img
  - heading "AI Proposed" [level=2]
  - paragraph: Top matches from sync
  - button "View All":
    - text: View All
    - img
  - text: TF Thomas Fearing Licensed Remote Therapist
  - img
  - text: 62%
  - paragraph: "\"Holds a Ph.D. in Clinical Psychology with active licensure, meeting the licensed psychologist qualification\""
  - text: SM Stephen Moyer Licensed Remote Therapist
  - img
  - text: 62%
  - paragraph: "\"PhD-level licensed psychologist with over 43 years of clinical experience — far exceeds licensure requirements\""
  - heading "Job Synced From ATS" [level=2]
  - button "View All":
    - text: View All
    - img
  - text: "Job ID: 78 Synced Licensed Remote Therapist 4 Candidates"
- button "Help Us Improve"
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | 
  3  | const LoginPage = require('../../pages/LoginPage');
  4  | 
  5  | //const loginData = require('../../testData/loginData.json');
  6  | const logindata=require('../../utils/env.js');
  7  | 
  8  | 
  9  | 
  10 | test('Verify user login', async ({page}) => {
  11 | 
  12 |     const loginPage = new LoginPage(page);
  13 | 
  14 |     await loginPage.navigate('https://dev.smarthire.rezolvecloud.com/login');
  15 | 
  16 |     await loginPage.login(
  17 |         //loginData.validUser.email, 
  18 |        // loginData.validUser.password
  19 |        // loginData.invalidUser.email,
  20 |         //loginData.invalidUser.password
  21 |         logindata.email,
  22 |         logindata.password
  23 |       
  24 |     );
  25 |   
  26 |    await expect(page).toHaveTitle('Smart-Hire');
  27 |    //await expect(page.locator('text=Welcome to Smart-Hire')).toBeVisible(); 
> 28 |    await expect(page).toHaveURL('https://dev.smarthire.rezolvecloud.com/dashboard');     
     |                       ^ Error: expect(page).toHaveURL(expected) failed
  29 | });
  30 | 
```