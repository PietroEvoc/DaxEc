import React from 'react';
import { useCart } from '../context/CartContext'; // Import useCart
import DaHopperImage from '../assets/DaHopper.JPG';  // Import the image
import GraffitiGunsImage from '../assets/GraffitiGuns.JPG'; // Import the image

const Product = ({ product }) => {
  const { addToCart } = useCart(); // Access addToCart from context

  // Handle adding product to the cart
  const handleAddToCart = () => {
    addToCart(product); // Add product to cart
  };

  // Set a default image if the product doesn't have one
  const getProductImage = (product) => {
    if (product.name === 'Da Hopper') return DaHopperImage;
    if (product.name === 'Graffiti Guns') return GraffitiGunsImage;
    return product.imageUrl || 'https://via.placeholder.com/150';  // Use Cloudinary URL or placeholder
  };

  return (
    <div className="product border border-gray-300 rounded-lg shadow-lg p-4 transition-all hover:shadow-xl hover:scale-105">
      {/* Product Image */}
      <img 
        src={getProductImage(product)} 
        alt={product.name} 
        className="w-full h-48 object-cover rounded-md mb-4 transition-transform transform hover:scale-110"
      />
      
      {/* Product Name */}
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{product.name}</h3>
      
      {/* Product Price */}
      {product.price !== undefined ? (
        <p className="text-lg font-bold text-gray-700 mb-2">${product.price.toFixed(2)}</p>
      ) : (
        <p className="text-red-500 font-semibold">Price not available</p>
      )}

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