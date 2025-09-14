import React, { useState } from 'react';
import './styles/App.css';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';


const Header = ({ currentView, setCurrentView, getCartItemsCount, getCartTotal }) => {
  return (
    <header className="header">
      <h1>Shopping Cart App</h1>
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
          Cart ({getCartItemsCount}) 
        </button>
      </nav>
    </header>
  );
};


const App = () => {
 
  const [currentView, setCurrentView] = useState('products');
  
  
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
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  
  const getCartItemsCount = () => {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  };

  return (
    <div className="App">
      {}
      <Header
        currentView={currentView}
        setCurrentView={setCurrentView}
        getCartItemsCount={getCartItemsCount()}
        getCartTotal={getCartTotal()}
      />
      
      {}
      <main className="main-content">
        {currentView === 'products' ? (
          <ProductList 
            addToCart={addToCart} 
            cartItems={cartItems} 
          />
        ) : (
          <ShoppingCart
            cartItems={cartItems}
            removeFromCart={removeFromCart}
            updateQuantity={updateQuantity}
            getCartTotal={getCartTotal}
          />
        )}
      </main>
    </div>
  );
};

export default App;
