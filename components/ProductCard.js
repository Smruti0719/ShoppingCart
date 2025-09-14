import React from 'react';

const ProductCard = ({ product, addToCart, cartItems }) => {
  
  const isInCart = cartItems.some(item => item.id === product.id);
  const cartItem = cartItems.find(item => item.id === product.id);

  const handleAddToCart = () => {
    
    if (cartItem && cartItem.quantity >= product.availableQuantity) {
      alert('Maximum quantity reached for this product!');
      return;
    }
    addToCart(product);
  };

  return (
    <div className="product-card">
      {}
      <img 
        src={product.image} 
        alt={product.name} 
        className="product-image"
      />
      
      {}
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">{product.price}</p>
        <p className="product-stock">Stock: {product.availableQuantity}</p>
        
        {}
        <button 
          onClick={handleAddToCart}
          className={`add-to-cart-btn {isInCart ? 'in-cart' : ''}`}
          disabled={cartItem && cartItem.quantity >= product.availableQuantity}
        >
          {isInCart ? `In Cart (${cartItem.quantity})` : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
