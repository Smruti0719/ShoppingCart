import React from 'react';
import { useCart } from '../context/CartContext';

const Header = ({ currentView, setCurrentView }) => {
  const { getCartItemsCount, getCartTotal } = useCart();

  return (
    <header className="app-header">
      <h1>Shopping Cart App</h1>
      <nav>
        <button 
          className={currentView === 'products' ? 'active' : ''}
          onClick={() => setCurrentView('products')}
        >
          Products
        </button>
        <button 
          className={currentView === 'cart' ? 'active' : ''}
          onClick={() => setCurrentView('cart')}
        >
          Cart ({getCartItemsCount()}) - ${getCartTotal().toFixed(2)}
        </button>
      </nav>
    </header>
  );
};

export default Header;
