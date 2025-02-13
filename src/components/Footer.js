// src/components/Footer.js
import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai'; // Using AiOutlineTwitter for the X icon

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-sm mb-2">© 2025 DaxDudes. All Rights Reserved.</p>
        <p className="text-sm">Follow us on:</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a 
            href="https://www.instagram.com/daxdudes?igsh=eDRpamZ6NnZ4NWh1" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-pink-500 hover:text-pink-700"
          >
            <FaInstagram size={24} />
          </a>
          <a 
            href="https://x.com/DaxDudes" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-400 hover:text-blue-600"
          >
            <AiOutlineTwitter size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;