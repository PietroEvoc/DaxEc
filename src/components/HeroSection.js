import React, { useState } from 'react';
import DaxBanner from '../assets/DaxBanner.png'; // Banner Image
import ChillinxImage from '../assets/DDV2_Chillinx 1920.5_1080x1920.png'; // Left Image
import DaxGraffPink from '../assets/DaxGraff_Pink_782x412.png'; // Centered Image
import AlienImage from '../assets/Alien.JPG'; // Right-side Image
import Chat from './Chat'; // Import Chat Component

const HeroSection = ({ userEmail }) => {
  const [showChat, setShowChat] = useState(false);

  return (
    <section className="bg-white text-white min-h-screen flex flex-col">
      {/* Banner */}
      <img 
        src={DaxBanner} 
        alt="DaxDudes Banner" 
        className="w-full h-auto object-cover mb-4"  // Added margin-bottom
      />

      {/* Image Section */}
      <div className="w-full flex flex-col lg:flex-row items-start px-6 lg:px-10">
        {/* Left Image */}
        <div className="flex justify-end lg:w-1/3 flex-shrink-0 mb-2 lg:mb-0">
          <img 
            src={ChillinxImage} 
            alt="Chillinx Art" 
            className="w-full h-auto max-w-[350px] object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Centered Image and Left Container Section */}
        <div className="relative flex flex-col ml-0 lg:ml-[10px] w-full lg:w-auto mb-2 lg:mb-0">
          {/* Dax Graff Pink Image */}
          <img 
            src={DaxGraffPink} 
            alt="Dax Graff Pink" 
            className="w-full max-w-[450px] lg:max-w-[700px] h-auto object-cover rounded-lg shadow-lg"
          />

          {/* Left Container (Now includes the "Request Custom Art" Button) */}
          <div className="w-full bg-gradient-to-r from-purple-500 to-pink-500 border-2 border-solid border-gray-900 p-6 text-white text-center mt-2 rounded-lg shadow-lg">
            <h1 className="font-heading text-4xl">Bring Your Vision to Life!</h1>
            <p className="font-body text-lg">Together, we’ll craft a masterpiece tailored just for you. Let’s dream, create, and make it real.</p>

            {/* "Request Custom Art" Button Now Inside the Left Container */}
            <div className="mt-4">
              <h2 className="font-heading text-3xl mb-2">Want a Custom Piece?</h2>
              <p className="font-body text-lg mb-3">Get in touch with the artist to discuss your ideas and bring them to life.</p>
              <button 
                onClick={() => setShowChat(!showChat)} 
                className="bg-white text-black px-6 py-3 rounded-lg text-lg font-body shadow-lg hover:bg-gray-300 transition duration-300"
              >
                Request Custom Art
              </button>

              {/* Chat Component (Appears when button is clicked) */}
              {showChat && <Chat userEmail={userEmail} />}
            </div>
          </div>
        </div>

        {/* Right Section (Right Container + Alien Image) */}
        <div className="flex flex-col w-full lg:w-[700px] max-w-[700px] lg:ml-2">
          {/* Right Container (To the right of Dax Graff Pink) */}
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 border-2 border-solid border-gray-900 p-6 text-white text-center rounded-lg shadow-lg w-full max-w-[350px]">
            <h1 className="font-heading text-4xl">From Imagination to Art!</h1>
            <p className="font-body text-lg">Whether it’s a painting, 3D design, character, or collectible, let’s collaborate and turn your ideas into something extraordinary.</p>
          </div>

          {/* Alien Image - Positioned Below Right Container */}
          <div className="flex justify-start mt-2">
            <img 
              src={AlienImage} 
              alt="Alien Art" 
              className="w-full max-w-[350px] h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;