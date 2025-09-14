import React from 'react';
import CartItem from './CartItem';

const ShoppingCart = ({ cartItems, removeFromCart, updateQuantity, getCartTotal }) => {
  
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
          <CartItem 
            key={item.id} 
            item={item} 
            removeFromCart={removeFromCart}
            updateQuantity={updateQuantity}
          />
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
