describe('Test Saucedemo', () => {
    it('Test 1 - Login Succesfully',async () => {
        await browser.url('https://www.saucedemo.com/');

        const userNameTextBox = await browser.$('#user-name');
        const passwordTextBox = await browser.$('#password');
        const loginButton = await browser.$('//input[@type="submit"]');

        await userNameTextBox.addValue('standard_user');
        await passwordTextBox.addValue('secret_sauce');
        await loginButton.click();

        await browser.pause(5000);
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        await expect(browser).toHaveTitle('Swag Labs');

    });

    it('Test 2 - Login with Wrong Password',async () => {
        await browser.url('https://www.saucedemo.com/');

        const userNameTextBox = await browser.$('#user-name');
        const passwordTextBox = await browser.$('#password');
        const loginButton = await browser.$('//input[@type="submit"]');

        await userNameTextBox.addValue('standard_user');
        await passwordTextBox.addValue('wrong_password');
        await loginButton.click();

        const errorMessage = await browser.$('//*[@id="login_button_container"]/div/form/div[3]/h3');
        await expect(errorMessage).toHaveText('Epic sadface: Username and password do not match any user in this service');
        // await browser.pause(5000);
        // await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        // await expect(browser).toHaveTitle('Swag Labs');
    });
});