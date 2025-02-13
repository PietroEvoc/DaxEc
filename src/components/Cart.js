import React from 'react';
import { useCart } from '../context/CartContext'; // Import useCart

const Cart = () => {
  const { cartItems, removeFromCart } = useCart(); // Access cartItems and removeFromCart from context

  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => total + (item.price || 0), 0) // Ensure price is a valid number
      .toFixed(2); // Calculate total price
  };

  return (
    <div className="cart-container p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Your Cart</h2>
      
      {/* Display cart items */}
      {cartItems.length === 0 ? (
        <p className="text-lg text-gray-600">Your cart is empty</p>
      ) : (
        <div className="cart-items space-y-4">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item flex justify-between items-center border-b pb-4">
              {/* Product Image */}
              <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-md" />
              
              {/* Product Name and Price */}
              <div className="flex-1 ml-4">
                <p className="font-semibold text-gray-800">{item.name}</p>
                <p className="text-gray-600 text-sm">${(item.price || 0).toFixed(2)}</p> {/* Handle undefined price */}
              </div>

              {/* Remove Button */}
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:text-red-700 font-semibold focus:outline-none"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Cart Total */}
      {cartItems.length > 0 && (
        <div className="cart-total mt-6 flex justify-between items-center text-lg font-semibold text-gray-800">
          <p>Total:</p>
          <p>${calculateTotal()}</p>
        </div>
      )}

      {/* Checkout Button */}
      {cartItems.length > 0 && (
        <div className="checkout mt-6 flex justify-center">
          <button className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-colors">
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;