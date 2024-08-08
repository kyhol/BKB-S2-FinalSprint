import React from "react";
import Button from "../Button/Button";
import { FaX } from "react-icons/fa6";
import "./QuickViewModal.css";
import { useNavigate } from "react-router-dom";

const QuickViewModal = ({ product, onClose, onAddToCart }) => {
  const navigate = useNavigate();
  const renderQuantityRemaining = (quantity) => {
    if (quantity <= 10) {
      return (
        <div className="quantity-remaining hot-buy">
          🔥 Only <span className="blink-text">{quantity}</span> left! 🔥
        </div>
      );
    }
    return null;
  };

  const handleOpenProduct = (id) => {
    console.log("Opening product details");
    console.log(id);

    navigate(`/product/${id}`);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <FaX className="modal-close" onClick={onClose} />
        <div className="modal-layout">
          <div className="modal-left">
            <img
              src={product.coverImage}
              alt={product.title}
              className="modal-image"
            />
          </div>
          <div className="modal-right">
            <div className="modal-header">
              <h2 className="modal-title">{product.artist}</h2>
              <h3 className="modal-artist">{product.title}</h3>

              <p className="modal-price">${product.price.toFixed(2)}</p>
              {renderQuantityRemaining(product.quantity)}
            </div>
            <p className="modal-description">{product.description}</p>
            <div className="modal-tracklist">
              <h4>Track Listing:</h4>
              <ol>
                {product.tracks.map((track, index) => (
                  <li key={index}>{track}</li>
                ))}
              </ol>
            </div>
            <div className="modal-cart-button-div">
              <Button
                text="View Product"
                onClick={() => handleOpenProduct(product.id)}
              />
              <Button
                text="Add to Cart"
                onClick={() => onAddToCart(product)}
                className="modal-add-to-cart"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickViewModal;
