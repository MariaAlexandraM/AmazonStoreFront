import { renderCheckoutHeader } from './checkout/checkoutHeader.js';
import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProductsFetch } from '../data/products.js';
import { loadCartFromBackend } from '../data/cart.js';


Promise.all([
  loadProductsFetch(), // returns a promise already

  new Promise((resolve) => {
    loadCartFromBackend(() => {
      resolve();
    });
  })

]).then(() => {
  renderCheckoutHeader();
  renderOrderSummary();
  renderPaymentSummary();
});

