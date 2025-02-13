// Example usage in Shop.js
import React from 'react';
import Product from './Product';

const Shop = () => {
  const products = [
    {
      id: 1,
      name: 'Product 1',
      description: 'This is a great product.',
      image: '/path/to/image.jpg', // Ensure this path is correct
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Another awesome product.',
      image: '/path/to/image.jpg', // Ensure this path is correct
    },
    // Add more products here
  ];

  return (
    <div className="shop grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;