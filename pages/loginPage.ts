
import { type Page, type Locator } from '@playwright/test';

export class LoginPage {
    private readonly emailInput: Locator;
    private readonly passwordInput: Locator;
    private readonly loginButton: Locator;
    private readonly errorMessage: Locator;
    private readonly statusMessage: Locator;
    private readonly credentialsBox: Locator;
    private readonly panelTitle: Locator;
    private readonly logoutButton: Locator;

    constructor(private page: Page) {
        this.emailInput = page.locator('#email');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('#loginBtn');
        this.errorMessage = page.locator('#errorMessage');
        this.statusMessage = page.locator('#statusMessage');
        this.credentialsBox = page.locator('#credentials-info');
        this.panelTitle = page.locator('#panelTitle');
        this.logoutButton = page.locator('#logoutButton');
    }

    async goto(): Promise<void> {
        await this.page.goto(
            'https://alisonmelo.github.io/tioalison-pe-t4-fap26/projetos-base/01-sistema-login/login.html'
        );
    }

    async login(email: string, password: string): Promise<void> {
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async fillEmail(email: string): Promise<void> {
        await this.emailInput.fill(email);
    }

    async fillPassword(password: string): Promise<void> {
        await this.passwordInput.fill(password);
    }

    async clickSubmit(): Promise<void> {
        await this.loginButton.click();
    }

    getErrorMessage(): Locator {
        return this.errorMessage;
    }

    getStatusMessage(): Locator {
        return this.statusMessage;
    }

    getLoginButton(): Locator {
        return this.loginButton;
    }

    getCredentialsBox(): Locator {
        return this.credentialsBox;
    }

    getPanelTitle(): Locator {
        return this.panelTitle;
    }

    getLogoutButton(): Locator {
        return this.logoutButton;
    }
}
