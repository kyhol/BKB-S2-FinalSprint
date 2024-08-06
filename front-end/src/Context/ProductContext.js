// contexts/ProductContext.js
import React, { createContext, useContext, useEffect, useState } from "react";

// Create the context
const ProductContext = createContext();

// Create a provider component
export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [genres, setGenres] = useState([]);
  const [artists, setArtists] = useState([]);
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:8000/records");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        // console.log(data);
        setProducts(data);
        setArtists([...new Set(data.map((product) => product.artist))]);
        setGenres([...new Set(data.map((product) => product.genre))]);
        setAlbums([...new Set(data.map((product) => product.title))]);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  console.log(artists);
  console.log(genres);
  console.log(albums);

  return (
    <ProductContext.Provider
      value={{ products, loading, error, artists, genres }}
    >
      {children}
    </ProductContext.Provider>
  );
}

// Custom hook to use the product context
export function useProducts() {
  return useContext(ProductContext);
}
