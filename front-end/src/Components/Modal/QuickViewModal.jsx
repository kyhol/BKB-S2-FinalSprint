import React from "react";
import Button from "../Button/Button";
import { FaX } from "react-icons/fa6";
import "./QuickViewModal.css"; // Make sure to create this CSS file

const QuickViewModal = ({ product, onClose, onAddToCart }) => {
  const renderQuantityRemaining = (quantity) => {
    if (quantity <= 10) {
      return (
        <div className="quantity-remaining hot-buy">
          🔥 Only <span className="blink-text">{quantity}</span> left! 🔥
        </div>
      );
    }
    return <div className="quantity-remaining"></div>;
  };

  console.log("Rendering QuickViewModal", product);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <FaX className="modal-close" onClick={onClose} />
        <img src={product.image} alt={product.name} className="modal-image" />
        <div className="modal-details">
          <div className="modal-info">
            <h2>{product.name}</h2>
            <p className="modal-price">${product.price}</p>
            {renderQuantityRemaining(product.quantity)}
          </div>
          <div className="modal-tracklist">
            <h3>Track Listing:</h3>
            <ul>
              {product.tracks.map((track, index) => (
                <li key={index}>{track}</li>
              ))}
            </ul>
          </div>
        </div>
        <Button
          text="Add to Cart"
          onClick={() => onAddToCart(product)}
          className="modal-add-to-cart"
        />
      </div>
    </div>
  );
};

export default QuickViewModal;
