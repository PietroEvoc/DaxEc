import React from 'react';
import DaxBanner from '../assets/DaxBanner.png'; // Import banner image

const Banner = () => {
  return (
    <div className="w-full">
      <img 
        src={DaxBanner} 
        alt="DaxDudes Banner" 
        className="w-full h-auto object-cover"
      />
    </div>
  );
};

export default Banner;