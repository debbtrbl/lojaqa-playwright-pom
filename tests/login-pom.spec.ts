
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { test as authTest, expect as authExpect } from '../fixtures/auth.fixture';

test.describe('Login LojaQA com POM', () => {
    let loginPage: LoginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);

        await loginPage.goto();
    });

    test('deve realizar login com cliente válido', async ({ page }) => {
        await loginPage.login(
            'user@system.com',
            'UserPassword123'
        );

        await expect(page).toHaveURL(/painel\.html/);
    });

    test('deve exibir erro com senha incorreta', async ({ page }) => {
        await loginPage.login(
            'user@system.com',
            'WrongPassword123'
        );

        await expect(loginPage.getErrorMessage()).toBeVisible();
        await expect(page).toHaveURL(/login\.html/);
    });

    test('botão de login deve iniciar desabilitado', async () => {
        await expect(loginPage.getLoginButton()).toBeDisabled();
    });
});

authTest('deve acessar a aplicação com fixture autenticada', async ({
    loggedPage,
}) => {
    await authExpect(loggedPage).toHaveURL(/painel\.html/);

    const loginPage = new LoginPage(loggedPage);

    await authExpect(loginPage.getPanelTitle()).toBeVisible();
});
