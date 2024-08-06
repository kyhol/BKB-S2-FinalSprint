import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Checkout from "./Pages/Checkout";
import Home from "./Pages/Home";
import ProductDetails from "./Pages/ProductDetails";
import ProductList from "./Pages/ProductList";
import ShoppingCart from "./Pages/ShoppingCart";
import "./index.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        {/* <Route path="/cart" element={<ShoppingCart />} /> */}
        <Route path="/checkout" element={<Checkout />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
