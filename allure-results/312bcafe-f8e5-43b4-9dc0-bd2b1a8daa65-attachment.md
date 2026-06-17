# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\login.spec.js >> Verify user login
- Location: tests\ui\login.spec.js:9:1

# Error details

```
TypeError: Cannot read properties of undefined (reading 'email')
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
  1  | const { test, expect } = require('@playwright/test');
  2  | 
  3  | const LoginPage = require('../../pages/LoginPage');
  4  | 
  5  | const loginData = require('../../testData/loginData.json');
  6  | 
  7  | 
  8  | 
  9  | test('Verify user login', async ({page}) => {
  10 | 
  11 |     const loginPage = new LoginPage(page);
  12 | 
  13 |     await loginPage.navigate('https://dev.smarthire.rezolvecloud.com/login');
  14 | 
  15 |     await loginPage.login(
  16 |         loginData.validUser.email, 
  17 |         loginData.validUser.password,
> 18 |         loginData.invalidUser.email,
     |                               ^ TypeError: Cannot read properties of undefined (reading 'email')
  19 |         loginData.invalidUser.password
  20 |       
  21 |     );
  22 | 
  23 |     //await expect(page).toHaveURL(/dashboard/);
  24 | });
  25 | 
```