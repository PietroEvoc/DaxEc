import React, { createContext, useState, useContext } from 'react';

// Create the context
const CartContext = createContext();

// CartContext provider component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItemsState] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const addToCart = (product) => {
    setCartItemsState((prevItems) => {
      const newCartItems = [...prevItems, product];
      localStorage.setItem("cartItems", JSON.stringify(newCartItems)); // Save to localStorage
      return newCartItems;
    });
  };

  const removeFromCart = (productId) => {
    setCartItemsState((prevItems) => {
      const newCartItems = prevItems.filter(item => item.id !== productId);
      localStorage.setItem("cartItems", JSON.stringify(newCartItems)); // Save to localStorage
      return newCartItems;
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the CartContext
export const useCart = () => useContext(CartContext);