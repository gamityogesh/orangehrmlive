import { expect, Locator, Page } from "@playwright/test";

export class LoginPage {
    readonly page: Page
    readonly username: Locator
    readonly password: Locator
    readonly loginButton: Locator
    readonly userDropdownName: Locator
    readonly userProfileImage: Locator
    constructor(page: Page) {
        this.page = page
        this.username = page.locator("input[placeholder='username']")
        this.password = page.locator("input[placeholder='password']")
        this.loginButton = page.locator("button[type='submit']")
        this.userDropdownName = page.locator(".oxd-userdropdown-name")
        this.userProfileImage = page.locator(".oxd-userdropdown-img")
    }
    async goto() {
        await this.page.goto('/', { waitUntil: 'commit' })
    }
    async validUserLogin(username: string, password: string) {
        await this.username.fill(username)
        await this.password.fill(password)
        await this.loginButton.click()

    }
    async verifyUserIsLoginSuccess() {
        await expect(this.userDropdownName).toBeVisible()
        await expect(this.userProfileImage).toBeVisible()
    }

}