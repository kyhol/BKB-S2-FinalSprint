import React, { useEffect, useState } from "react";
import "./figmaTest.css";
import groupSvg from "../../Assets/Home/groupSvg.svg";
import vector0 from "../../Assets/Home/Vector0.svg";
import vector1 from "../../Assets/Home/Vector1.svg";
import vector2 from "../../Assets/Home/Vector2.svg";
import vector3 from "../../Assets/Home/Vector3.svg";
import starHalfFilled from "../../Assets/Home/star-half-filled0.svg";
import { useProducts } from "../../Context/ProductContext";
import { useShoppingCart } from "../../Context/ShoppingCartProvider";
import Button from "../Button/Button";
import FlashSale from "../FlashSale/FlashSale";

const FigmaTest = () => {
  const { products, loading, error } = useProducts();
  const { addToCart } = useShoppingCart();
  const [randomAlbums, setRandomAlbums] = useState([]);
  const [starRatings, setStarRatings] = useState([]);
  const [reviewNumbers, setReviewNumbers] = useState([]);
  const [isEnlarged, setIsEnlarged] = useState(false);
  const [enlargedImage, setEnlargedImage] = useState(null);
  const [hoveredAlbumId, setHoveredAlbumId] = useState(null);

  useEffect(() => {
    if (products.length) {
      const getRandomAlbums = () => {
        const shuffled = [...products].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 4);
      };

      const albums = getRandomAlbums();
      setRandomAlbums(albums);

      const ratings = albums.map(() => (Math.random() < 0.5 ? 4.5 : 5));
      const reviews = albums.map(
        () => Math.floor(Math.random() * (139 - 69 + 1)) + 69
      );
      setStarRatings(ratings);
      setReviewNumbers(reviews);
    }
  }, [products]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const handleEnlargeClick = (image) => {
    console.log("Enlarge Clicked:", image);
    setEnlargedImage(image);
    setIsEnlarged(true);
  };

  const handleCloseClick = () => {
    console.log("Close Clicked");
    setIsEnlarged(false);
    setEnlargedImage(null);
  };

  const handleAddToCartWithDiscount = (product) => {
    const discountedProduct = {
      ...product,
      price: parseFloat((product.price * 0.75).toFixed(2)),
    };
    addToCart(discountedProduct, product.stockQuantity);
  };

  const handleSaleEnd = () => {
    if (products.length) {
      const getRandomAlbums = () => {
        const shuffled = [...products].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 4);
      };

      const albums = getRandomAlbums();
      setRandomAlbums(albums);

      const ratings = albums.map(() => (Math.random() < 0.5 ? 4.5 : 5));
      const reviews = albums.map(
        () => Math.floor(Math.random() * (139 - 69 + 1)) + 69
      );
      setStarRatings(ratings);
      setReviewNumbers(reviews);
    }
  };

  return (
    <div className="albumsWrapper">
      <FlashSale onSaleEnd={handleSaleEnd} />
      <div className="albums-container">
        {randomAlbums.map((product, index) => {
          const discountedPrice = (product.price * 0.75).toFixed(2);
          const starRating = starRatings[index] || 0;
          const reviewNumber = reviewNumbers[index] || 0;

          return (
            <div
              className="cart-with-flat-discount"
              key={product.id}
              onMouseEnter={() => setHoveredAlbumId(product.id)}
              onMouseLeave={() => setHoveredAlbumId(null)}
            >
              <div className="frame-570">
                <div className="discount-percent">
                  <div className="_35">-25%</div>
                </div>
                <div className="frame-575">
                  <div className="fill-eye">
                    <div className="ellipse-13"></div>
                    <div className="quick-view">
                      <div
                        onClick={() => handleEnlargeClick(product.coverImage)}
                      >
                        <img
                          src={groupSvg}
                          className="group"
                          alt="group icon"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="frame-614">
                  <img
                    className="centered-image"
                    src={product.coverImage}
                    alt={product.title}
                  />
                  {hoveredAlbumId === product.id && (
                    <Button
                      text="Add to Cart"
                      className="add-to-cart-button-home"
                      onClick={() => handleAddToCartWithDiscount(product)}
                    />
                  )}
                </div>
              </div>
              <div className="frame-569">
                <div className="artist-name">{product.artist}</div>
                <div className="s-series-comfort-chair">{product.title}</div>
                <div className="frame-567">
                  <div className="_375">${discountedPrice}</div>
                  <div className="_400">${product.price}</div>
                </div>
                <div className="frame-566">
                  <div className="stars">
                    <img className="vector" src={vector0} alt="star vector 0" />
                    <img className="vector" src={vector1} alt="star vector 1" />
                    <img className="vector" src={vector2} alt="star vector 2" />
                    <img className="vector" src={vector3} alt="star vector 3" />
                    {starRating === 5 ? (
                      <img
                        className="vector"
                        src={vector3}
                        alt="star vector 4"
                      />
                    ) : (
                      <img
                        className="star-half-filled"
                        src={starHalfFilled}
                        alt="half-filled star"
                      />
                    )}
                  </div>
                  <div className="_99">({reviewNumber})</div>
                </div>
              </div>
            </div>
          );
        })}
        {isEnlarged && (
          <div className="overlay" onClick={handleCloseClick}>
            <div className="enlarged-image-container">
              <img
                className="enlarged-image"
                src={enlargedImage}
                alt="Enlarged"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FigmaTest;
