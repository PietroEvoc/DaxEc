import React from 'react';
import Banner from './Banner'; // Import Banner

const AboutPage = () => {
  return (
    <div className="w-full">
      {/* Banner */}
      <Banner />

      {/* About Section */}
      <div className="container mx-auto py-8">
        <h1 className="text-4xl font-bold text-center mb-6 font-heading">About DaxDudes</h1>
        <p className="text-lg text-gray-700 leading-relaxed text-center font-body">
          Welcome to DaxDudes! We are passionate about creating unique and inspiring art.
          Our mission is to bring creativity to life and share it with the world. Whether 
          you're looking for a piece to brighten your space or a custom creation, we've got you covered.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;