import { $, expect } from '@wdio/globals'
import Page from "./page";


class HomePage extends Page {

    get cartIcon(){
        return $("#shopping_cart_container");
    }

    get addToCartBtn(){
        return $("#add-to-cart-sauce-labs-backpack");
    }
    
    get produtImage(){
        return $("#product-photo-sauce-labs-backpack");
    }

    async ValidateOnHomePage(){
        expect(await this.cartIcon).toBeExisting();
        expect(await this.addToCartBtn).toBeExisting();
        expect(await this.produtImage).toBeExisting();
    }

    open () { 
        return super.open("inventory.html");
    }
}

export default new HomePage();
