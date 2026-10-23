
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { ctsLogin } from '../data/login.data';

test.describe('Autenticação de múltiplos perfis - Data-Driven', () => {
    for (const cenario of ctsLogin) {
        test(`login com perfil: ${cenario.perfil}`, async ({ page }) => {
            const loginPage = new LoginPage(page);

            await loginPage.goto();

            await loginPage.login(
                cenario.email,
                cenario.senha
            );

            await expect(page).toHaveURL(cenario.urlEsperada);

            if (cenario.esperaSucesso) {
                await expect(loginPage.getPanelTitle()).toBeVisible();
            } else {
                await expect(loginPage.getErrorMessage()).toBeVisible();
            }
        });
    }
});
