import {renderOrderSummary} from './checkout/ordersummary.js';
import {renderPaymentSummary} from './checkout/paymentsummary.js';
import { loadProducts } from '../data/products.js';
import '../data/backend-practice.js';
import { loadCart } from '../data/cart.js';
//import '../data/cart-class.js';

Promise.all([
  new Promise ((resolve) => {
    loadProducts(() => {
      resolve('Value 1');
    }); 
  
  }),
    new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  })
]).then(() => {
  renderPaymentSummary();
  renderOrderSummary();
});


/*
new Promise ((resolve) => {
  loadProducts(() => {
    resolve('Value 1');
  }); 

}).then((Value) => {
  console.log(Value);


  return new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  });


}).then(() => {
  renderPaymentSummary();
  renderOrderSummary();
});
*/

/*
loadProducts(() => {
  loadCart(() => {
    renderPaymentSummary();
    renderOrderSummary();
  }); 
});
*/
