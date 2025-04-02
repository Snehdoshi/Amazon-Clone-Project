import {cart} from "../../data/cart-class.js";

  describe ('Test Suite : Add To Cart' , () => {
    it ('Add an Existing Product In the Cart' , () => {
      spyOn(localStorage , 'setItem');

      cart.cartItems = [{
        productId: productId1,
        quantity: 2,
        deliveryOptionId: '1'
      }, {
        productId: productId2,
        quantity: 1,
        deliveryOptionId: '2'
      }];
  
      renderOrderSummary();
    });


     cart.addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
      expect(cart.addToCart.length).toEqual(1);
      expect(localStorage.setItem).toHaveBeenCalledTimes(1);
      expect(cart.cartItems[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
      expect(cart.cartItems[0].quantity).toEqual(2);  
    });

    it ('Add an New Product In the Cart' , () => {
      spyOn(localStorage , 'setItem');


      spyOn(localStorage, 'getItem').and.callFake(() => {
        return JSON.stringify([]);
      });
      loadFromStorage();
      cart.cartItems = [];

      cart.addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
      expect(cart.cartItems.length).toEqual(1);
      expect(localStorage.setItem).toHaveBeenCalledTimes(1);
      expect(cart.cartItems[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
      expect(cart.cartItems[0].quantity).toEqual(1);  
    });
