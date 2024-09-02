import homePage from "../pageobjects/home.page";
import LoginPage from "../pageobjects/login.page";


describe('Login Test', () => {
    it('Login Successfully', async () => {
        await LoginPage.open();
        await LoginPage.login("standard_user", "secret_sauce");
        await homePage.ValidateOnHomePage();

        await browser.pause(5000);

    });
});