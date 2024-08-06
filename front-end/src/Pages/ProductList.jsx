import React, { useState } from "react";
import { useProducts } from "../Context/ProductContext";
import { useShoppingCart } from "../Context/ShoppingCartProvider";
import Button from "../Components/Button/Button";
import QuickViewModal from "../Components/Modal/QuickViewModal";
import Pagination from "../Components/Pagination/Pagination";
import Loading from "../Components/Loading/Loading";
import "./Styles/ProductList.css";

const ProductList = () => {
  const addToCart = useShoppingCart();
  const { products, loading, error } = useProducts();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // Implementing pagination
  const getCurrentProducts = () => {
    const indexOfLastProduct = currentPage * itemsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
    return products.slice(indexOfFirstProduct, indexOfLastProduct);
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) {
    return (
      <div className="loading-div">
        <Loading />
      </div>
    );
  }

  if (error) {
    console.log("Error:", error);
    return <div>Error: {error}</div>;
  }

  // console.log(products);

  const handleOpenProduct = (product) => {
    console.log("Opening product details");
    console.log(product.id);
  };

  const handleAddToCart = (e, product) => {
    e.stopPropagation();
    addToCart(product);
  };

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

  const handleQuickView = (e, product) => {
    e.stopPropagation();
    setSelectedProduct(product);
    console.log("Selected product:", product);
  };

  return (
    <div
      className={`main-content product-layout ${
        selectedProduct ? "blur-background" : ""
      }`}
    >
      <div className="top-of-product">
        <div className="product-list-container">
          {getCurrentProducts().map((product) => (
            <div
              className="product-container"
              key={product.id}
              onClick={() => handleOpenProduct(product)}
            >
              <div className="product-content">
                <h3>{product.name}</h3>
                <img src={product.image} alt={product.name} />
                {renderQuantityRemaining(product.quantity)}
                <div className="cost-and-button">
                  <span className="record-price">${product.price}</span>
                  <Button
                    text="Add to Cart"
                    onClick={(e) => handleAddToCart(e, product)}
                    variant="cart"
                    className="add-to-cart-button"
                  />
                </div>
              </div>
              <Button
                text="Quick View"
                onClick={(e) => handleQuickView(e, product)}
                variant="quick-view"
                className="quick-view"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="pagination-div">
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={products.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>

      {selectedProduct && (
        <QuickViewModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={(product) => {
            addToCart(product);
            setSelectedProduct(null);
          }}
        />
      )}
    </div>
  );
};

export default ProductList;
