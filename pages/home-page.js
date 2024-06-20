const { expect } = require('@playwright/test');

exports.HomePage = class HomePage {

    constructor(page) {
        this.page = page;
        this.buttonProfile = page.getByTestId('profile-logout');
        this.buttonLogout = page.getByTestId('logout-button');
    }

    async clickButtonProfile() {
        await this.buttonProfile.click();
    }

    async clickButtonLogout() {
        await this.buttonLogout.click();
    }
}