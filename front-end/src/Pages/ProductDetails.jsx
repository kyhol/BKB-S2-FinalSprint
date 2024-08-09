import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../Context/ProductContext";
import { useShoppingCart } from "../Context/ShoppingCartProvider";
import Button from "../Components/Button/Button";
import Loading from "../Components/Loading/Loading";
import "./Styles/ProductDetails.css";

const ProductDetails = () => {
  const { products, loading, error } = useProducts();
  const { id } = useParams();
  const [selectedProduct, setSelectedProduct] = useState(null);

  const { addToCart } = useShoppingCart();

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  useEffect(() => {
    const findProduct = () => {
      const product = products.find((item) => item.id === id);
      setSelectedProduct(product);
    };

    if (products.length > 0) {
      findProduct();
    }
  }, [products, id]);

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

  if (!selectedProduct) {
    return <div>Product not found.</div>;
  }

  const { coverImage, title, artist, price, description, tracks, quantity } =
    selectedProduct;

  const renderQuantityRemaining = (quantity) => {
    if (quantity <= 10) {
      return (
        <div className="quantity-remaining hot-buy">
          Only <span className="blink-text">{quantity}</span> left!
        </div>
      );
    }
    return null;
  };

  return (
    <div className="main-content product-details">
      <div className="product-details-container">
        <div className="half">
          <div className="product-image-container">
            <img src={coverImage} alt={title} />
          </div>
          <br />
          <h2 className="product-title">{artist}</h2>
          <h3 className="product-artist">{title}</h3>
          <p className="product-price">${price.toFixed(2)}</p>
          {renderQuantityRemaining(quantity)}
        </div>
        <div className="half">
          <p className="product-description">{description}</p>
          <br />
          <div className="product-tracklist">
            <h2>Track Listing:</h2>
            <ol>
              {tracks.map((track, index) => (
                <li key={index}>{track}</li>
              ))}
            </ol>
          </div>
          <br />
          <Button
            text="Add to Cart"
            onClick={() => handleAddToCart(selectedProduct)}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
