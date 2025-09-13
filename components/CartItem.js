import React from 'react';
import { useCart } from '../context/CartContext';

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    updateQuantity(item.id, newQuantity);
  };

  return (
    <div className="cart-item">
      {}
      <img 
        src={item.image} 
        alt={item.name} 
        className="cart-item-image"
      />
      
      <div className="cart-item-details">
        <h4>{item.name}</h4>
        <p>{item.price} per unit</p>
      </div>

      <div className="cart-item-quantity">
        <label>Quantity:</label>
        <input
          type="number"
          min="1"
          max={item.availableQuantity}
          value={item.quantity}
          onChange={handleQuantityChange}
        />
      </div>

      <div className="cart-item-total">
        <strong>{(item.price * item.quantity).toFixed(2)}</strong>
      </div>

      <button 
        onClick={() => removeFromCart(item.id)}
        className="remove-btn"
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;
