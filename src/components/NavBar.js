// src/components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">DaxDudes</div>
        <div>
          <Link to="/" className="mr-4 hover:text-gray-400">Home</Link>
          <Link to="/shop" className="mr-4 hover:text-gray-400">Shop</Link>
          <Link to="/about" className="hover:text-gray-400">About</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;