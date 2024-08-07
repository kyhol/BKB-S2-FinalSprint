import React from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import { FaShippingFast } from "react-icons/fa";
import Button from "../Button/Button";
import { useShoppingCart } from "../../Context/ShoppingCartProvider";
import Logo from "../../Assets/Footer/logo.svg";

const Header = () => {
  const { cartItems, getTotalItems } = useShoppingCart();
  // const [cartItemsCount, setCartItemsCount] = React.useState(2);
  const navigate = useNavigate();

  const onTitleClick = () => {
    navigate("/");
  };

  const onCartClick = () => {
    console.log("Cart button clicked");
    navigate("/checkout");
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
              text="Records"
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
    </header>
  );
};

export default Header;
