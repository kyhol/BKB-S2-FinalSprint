import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Checkout from "./Components/Pages/Checkout";
import ProductDetails from "./Components/Pages/ProductDetails";
import ProductList from "./Components/Pages/ProductList";
import ShoppingCart from "./Components/Pages/ShoppingCart";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
