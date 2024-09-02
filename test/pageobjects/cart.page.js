import Page from "./page";


class CartPage extends Page {

    get checkoutBtn(){}
    get continueShoppingBtn(){}

    open (){
        return super.open("cart.html");
    }
}

export default new CartPage();