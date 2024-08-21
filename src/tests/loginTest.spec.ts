import {test,expect} from "@playwright/test"
import LoginPage from "../pages/LoginPage"
import { env } from "process";

test("login in the application",async({page})=>{

    const loginPage = new LoginPage(page);
    await loginPage.navigateTo("https://login.salesforce.com/");
    await loginPage.enterUserName("harshmehta.in@gmail.com");
    await loginPage.entePassword("Myfamily1!");
    await loginPage.clickLoginButton();
    await expect(page.url()).toContain("SetupOneHome")

})