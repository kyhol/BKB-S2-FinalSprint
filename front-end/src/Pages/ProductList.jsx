import React, { useState } from "react";
import { useProducts } from "../Context/ProductContext";
import { useShoppingCart } from "../Context/ShoppingCartProvider";
import { useNavigate } from "react-router-dom";
import Button from "../Components/Button/Button";
import QuickViewModal from "../Components/Modal/QuickViewModal";
import Pagination from "../Components/Pagination/Pagination";
import Loading from "../Components/Loading/Loading";
import "./Styles/ProductList.css";

const ProductList = () => {
  const { addToCart } = useShoppingCart();
  const { products, loading, error } = useProducts();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const navigate = useNavigate();

  const getCurrentProducts = () => {
    const indexOfLastProduct = currentPage * itemsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
    return products.slice(indexOfFirstProduct, indexOfLastProduct);
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) {
    return (
      <div className="main-content">
        <div className="loading-div">
          <Loading />
        </div>
      </div>
    );
  }

  if (error) {
    console.log("Error:", error);
    return <div>Error: {error}</div>;
  }

  const handleOpenProduct = (id) => {
    console.log("Opening product details");
    console.log(id);

    navigate(`/product/${id}`);
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
    // console.log("QuickView triggered for product:", product);
    setSelectedProduct(product);
  };

  return (
    <div className="main-content product-layout">
      <div className="top-of-product">
        <div className="product-list-container">
          {getCurrentProducts().map((product) => (
            <div
              className="product-container"
              key={product.id}
              onClick={() => handleOpenProduct(product.id)}
            >
              <div className="product-content">
                <h3>{product.name}</h3>
                <div className="product-image-container">
                  <img src={product.coverImage} alt={product.name} />
                  <Button
                    text="Quick View"
                    onClick={(e) => handleQuickView(e, product)}
                    variant="quick-view-button"
                    className="quick-view-button"
                  />
                </div>
                {renderQuantityRemaining(product.quantity)}
                <div className="album-and-artist">
                  <span>
                    <strong>{product.artist}</strong>
                  </span>
                  <span>{product.title}</span>
                </div>
                <div className="cost-and-button">
                  <span className="record-price">${product.price}</span>
                  <Button
                    text="Add to Cart"
                    onClick={(e) => handleAddToCart(e, product)}
                    variant="add-to-cart"
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
          openProduct={() => handleOpenProduct(selectedProduct)}
        />
      )}
    </div>
  );
};

export default ProductList;
