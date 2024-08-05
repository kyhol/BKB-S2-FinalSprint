import React from "react";
import CartButton from "../Cart-Button/CartButton";
import "./Header.css";
import { FaShippingFast } from "react-icons/fa";

const Header = () => {
  return (
    <header>
      <div className="sale-popup">
        <p className="sale-popup-text">
          <span className="underline">Free</span>
          &nbsp; tracked shipping on orders over $50 CAD! &nbsp;
          <FaShippingFast className="shipping-icon" />
        </p>
      </div>
      <div className="title-section">
        <h2>Vinyl Tap</h2>
      </div>
      <div className="cart-section">
        <CartButton />
      </div>
    </header>
  );
};

export default Header;
