const base =require('@playwright/test');

exports.test =base.test.extend(
    {
      authenticatedPage: async ({ page }, use) => {
        await use(page);
        }
});