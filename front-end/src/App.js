import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home";
import ProductDetails from "./Pages/ProductDetails";
import ProductList from "./Pages/ProductList";
import ShoppingCart from "./Pages/ShoppingCart";
import About from "./Components/About/About";
import "./index.css";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import { Toaster } from "react-hot-toast";

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
      <Toaster
        position="bottom-right"
        toastOptions={{
          success: {
            style: {
              background: "green",
              color: "whitesmoke",
            },
          },
          error: {
            style: {
              background: "red",
              color: "whitesmoke",
            },
          },
        }}
      />
      <Footer />
    </Router>
  );
}

export default App;
