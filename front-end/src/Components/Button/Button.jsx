import React from "react";
import "./Button.css";

const Button = ({ text, count, onClick, className, variant, isCheckout }) => {
  const buttonClass = `custom-button ${variant || ""} ${className || ""} ${
    !isCheckout ? "radial-button" : ""
  }`;

  return (
    <button className={buttonClass} onClick={onClick}>
      {text}
      {count !== undefined && <span className="item-count">{count}</span>}
    </button>
  );
};

export default Button;
