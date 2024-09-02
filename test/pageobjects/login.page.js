import { $ } from '@wdio/globals'
import Page from './page.js';

class LoginPage extends Page {

    get userNameTextBox () {
        return $('#username');
    }

    get passwordTextBox () {
        return $('#password');
    }

    get btnSubmit () {
        return $('//input[@type="submit"]');
    }

    async inputUsername(username){
        await this.userNameTextBox.setValue(username);
    }

    async inputPassword(password){
        await this.passwordTextBox.setValue(password);
    }

    async clickBtnSubmit(){
        await this.btnSubmit.click();
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
