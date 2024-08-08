import React, { useState, useEffect } from "react";
import "./Styles/ShoppingCart.css";
import Button from "../Components/Button/Button";
import { FaRegTrashAlt } from "react-icons/fa";
import { useShoppingCart } from "../Context/ShoppingCartProvider";
import { useProducts } from "../Context/ProductContext";
import { useNavigate } from "react-router-dom";

const ShoppingCart = () => {
  const { cartItems, addToCart, removeFromCart, removeAllOfItem, emptyCart } =
    useShoppingCart();
  const { products } = useProducts();
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [stockWarning, setStockWarning] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (stockWarning) {
      const timer = setTimeout(() => {
        setStockWarning(null);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [stockWarning]);

  let subtotal = 0;
  for (let i = 0; i < cartItems.length; i++) {
    subtotal += cartItems[i].price * cartItems[i].quantity;
  }

  const tax = subtotal * 0.15;
  let shipping = subtotal >= 50 ? 0 : 10;
  const total = subtotal + tax + shipping;

  const handleProceedToCheckout = () => {
    console.log("Proceeding to checkout");
  };

  const calcItemTotal = (item) => {
    const total = item.price * item.quantity;
    return `$${total.toFixed(2)}`;
  };

  const getProductStock = (productId) => {
    const product = products.find((p) => p.id === productId);
    return product ? product.quantity : 0;
  };

  return (
    <div className="main-content">
      <div className="cart-main">
        <div className="cart-left">
          <div className="cart-header">
            <h2>Your Cart</h2>
            {cartItems.length > 0 && (
              <Button
                text="Empty Cart"
                onClick={() => setShowConfirmDialog(true)}
                className="empty-cart-button"
              />
            )}
            {showConfirmDialog && (
              <div className="confirm-dialog-overlay">
                <div className="confirm-dialog">
                  <p>Are you sure you want to empty your cart?</p>
                  <div className="confirm-dialog-buttons">
                    <Button
                      text="Yes"
                      onClick={() => {
                        emptyCart();
                        setShowConfirmDialog(false);
                      }}
                    />
                    <Button
                      text="No"
                      onClick={() => {
                        setShowConfirmDialog(false);
                      }}
                      className="confirmation-cancel"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="cart-items">
            {cartItems.length === 0 ? (
              <div className="empty-cart-div">
                <h3>Your cart is empty</h3>
                <Button
                  text="Continue Shopping"
                  onClick={() => navigate("/records")}
                />
              </div>
            ) : (
              cartItems.map((item) => (
                <div key={item.id} className="cart-card-container">
                  <div className="cart-card">
                    <img
                      src={item.coverImage}
                      alt={item.title}
                      className="cart-img"
                    />
                    <div className="cart-item-details">
                      <strong>{item.artist}</strong>
                      <span>{item.title}</span>
                    </div>
                    <div className="item-quantity-container">
                      <div
                        className="adjust-quantity"
                        onClick={() => removeFromCart(item.id)}
                      >
                        -
                      </div>
                      {item.quantity}
                      <div
                        className="adjust-quantity"
                        onClick={() => {
                          const stockQuantity = getProductStock(item.id);
                          if (item.quantity < stockQuantity) {
                            addToCart(item);
                          } else {
                            setStockWarning({
                              id: item.id,
                              message: `Only (${stockQuantity}) items in stock.`,
                            });
                          }
                        }}
                      >
                        +
                      </div>
                    </div>
                    <span>{calcItemTotal(item)}</span>
                    <FaRegTrashAlt
                      className="trash-can"
                      onClick={() => removeAllOfItem(item.id)}
                    />
                  </div>
                  {stockWarning && stockWarning.id === item.id && (
                    <div className="stock-warning">
                      <span>{stockWarning.message}</span>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
          <div className="cart-subtotal">
            <strong>Subtotal: ${subtotal.toFixed(2)}</strong>
          </div>
        </div>
        <div className="cart-right">
          <div className="order-summary">
            <h2>Order Summary</h2>
            <div className="summary-item">
              <span>Subtotal:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="summary-item">
              <span>Tax:</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div className="summary-item">
              <span>Shipping:</span>
              <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
            </div>
            <div className="summary-item total">
              <strong>Total:</strong>
              <strong>${total.toFixed(2)}</strong>
            </div>
          </div>
          <Button
            text="Proceed to Checkout"
            onClick={handleProceedToCheckout}
            className="checkout-button"
          />
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
