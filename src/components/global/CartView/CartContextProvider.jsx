import React, { createContext, useState } from 'react';

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const addToCart = (item, qty) => {
    const existingItemIndex = cartList.findIndex((cartItem) => cartItem.id === item.id);
    if (existingItemIndex !== -1) {
      const updatedCartList = [...cartList];
      updatedCartList[existingItemIndex].qty += qty;
      setCartList(updatedCartList);
      return `Se han agregado ${qty} unidades de ${item.name} al carrito.`;
    } else {
      setCartList([...cartList, { ...item, qty }]);
      return `Se ha agregado ${qty} unidad de ${item.name} al carrito.`;
    }
  };

  const removeItem = (id) => {
    setCartList(cartList.filter((item) => item.id !== id));
  };

  const clear = () => {
    setCartList([]);
  };

  return (
    <CartContext.Provider value={{ cartList, addToCart, removeItem, clear }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
