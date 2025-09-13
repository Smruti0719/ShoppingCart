import React, { useState } from 'react';
import { CartProvider } from './context/CartContext';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';
import { useCart } from './context/CartContext';
import './styles/App.css';


const Header = ({ currentView, setCurrentView }) => {
  const { getCartItemsCount, getCartTotal } = useCart();

  return (
    <header className="header">
      <h1> Shopping Cart App</h1>
      <nav className="nav">
        <button 
          onClick={() => setCurrentView('products')}
          className={currentView === 'products' ? 'nav-btn active' : 'nav-btn'}
        >
          Products
        </button>
        <button 
          onClick={() => setCurrentView('cart')}
          className={currentView === 'cart' ? 'nav-btn active' : 'nav-btn'}
        >
          Cart ({getCartItemsCount()})
        </button>
      </nav>
    </header>
  );
};


const AppContent = () => {
 
  const [currentView, setCurrentView] = useState('products');

  return (
    <div className="App">
      {}
      <Header currentView={currentView} setCurrentView={setCurrentView} />
      
      {}
      <main className="main-content">
        {currentView === 'products' ? <ProductList /> : <ShoppingCart />}
      </main>
    </div>
  );
};


function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}

export default App;
