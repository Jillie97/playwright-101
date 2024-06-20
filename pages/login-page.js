const { expect } = require('@playwright/test');

exports.LoginPage = class LoginPage {

    constructor(page) {
        this.page = page;
        this.inputEmail = page.getByTestId('email-input');
        this.inputPassword = page.getByTestId('password-input');
        this.buttonLogin = page.getByTestId('login-button');
        this.modalSuccess = page.getByTestId('login-success-notification')
        this.buttonCloseModal = page.getByLabel('Close', { exact: true })
        this.modalInvalidEmailOrPassword = page.getByTestId('login-invalid-notification')
    }

    async fillInEmail(email) {
        await this.inputEmail.fill(email);
    }

    async fillInPassword(password) {
        await this.inputPassword.fill(password);
    }

    async clickButtonLogin() {
        await this.buttonLogin.click();
    }

    async displayModalSuccess() {
        await expect(this.modalSuccess).toBeVisible();
    }

    async displayModalInvalidEmailOrPassword() {
        await expect(this.modalInvalidEmailOrPassword).toBeVisible();
    }

    async clickButtonCloseModal() {
        await this.buttonCloseModal.click();
    }
}