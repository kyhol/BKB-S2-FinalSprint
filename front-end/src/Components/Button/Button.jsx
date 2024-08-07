import React from "react";
import { FaRegEye } from "react-icons/fa";
import "./Button.css";

const Button = ({ text, count, onClick, className, variant, isCheckout }) => {
  const buttonClass = `custom-button ${variant || ""} ${className || ""} ${
    !isCheckout ? "radial-button" : ""
  }`;

  return (
    <button className={buttonClass} onClick={onClick}>
      {variant === "quick-view" ? (
        <>
          <FaRegEye className="quick-view-icon" />
          <span className="quick-view-text">{text}</span>
        </>
      ) : (
        text
      )}
      {count !== undefined && <span className="item-count">{count}</span>}
    </button>
  );
};

export default Button;
