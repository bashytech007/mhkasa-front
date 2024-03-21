import { createContext, useEffect, useState } from "react";
export const CartContext = createContext();

export const Cart = ({ children }) => {
  const [cart, setCart] = useState([
    {
      quantity: 1,
      unitPrice: 124,
      description: "Product 1",
      id: 124,
    },
    {
      quantity: 1,
      unitPrice: 3290,
      description: "Product Category 1",
      id: 234,
    },
    {
      quantity: 1,
      unitPrice: 12309,
      description: "Category Product 1",
      id: 6234,
    },
  ]);

  const addToCart = ({ itemId, quantity }) => {};
  
  const removeFromCart = (itemId) => {
    const newCart = cart.filter((c) => c.id !== itemId);
    setCart(newCart);
  };

  const setItemQuantity = (itemId, quantity) => {
    if (quantity < 1) {
      return removeFromCart(itemId);
    }
    const itemIndex = cart.findIndex((item) => item.id === itemId);
    if (itemIndex < 0) return;
    const newCart = [...cart];
    newCart[itemIndex].quantity = quantity;
    setCart(newCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart, setItemQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};
