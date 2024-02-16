import React, { createContext, useState } from 'react';

export const contextShoppingCart = createContext();

export const ShoppingCartContext = ({ children }) => {
  const [shoppingCart, setShoppingCart] = useState([])

  const handleGetTotalPrice = () => {
    return shoppingCart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleRemoveFromCart = (productId) => {
    const updatedCart = shoppingCart.filter(item => item.id !== productId);
    setShoppingCart(updatedCart);
  };

  const handleGetTotalProducts = () => {
    return shoppingCart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <contextShoppingCart.Provider
      value={{
        shoppingCart,
        setShoppingCart,
        handleGetTotalPrice,
        handleRemoveFromCart,
        handleGetTotalProducts
      }}
    >
      {children}
    </contextShoppingCart.Provider>
  )
}

