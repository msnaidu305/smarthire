class LoginPage {

    constructor(page) {
        this.page = page;
        this.emailTextbox = page.locator('input[inputmode="email"]');
        this.passwordTextbox = page.locator('input[type="password"]');
        //this.loginButton = page.locator('button[type="button"]');
        this.loginButton = page.getByRole('button', {name: 'Log in'});
    }

    async navigate(url) {
        await this.page.goto(url);
    }
 
    async login(email, password) {

        await this.emailTextbox.fill(email);

        await this.passwordTextbox.fill(password);

        await this.loginButton.click();
    }
}

module.exports = LoginPage;