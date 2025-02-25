import React, { useEffect, useState } from 'react';
import Product from './Product';

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5001/api/products'); // Adjust the URL if necessary
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="shop grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
      {products.length > 0 ? (
        products.map((product) => <Product key={product._id} product={product} />)
      ) : (
        <p className="text-center col-span-full">No products available</p>
      )}
    </div>
  );
};

export default Shop;