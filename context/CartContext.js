import React, { createContext, useContext, useState } from 'react';


const CartContext = createContext();


export const CartProvider = ({ children }) => {
 
  const [cartItems, setCartItems] = useState([]);

 
  const addToCart = (product) => {
    
    const existingItem = cartItems.find(item => item.id === product.id);
    
    if (existingItem) {
     
      setCartItems(cartItems.map(item => 
        item.id === product.id 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
     
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };


  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };


  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
     
      removeFromCart(productId);
    } else {
    
      setCartItems(cartItems.map(item =>
        item.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      ));
    }
  };


  const getCartTotal = () => {
    let total = 0;
    for (let item of cartItems) {
      total += item.price * item.quantity;
    }
    return total;
  };

 
  const getCartItemsCount = () => {
    let count = 0;
    for (let item of cartItems) {
      count += item.quantity;
    }
    return count;
  };

 
  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    getCartTotal,
    getCartItemsCount
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};


export const useCart = () => {
  const context = useContext(CartContext);
  
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  
  return context;
};
