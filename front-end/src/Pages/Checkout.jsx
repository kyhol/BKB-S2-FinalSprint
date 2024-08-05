import React from "react";
import "../index.css";
import Button from "../Components/Button/Button";

const Checkout = () => {
  const [cartItemsCount, setCartItemsCount] = React.useState(3);

  const handleProceedToCheckout = () => {
    console.log("Proceeding to checkout");
  };

  return (
    <div className="main-content">
      <div className="cart-main">
        <div className="cart-left">
          <h2>Your Cart</h2>
          <div className="cart-items">{/* Cart items here */}</div>
          <div className="cart-subtotal">
            <strong>Subtotal: $19.99</strong>
          </div>
        </div>
        <div className="cart-right">
          <div className="order-summary">
            <h2>Order Summary</h2>

            <div className="summary-item">
              <span>Subtotal:</span>
              <span>$19.99</span>
            </div>
            <div className="summary-item">
              <span>Tax:</span>
              <span>$2.00</span>
            </div>
            <div className="summary-item">
              <span>Shipping:</span>
              <span>$5.00</span>
            </div>
            <div className="summary-item total">
              <strong>Total:</strong>
              <strong>$26.99</strong>
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
