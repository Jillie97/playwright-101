// @ts-check
const { test } = require('@playwright/test');
const { LoginPage } = require('../pages/login-page');
const { HomePage } = require('../pages/home-page');

test('ผู้ใช้งานออกจากระบบได้สำเร็จ', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const homePage = new HomePage(page);
  await page.goto('/');
  await loginPage.fillInEmail('jill@odds.team');
  await loginPage.fillInPassword('12345678');
  await loginPage.clickButtonLogin();
  await loginPage.displayModalSuccess();
  await loginPage.clickButtonCloseModal();

  await homePage.clickButtonProfile();
  await homePage.clickButtonLogout();
});

test('ผู้ใช้งานเข้าสู่ระบบไม่สำเร็จ เนื่องจากกรอกรหัสผ่านไม่ถูกต้อง', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const homePage = new HomePage(page);
  await page.goto('/');
  await loginPage.fillInEmail('jill@odds.team');
  await loginPage.fillInPassword('12345677');
  await loginPage.clickButtonLogin();
  await loginPage.displayModalInvalidEmailOrPassword();
  await loginPage.clickButtonCloseModal();
});

