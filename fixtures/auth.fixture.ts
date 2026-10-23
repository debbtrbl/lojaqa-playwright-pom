
import { test as base, expect, type Page } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';

type AuthFixture = {
    loginPage: LoginPage;
    loggedPage: Page;
};

export const test = base.extend<AuthFixture>({
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);

        await loginPage.goto();

        await use(loginPage);
    },

    loggedPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);

        await loginPage.goto();

        await loginPage.login(
            'admin@system.com',
            'AdminPassword123'
        );

        await page.waitForURL(/painel\.html/);

        await use(page);
    },
});

export { expect };
