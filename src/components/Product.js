import React from 'react';
import { useCart } from '../context/CartContext'; // Import useCart
import DaHopperImage from '../assets/DaHopper.JPG';  // Import the image
import GraffitiGunsImage from '../assets/GraffitiGuns.JPG'; // Import the image

const Product = ({ product }) => {
  const { addToCart } = useCart(); // Access addToCart from context

  const handleAddToCart = () => {
    addToCart(product); // Add product to cart
  };

  // Set a default image if the product doesn't have one
  const getProductImage = (productName) => {
    if (productName === 'Da Hopper') return DaHopperImage;
    if (productName === 'Graffiti Guns') return GraffitiGunsImage;
    return ''; // Return a default or placeholder image if needed
  };

  return (
    <div className="product border border-gray-300 rounded-lg shadow-lg p-4 transition-all hover:shadow-xl hover:scale-105">
      {/* Product Image */}
      <img 
        src={getProductImage(product.name)} 
        alt={product.name} 
        className="w-full h-48 object-cover rounded-md mb-4 transition-transform transform hover:scale-110"
      />
      
      {/* Product Name */}
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{product.name}</h3>
      
      {/* Product Description */}
      <p className="text-gray-600 text-sm mb-4">{product.description}</p>

      {/* Add to Cart Button */}
      <button
        onClick={handleAddToCart}
        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-colors"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Product;