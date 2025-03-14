import { cart, calculateCartQuantity } from "../../data/cart.js";
import { getDeliveryOption } from "../../data/deliveryOptions.js";
import { getProduct } from "../../data/products.js";
import { formatCurrency } from "../utils/money.js";
import { addOrder } from "../../data/order.js";

export function renderPaymentSummary() {
  let productPriceCents = 0;

  cart.forEach((cartItem) => {
    const product = getProduct(cartItem.productId);
    productPriceCents += product.priceCents * cartItem.quantity;
  });

  const paymentSummaryHTML = `  
    <button class="place-order-button button-primary js-place-order">
      Checkout
    </button>

    <div class="payment-summary-row">Subtotal:
      <span class="payment-summary-money">$${formatCurrency(productPriceCents)}
      </span>
    </div>
  `;

  document.querySelector(".js-payment-summary").innerHTML = paymentSummaryHTML;

  document
    .querySelector(".js-place-order")
    .addEventListener("click", async () => {
      try {
        const response = await fetch("https://supersimplebackend.dev/orders", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            cart: cart,
          }),
        });

        const order = await response.json();
        addOrder(order);
      } catch (error) {
        console.log("Unexpected error, Try again later.");
      }

      window.location.href = "orders.html";
    });
}
