import React, { useState } from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import { FaShippingFast, FaTimes } from "react-icons/fa";
import Button from "../Button/Button";
import { useShoppingCart } from "../../Context/ShoppingCartProvider";
import Logo from "../../Assets/Footer/logo.svg";

const Header = () => {
  const { getTotalItems } = useShoppingCart();
  const navigate = useNavigate();
  const [showSalePopup, setShowSalePopup] = useState(true);

  const onTitleClick = () => {
    navigate("/");
  };

  const onCartClick = () => {
    navigate("/checkout");
  };

  const closeSalePopup = () => {
    setShowSalePopup(false);
  };

  return (
    <header>
      <div className="sale-popup-container">
        {showSalePopup ? (
          <div className="sale-popup">
            <p className="sale-popup-text">
              <span className="underline">Free</span>
              &nbsp; tracked shipping on orders over $50 CAD! &nbsp;
              <FaShippingFast className="shipping-icon" />
            </p>
            <button className="close-button" onClick={closeSalePopup}>
              <FaTimes />
            </button>
          </div>
        ) : (
          <div className="sale-popup-placeholder"></div>
        )}
      </div>

      <div className="header-contents">
        <div className="title-section">
          <img src={Logo} alt="PlaceHolder" onClick={onTitleClick} />
          <h2 onClick={onTitleClick}>Vinyl Tap</h2>
        </div>
        <div className="nav-section">
          <div className="left-side">
            {window.location.pathname === "/records" ? (
              <Button
                text="Home"
                variant="nav"
                onClick={() => {
                  navigate("/");
                }}
              />
            ) : (
              <Button
                text="VIEW ALL RECORDS"
                variant="nav"
                onClick={() => {
                  navigate("/records");
                }}
              />
            )}
          </div>
          <div className="right-side">
            <Button
              text="Cart"
              count={getTotalItems()}
              onClick={onCartClick}
              variant="cart"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
