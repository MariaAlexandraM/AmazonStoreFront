import { cart, addToCart, loadFromStorage } from "../../data/cart.js";

describe('test suite: addToCart', () => {
    // recommended to test each branch of an 'if' statement
    it('adds a new product to the cart', () => {
        spyOn(localStorage, 'setItem');

        spyOn(localStorage, 'getItem').and.callFake(() => {
            return JSON.stringify([]);
        });
        loadFromStorage();

        const productId = "15b6fc6f-327a-4ec4-896f-486349e85a3d";
        addToCart(productId);
        expect(cart.length).toEqual(1);
        expect(localStorage.setItem).toHaveBeenCalledTimes(1);
        expect(cart[0].productId).toEqual(productId);
        expect(cart[0].quantity).toEqual(1);
    });

    it('adds an existing product to the cart', () => {
        spyOn(localStorage, 'setItem');

        spyOn(localStorage, 'getItem').and.callFake(() => {
            return JSON.stringify([{
                productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
                quantity: 1,
                deliveryOptionId: '1'
            }]);
        });
        loadFromStorage();

        const productId = "15b6fc6f-327a-4ec4-896f-486349e85a3d";
        addToCart(productId);
        expect(cart.length).toEqual(1);
        expect(localStorage.setItem).toHaveBeenCalledTimes(1);
        expect(cart[0].productId).toEqual(productId);
        expect(cart[0].quantity).toEqual(2);
    });
});