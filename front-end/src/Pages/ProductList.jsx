import React, { useState } from "react";
import { useProducts } from "../Context/ProductContext";
import { useShoppingCart } from "../Context/ShoppingCartProvider";
import Button from "../Components/Button/Button";
import QuickViewModal from "../Components/Modal/QuickViewModal";
import Pagination from "../Components/Pagination/Pagination";
import Loading from "../Components/Loading/Loading";
import { FaRegEye } from "react-icons/fa";
import "./Styles/ProductList.css";

const ProductList = () => {
  const { addToCart } = useShoppingCart();
  const { products, loading, error } = useProducts();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

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
    console.log("Selected Image:", product.coverImage);
  };

  return (
    <div className="main-content product-layout">
      <div className="top-of-product">
        <div className="product-list-container">
          {getCurrentProducts().map((product) => (
            <div className="product-container" key={product.id}>
              <div className="product-content">
                <h3>{product.name}</h3>
                <div className="product-image-container">
                  <img src={product.coverImage} alt={product.name} />
                  <Button
                    text="Quick View"
                    onClick={(e) => handleQuickView(e, product)}
                    variant="quick-view"
                    className="quick-view"
                  />
                </div>
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
