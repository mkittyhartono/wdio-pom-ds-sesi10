import homePage from "../pageobjects/home.page";
import LoginPage from "../pageobjects/login.page";


describe('Login Test', () => {
    it('Test 3 - Successful Login - Page Object Based', async () => {
        await LoginPage.open();
        await LoginPage.login("standard_user", "secret_sauce");
        await homePage.ValidateOnHomePage();

        await browser.pause(5000);
    });

    it('Test 4 - Failed Login - Page Object Based', async () => {
        await LoginPage.open();
        await LoginPage.login("standard_user", "wrong_pass");
        await LoginPage.validateWrongPassword();

        await browser.pause(5000);
    });
});