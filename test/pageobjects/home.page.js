import Page from "./page";


class HomePage extends Page {

    get cartIcon(){}
    get addToCartBtn(){}
    get produtImage(){}

    open () { 
        return super.open("inventory.html");
    }
}

export default new HomePage();
