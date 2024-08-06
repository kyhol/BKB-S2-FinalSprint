import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import { FaShippingFast } from "react-icons/fa";
import Button from "../Button/Button";

const Header = () => {
  const [cartItemsCount, setCartItemsCount] = React.useState(3);
  const navigate = useNavigate();

  const onTitleClick = () => {
    navigate("/");
  };

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
        <h2 onClick={onTitleClick}>Vinyl Tap</h2>
      </div>
      <div className="cart-section">
        <Button
          text="Cart"
          count={cartItemsCount}
          onClick={() => console.log("Cart button clicked")}
          variant="cart"
        />
      </div>
    </header>
  );
};

export default Header;
