const { test, expect } =require('@playwright/test');

const AuthAPI =require('../../api/AuthAPI');

require('dotenv').config();

test('Verify Login API',async ({ request }) => {

    const authAPI =  new AuthAPI(request);

    const response = await authAPI.login(
            process.env.EMAIL,
            process.env.PASSWORD,
            process.env.TENANT_SLUG
        );

    expect( response.status()).toBe(200);

    const body = await response.json();

    console.log(body);
});