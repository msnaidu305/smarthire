# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\screning.spec.js >> Verify Screening tab
- Location: tests\ui\screning.spec.js:6:1

# Error details

```
ReferenceError: logindata is not defined
```

# Page snapshot

```yaml
- generic [ref=e2]:
  - region "Notifications alt+T"
  - generic [ref=e4]:
    - generic [ref=e5]:
      - img [ref=e7]
      - generic [ref=e11]:
        - heading "Welcome to SmartHire" [level=1] [ref=e12]
        - paragraph [ref=e13]: AI-powered screening connected to your ATS
    - generic [ref=e14]:
      - generic [ref=e15]:
        - generic [ref=e16]: Work Email
        - generic [ref=e17]:
          - img
          - textbox "Email" [ref=e18]
      - generic [ref=e19]:
        - generic [ref=e20]: Password
        - generic [ref=e21]:
          - img
          - textbox "Password" [ref=e22]
          - button [ref=e23] [cursor=pointer]:
            - img [ref=e24]
        - button "Forgot password?" [ref=e27] [cursor=pointer]
      - button "Log in" [disabled] [ref=e28]
```

# Test source

```ts
  1  | const {test, expect}= require('@playwright/test');
  2  | 
  3  | const LoginPage = require('../../pages/LoginPage');
  4  | const ScreeningPage = require('../../pages/ScreeningPage');
  5  | 
  6  | test('Verify Screening tab', async ({page}) => {
  7  |     const loginPage = new LoginPage(page);
  8  |     const screeningPage = new ScreeningPage(page);
  9  |    await loginPage.navigate('https://dev.smarthire.rezolvecloud.com/login');
  10 |    // await loginPage.login('sanyasinaidu@rezolve.com', 'Test@12345');
  11 |        await loginPage.login(
> 12 |            logindata.email,
     |            ^ ReferenceError: logindata is not defined
  13 |            logindata.password
  14 |          
  15 |        );
  16 |    
  17 |     await screeningPage.screening();
  18 | 
  19 |     await expect(page).toHaveTitle('AI Screening Results');
  20 | });
```