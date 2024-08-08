import React, { createContext, useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { useProducts } from "./ProductContext";

const ShoppingCartContext = createContext();

export function ShoppingCartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const { refreshProducts } = useProducts();

  const addToCart = (item, stockQuantity) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id);
      if (existingItem) {
        if (existingItem.quantity + 1 > stockQuantity) {
          toast.error(`Only ${stockQuantity} items in stock.`);
          return prevItems;
        }
        toast.success("Item added to cart");
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      toast.success("Item added to cart");
      return [...prevItems, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === itemId);
      if (existingItem && existingItem.quantity > 1) {
        toast.success("Removed item from cart");
        return prevItems.map((i) =>
          i.id === itemId ? { ...i, quantity: i.quantity - 1 } : i
        );
      }
      toast.success("Item removed from cart");
      return prevItems.filter((item) => item.id !== itemId);
    });
  };

  const removeAllOfItem = (itemId) => {
    setCartItems((prevItems) => {
      const removedItem = prevItems.find((item) => item.id === itemId);
      if (removedItem) {
        toast.success(`All ${removedItem.title} copies removed from cart!`);
      }
      return prevItems.filter((item) => item.id !== itemId);
    });
  };

  const emptyCart = () => {
    setCartItems([]);
    toast.success("Cart emptied");
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const isItemInStock = (itemId, quantity) => {
    const item = cartItems.find((i) => i.id === itemId);
    return item ? item.quantity < quantity : true;
  };

  const checkout = async () => {
    try {
      toast.loading("Processing your order...");

      // Fetch current records data
      const response = await fetch("http://localhost:8000/records");
      if (!response.ok) {
        throw new Error("Failed to fetch records");
      }
      const records = await response.json();

      // Update quantities
      const updatedRecords = records.map((record) => {
        const cartItem = cartItems.find((item) => item.id === record.id);
        if (cartItem) {
          if (record.quantity < cartItem.quantity) {
            throw new Error(`Not enough stock for ${record.title}`);
          }
          return { ...record, quantity: record.quantity - cartItem.quantity };
        }
        return record;
      });

      // Update each record individually
      for (const record of updatedRecords) {
        const updateResponse = await fetch(
          `http://localhost:8000/records/${record.id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(record),
          }
        );
        if (!updateResponse.ok) {
          throw new Error(`Failed to update record ${record.id}`);
        }
      }

      // If successful, empty the cart
      setCartItems([]);

      // Refresh the products data
      refreshProducts();

      toast.dismiss();
      toast.success("Order processed successfully!");
    } catch (error) {
      console.error("Checkout error:", error);
      toast.dismiss();
      toast.error(
        error.message || "An error occurred during checkout. Please try again."
      );
    }
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        removeAllOfItem,
        emptyCart,
        getTotalItems,
        isItemInStock,
        checkout,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}
