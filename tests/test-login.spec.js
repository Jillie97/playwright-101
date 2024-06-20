// @ts-check
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/login-page');

test('ผู้ใช้งานเข้าสู่ระบบได้สำเร็จ', async ({ page }) => {

  const loginPage = new LoginPage(page);
  await page.goto('https://odds-playwright.vercel.app/');
  await loginPage.fillInEmail('jill@odds.team');
  await loginPage.fillInPassword('12345678');
  await loginPage.clickButtonLogin();
  await loginPage.displayModalSuccess();
});

test('ผู้ใช้งานเข้าสู่ระบบไม่สำเร็จ เนื่องจากกรอกรหัสผ่านไม่ถูกต้อง', async ({ page }) => {

  const loginPage = new LoginPage(page);
  await page.goto('https://odds-playwright.vercel.app/');
  await loginPage.fillInEmail('jill@odds.team');
  await loginPage.fillInPassword('12345677');
  await loginPage.clickButtonLogin();
  await loginPage.displayModalInvalidEmailOrPassword();
});

