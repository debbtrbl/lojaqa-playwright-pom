
import { test, expect } from '../fixtures/auth.fixture';
import { LoginPage } from '../pages/loginPage';

test.describe('Acesso à área protegida - painel', () => {
    test('deve acessar o painel com usuário autenticado', async ({
        loggedPage,
    }) => {
        const loginPage = new LoginPage(loggedPage);

        await expect(loggedPage).toHaveURL(/painel\.html/);
        await expect(loginPage.getPanelTitle()).toBeVisible();
        await expect(loginPage.getLogoutButton()).toBeVisible();
    });
});
