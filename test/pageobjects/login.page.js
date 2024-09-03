import { $ } from '@wdio/globals'
import Page from './page.js';

class LoginPage extends Page {

    get userNameTextBox () {
        return $('#user-name');
    }

    get passwordTextBox () {
        return $('#password');
    }

    get btnLogin () {
        return $('//input[@type="submit"]')
    }

    get errorMessage () {        
        return $('//*[@id="login_button_container"]/div/form/div[3]/h3')
    }

    async inputUsername(username){
        await this.userNameTextBox.setValue(username)
    }

    async inputPassword(password){
        await this.passwordTextBox.setValue(password)
    }

    async clickBtnLogin(){
        await this.btnLogin.click()
    }

    async login(username, password){
        await this.inputUsername(username)
        await this.inputPassword(password)
        await this.clickBtnLogin()
    }

    async validateWrongPassword(){
        await expect(this.errorMessage).toHaveText('Epic sadface: Username and password do not match any user in this service');
    }

    open () {
        return super.open("")
    }
}

export default new LoginPage(); 


/**
 * sub page containing specific selectors and methods for a specific page
 */
// class LoginPage extends Page {
//     /**
//      * define selectors using getter methods
//      */
//     get inputUsername () {
//         return $('#username');
//     }

//     get inputPassword () {
//         return $('#password');
//     }

//     get btnSubmit () {
//         return $('button[type="submit"]');
//     }

//     /**
//      * a method to encapsule automation code to interact with the page
//      * e.g. to login using username and password
//      */
//     async login (username, password) {
//         await this.inputUsername.setValue(username);
//         await this.inputPassword.setValue(password);
//         await this.btnSubmit.click();
//     }

//     /**
//      * overwrite specific options to adapt it to page object
//      */
//     open () {
//         return super.open('login');
//     }
// }

// export default new LoginPage();
