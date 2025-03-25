import {addToCart , cart, loadFromStorage} from "../../data/cart.js";

  describe ('Test Suite : Add To Cart' , () => {
    it ('Add an Existing Product In the Cart' , () => {
      spyOn(localStorage , 'setItem')

      spyOn(localStorage, 'getItem').and.callFake(() => {
        return JSON.stringify([{ 
          productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6' ,
          quantity: 1 , 
          deliveryOptionId: '1'
      }]);
      });
      loadFromStorage();


      addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
      expect(cart.length).toEqual(1);
      expect(localStorage.setItem).toHaveBeenCalledTimes(1);
      expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
      expect(cart[0].quantity).toEqual(2);  
    });

    it ('Add an New Product In the Cart' , () => {
      spyOn(localStorage , 'setItem');


      spyOn(localStorage, 'getItem').and.callFake(() => {
        return JSON.stringify([]);
      });
      loadFromStorage();

      addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
      expect(cart.length).toEqual(1);
      expect(localStorage.setItem).toHaveBeenCalledTimes(1);
      expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
      expect(cart[0].quantity).toEqual(1);  
    });
  });