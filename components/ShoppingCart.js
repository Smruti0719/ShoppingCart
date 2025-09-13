import React from 'react';
import CartItem from './CartItem';
import { useCart } from '../context/CartContext';
import '../styles/ShoppingCart.css';


const ShoppingCart = () => {
  
  const { cartItems, getCartTotal } = useCart();

  
  if (cartItems.length === 0) {
    return (
      <div className="shopping-cart empty">
        <h2>Your Shopping Cart</h2>
        <p>Your cart is empty. Start shopping to add items!</p>
      </div>
    );
  }

  return (
    <div className="shopping-cart">
      <h2>Your Shopping Cart</h2>
      
      {}
      <div className="cart-items">
        {cartItems.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>

      {}
      <div className="cart-summary">
        <h3>Total: {getCartTotal().toFixed(2)}</h3>
      </div>
    </div>
  );
};

export default ShoppingCart;
