import React from "react";
import "./Styles/Checkout.css";
import Button from "../Components/Button/Button";
import { useShoppingCart } from "../Context/ShoppingCartProvider";

const Checkout = () => {
  const { cartItems, addToCart, removeFromCart } = useShoppingCart();

  // Calculate subtotal using a for loop
  let subtotal = 0;
  for (let i = 0; i < cartItems.length; i++) {
    subtotal += cartItems[i].price * cartItems[i].quantity;
  }

  const tax = subtotal * 0.15;
  // if subtotal is > 50, shipping = 0
  let shipping = 10;
  if (subtotal >= 50) {
    let shipping = 0;
  } else {
    let shipping = 10.0;
  }

  const total = subtotal + tax + shipping;

  const handleProceedToCheckout = () => {
    console.log("Proceeding to checkout");
  };

  return (
    <div className="main-content">
      <div className="cart-main">
        <div className="cart-left">
          <h2>Your Cart</h2>
          <div className="cart-items">
            {cartItems.length === 0 ? (
              <p>Your cart is empty</p>
            ) : (
              cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <span>{item.name}</span>
                  <span>Quantity: {item.quantity}</span>
                  <span>Price: ${item.price.toFixed(2)}</span>
                </div>
              ))
            )}
          </div>
          <div className="cart-subtotal">
            <strong>Subtotal: ${subtotal.toFixed(2)}</strong>
          </div>
        </div>
        <div className="cart-right">
          <div className="order-summary">
            <h2>Order Summary</h2>

            <div className="summary-item">
              <span>Subtotal:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="summary-item">
              <span>Tax:</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div className="summary-item">
              <span>Shipping:</span>
              <span>${shipping.toFixed(2)}</span>
            </div>
            <div className="summary-item total">
              <strong>Total:</strong>
              <strong>${total.toFixed(2)}</strong>
            </div>
          </div>
          <Button
            text="Proceed to Checkout"
            onClick={handleProceedToCheckout}
            className="checkout-button"
          />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
