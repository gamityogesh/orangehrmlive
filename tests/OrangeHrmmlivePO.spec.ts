import { test } from "@playwright/test";
import { POManager } from "../pageObtects/POManager";
test('user login with valid username and password', async ({ page }) => {
    const poManager = new POManager(page)
    const loginPage = poManager.getLoginPage()
    await loginPage.goto()
    await loginPage.validUserLogin("Admin", "admin123")
    await loginPage.verifyUserIsLoginSuccess()
})
