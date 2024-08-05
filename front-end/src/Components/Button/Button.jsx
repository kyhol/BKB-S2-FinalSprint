import React from "react";
import "./Button.css";

const Button = ({ text, count, onClick, className, variant }) => {
  const buttonClass = `custom-button ${
    variant === "cart" ? "radial-button" : ""
  } ${className || ""}`;

  return (
    <button className={buttonClass} onClick={onClick}>
      {text}
      {count !== undefined && <span className="item-count">{count}</span>}
    </button>
  );
};

export default Button;
