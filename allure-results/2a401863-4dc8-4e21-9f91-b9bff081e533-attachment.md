# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api\loginAPI.spec.js >> Verify Login API
- Location: tests\api\loginAPI.spec.js:7:1

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 200
Received: 400
```

# Test source

```ts
  1  | const { test, expect } =require('@playwright/test');
  2  | 
  3  | const AuthAPI =require('../../api/AuthAPI');
  4  | 
  5  | require('dotenv').config();
  6  | 
  7  | test('Verify Login API',async ({ request }) => {
  8  | 
  9  |     const authAPI =  new AuthAPI(request);
  10 | 
  11 |     const response = await authAPI.login(
  12 |             process.env.EMAIL,
  13 |             process.env.PASSWORD,
  14 |           //  process.env.tenant_slug,
  15 |         );
  16 | 
> 17 |     expect( response.status()).toBe(200);
     |                                ^ Error: expect(received).toBe(expected) // Object.is equality
  18 | 
  19 |     const body = await response.json();
  20 | 
  21 |     console.log(body);
  22 | });
```