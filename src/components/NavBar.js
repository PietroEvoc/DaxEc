import React from "react";
import { Link } from "react-router-dom";
import DaxTag from "../assets/logoDax.jpg";
import { useAuth } from "../context/AuthContext"; // Import the custom hook

const NavBar = () => {
  const { isAuthenticated, logout } = useAuth(); // Use the hook to get authentication state

  return (
    <nav className="bg-gray-900 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold flex items-center">
          <img src={DaxTag} alt="DaxDudes" className="h-12 rounded-lg shadow-md" />
        </Link>
        <div className="flex items-center space-x-6">
          <Link to="/" className="hover:text-gray-400 font-heading text-lg">Home</Link>
          <Link to="/shop" className="hover:text-gray-400 font-heading text-lg">Shop</Link>
          <Link to="/about" className="hover:text-gray-400 font-heading text-lg">About</Link>
          <Link to="/cart" className="hover:text-gray-400 font-heading text-lg">Cart</Link>

          {!isAuthenticated ? (
            <Link to="/login">
              <button className="px-5 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-200 shadow-md">
                Login / Register
              </button>
            </Link>
          ) : (
            <Link to="/profile">
              <button className="px-5 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition duration-200 shadow-md">
                Profile
              </button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;