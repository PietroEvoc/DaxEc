import React from 'react';
import DaxBanner from '../assets/DaxBanner.png'; // Banner Image
import ChillinxImage from '../assets/DDV2_Chillinx 1920.5_1080x1920.png'; // Left Image
import DaxGraffPink from '../assets/DaxGraff_Pink_782x412.png'; // Centered Image

const HeroSection = () => {
  return (
    <section className="bg-white text-white min-h-screen flex flex-col">
      {/* Banner */}
      <img 
        src={DaxBanner} 
        alt="DaxDudes Banner" 
        className="w-full h-auto object-cover"
      />

      {/* Image Section */}
      <div className="w-full flex items-start p-4">
        {/* Left Image */}
        <div className="flex justify-start w-1/3 flex-shrink-0">
          <img 
            src={ChillinxImage} 
            alt="Chillinx Art" 
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Centered Image Section */}
        <div className="relative flex flex-col ml-[10px]">
          {/* Dax Graff Pink Image */}
          <img 
            src={DaxGraffPink} 
            alt="Dax Graff Pink" 
            className="w-auto max-w-md h-auto object-cover rounded-lg shadow-lg"
          />

          {/* Left Container (Below Dax Graff Pink) */}
          <div className="w-[450px] border-2 border-dashed border-gray-500 p-8 text-black text-center mt-4">
            <h1>Bring Your Vision to Life!</h1>
            <p>Together, we’ll craft a masterpiece tailored just for you. Let’s dream, create, and make it real.</p>
          </div>
        </div>

        {/* Right Container (To the right of Dax Graff Pink) */}
        <div className="w-1/3 border-2 border-dashed border-gray-500 p-8 text-black text-center ml-4">
          <h1>From Imagination to Art!</h1>
          <p>Whether it’s a painting, 3D design, character, or collectible, let’s collaborate and turn your ideas into something extraordinary.</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;