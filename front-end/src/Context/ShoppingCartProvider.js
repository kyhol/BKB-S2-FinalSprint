import React, { createContext, useContext, useState } from "react";
import { toast } from "react-hot-toast";

const ShoppingCartContext = createContext();

export function ShoppingCartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

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
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}
