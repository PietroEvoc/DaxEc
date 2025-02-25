import React from 'react';
import DaxBanner from '../assets/DaxBanner.png'; // Banner Image
import ChillinxImage from '../assets/DDV2_Chillinx 1920.5_1080x1920.png'; // Optimized Image

const HeroSection = () => {
  return (
    <section className="bg-black text-white min-h-screen flex flex-col">
      {/* Banner and Image Container */}
      <div className="w-full flex flex-col">
        {/* Banner */}
        <img 
          src={DaxBanner} 
          alt="DaxDudes Banner" 
          className="w-full h-auto object-cover"
        />

        {/* Image on the Left */}
        <div className="w-full flex justify-start p-4">
          <img 
            src={ChillinxImage} 
            alt="Chillinx Art" 
            className="w-1/3 h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;