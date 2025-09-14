import React from 'react';
import ProductCard from './ProductCard';
import { products } from '../data/Products';

const ProductList = ({ addToCart, cartItems }) => {
  return (
    <div className="product-list">
      <h2>Our Products</h2>
      <div className="products-grid">
        {products.map(product => (
          <ProductCard 
            key={product.id} 
            product={product} 
            addToCart={addToCart}
            cartItems={cartItems}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
