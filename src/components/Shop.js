// src/components/Shop.js
import React from 'react';

const Shop = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold text-center mb-6">Shop Our Art</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Example of a product card */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <img 
            src="https://via.placeholder.com/300" 
            alt="Product" 
            className="w-full h-64 object-cover rounded-md mb-4"
          />
          <h2 className="text-2xl font-bold mb-2">Product Title</h2>
          <p className="text-gray-600 mb-4">$49.99</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Add to Cart
          </button>
        </div>
        {/* Repeat the product card for more products */}
      </div>
    </div>
  );
};

export default Shop;