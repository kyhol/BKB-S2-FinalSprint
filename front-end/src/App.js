import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Checkout from "./Pages/Checkout";
import Home from "./Pages/Home";
import ProductDetails from "./Pages/ProductDetails";
import ProductList from "./Pages/ProductList";
// import ShoppingCart from "./Pages/ShoppingCart";
import About from "./Components/About/About";
import "./index.css";
import ShoppingCart from "./Pages/ShoppingCart";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/records" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/checkout" element={<ShoppingCart />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
