import React, { useEffect, useState } from "react";
import groupSvg from "../../Assets/Home/groupsvg.svg";
import vector0 from "../../Assets/Home/Vector0.svg";
import vector1 from "../../Assets/Home/Vector1.svg";
import vector2 from "../../Assets/Home/Vector2.svg";
import vector3 from "../../Assets/Home/Vector3.svg";
import starHalfFilled from "../../Assets/Home/star-half-filled0.svg";
import { useProducts } from "../../Context/ProductContext";
import { useShoppingCart } from "../../Context/ShoppingCartProvider";
import Button from "../Button/Button";
import "../figmaTest/figmaTest.css";

const AlbumsByGenre = () => {
  const { products, loading, error, genres } = useProducts();
  const { addToCart } = useShoppingCart();
  const [selectedGenre, setSelectedGenre] = useState("Rock");
  const [filteredAlbums, setFilteredAlbums] = useState([]);
  const [starRatings, setStarRatings] = useState([]);
  const [reviewNumbers, setReviewNumbers] = useState([]);
  const [isEnlarged, setIsEnlarged] = useState(false);
  const [enlargedImage, setEnlargedImage] = useState(null);
  const [hoveredAlbumId, setHoveredAlbumId] = useState(null);

  useEffect(() => {
    if (products.length) {
      const filtered = selectedGenre
        ? products.filter((product) => product.genre === selectedGenre)
        : products;
      setFilteredAlbums(filtered);

      if (filtered.length) {
        const ratings = filtered.map(() => (Math.random() < 0.5 ? 4.5 : 5));
        const reviews = filtered.map(
          () => Math.floor(Math.random() * (139 - 69 + 1)) + 69
        );
        setStarRatings(ratings);
        setReviewNumbers(reviews);
      }
    }
  }, [products, selectedGenre]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const handleEnlargeClick = (image) => {
    setEnlargedImage(image);
    setIsEnlarged(true);
  };

  const handleCloseClick = () => {
    setIsEnlarged(false);
    setEnlargedImage(null);
  };

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  const filteredGenres = genres.filter((genre) => genre !== "All Genres");

  return (
    <div className="albumsWrapper">
      <div className="select-wrapper">
        <select
          onChange={(e) => setSelectedGenre(e.target.value)}
          value={selectedGenre}
        >
          {filteredGenres.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </div>

      <div className="albums-container2">
        {filteredAlbums.length ? (
          filteredAlbums.map((product, index) => {
            const starRating = starRatings[index] || 0;
            const reviewNumber = reviewNumbers[index] || 0;

            return (
              <div
                className="album-item"
                key={product.id}
                onMouseEnter={() => setHoveredAlbumId(product.id)}
                onMouseLeave={() => setHoveredAlbumId(null)}
              >
                <div className="frame-570">
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
                        className="add-to-cart-button-home2"
                        onClick={() => handleAddToCart(product)}
                      />
                    )}
                  </div>
                </div>
                <div className="frame-569">
                  <div className="artist-name">{product.artist}</div>
                  <div className="s-series-comfort-chair">{product.title}</div>
                  <div className="frame-567">
                    <div className="not400">${product.price}</div>
                  </div>
                  <div className="frame-566">
                    <div className="stars">
                      <img
                        className="vector"
                        src={vector0}
                        alt="star vector 0"
                      />
                      <img
                        className="vector"
                        src={vector1}
                        alt="star vector 1"
                      />
                      <img
                        className="vector"
                        src={vector2}
                        alt="star vector 2"
                      />
                      <img
                        className="vector"
                        src={vector3}
                        alt="star vector 3"
                      />
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
          })
        ) : (
          <div>No albums available for the selected genre.</div>
        )}
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

export default AlbumsByGenre;
