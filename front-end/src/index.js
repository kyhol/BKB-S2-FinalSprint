import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ShoppingCartProvider } from "./Context/ShoppingCartProvider";
import { ProductProvider } from "./Context/ProductContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ProductProvider>
      <ShoppingCartProvider>
        <App />
      </ShoppingCartProvider>
    </ProductProvider>
  </React.StrictMode>
);
