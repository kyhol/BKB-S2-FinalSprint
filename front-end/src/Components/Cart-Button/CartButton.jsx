import React from "react";
import "./CartButton.css";
import { FaShoppingCart } from "react-icons/fa";

const CartButton = () => {
  return (
    <button className="cart-button" aria-label="View Cart">
      <FaShoppingCart className="cart-icon" />
      <span>2</span>
    </button>
  );
};

export default CartButton;
