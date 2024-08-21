import { Page } from "@playwright/test";

export default class LoginPage{
    private page:Page;

    ip_username = "#username";
    ip_password = "#password";
    btn_login = "#Login";

    constructor(page: Page){
        this.page = page;
    }

    async navigateTo(url:string)
    {
        await this.page.goto(url)
    }

    async enterUserName(name:string)
    {
        await this.page.locator(this.ip_username).fill(name);
    }

    async entePassword(password:string)
    {
        await this.page.locator(this.ip_password).fill(password);
    }

    async clickLoginButton()
    {
        await this.page.locator(this.btn_login).click();
    }
}