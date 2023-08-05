import React from 'react';

function Hero() {
  return (
    <div className='hero-section text-center px-4 py-8 md:px-16 md:py-12 bg-gray-800 text-white'>
      <h1 className='text-2xl md:text-4xl mb-4 md:mb-6'>
        <span className='block md:inline-block'>Veloute</span> Perfumes Collection
      </h1>
      <p className='text-sm md:text-base mb-6'>
        VELOUTE is an online platform that provides information about various types of perfumes, their ingredients,
        where to purchase, their prices, and also reviews.
        This website may sell perfumes directly to customers and provide information about where to purchase a specific fragrance.
      </p>
      <button className='shop-btn bg-[#8B499F] text-white px-2 py-2 rounded-md text-sm md:text-base mr-6 '>
        Shop Now
      </button>
    </div>
  );
}

export default Hero;