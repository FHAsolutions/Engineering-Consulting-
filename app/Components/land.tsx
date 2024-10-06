"use client"
import React from 'react';

const handleClick = () => {
  const contactSection = document.getElementById('Contact');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
};
const Landed = () => {
  return (
    <div className="relative w-full h-96">
      <div className="relative z-10 flex flex-col h-full text-white">
        <h1 className="text-6xl mt-56 ml-12 font-bold mb-4">Pioneering Excellence</h1>
        <p className='ml-12 mb-4'>At FHA, we are committed to every phase of our projects, from initial concept to final delivery because we <br/> know that every decision has an impact.</p>
        <div>
          <button onClick={handleClick} className="ml-12 mt-5 px-9 py-6 font-semibold bg-transparent border border-red-700 hover:bg-red-600 duration-200">
          Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landed;