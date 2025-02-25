// src/components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import DaxTag from '../assets/logoDax.jpg'; 

const NavBar = () => {
  return (
    <nav className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Link to="/" className="text-2xl font-bold">
            <img src={DaxTag} alt="DaxDudes" className="h-12" />
          </Link>
        </div>
        <div className="flex items-center space-x-6">
          <Link to="/" className="mr-4 hover:text-gray-400">Home</Link>
          <Link to="/shop" className="mr-4 hover:text-gray-400">Shop</Link>
          <Link to="/about" className="mr-4 hover:text-gray-400">About</Link>
          <Link to="/cart" className="mr-4 hover:text-gray-400">Cart</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;