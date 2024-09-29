"use client"
import React, { useState } from 'react';

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-10/12  border rounded shadow-lg mx-auto">
      <div 
        className="flex justify-between rounded-lg items-center p-4 cursor-pointer bg-gray-200 hover:bg-gray-300 transition-colors duration-200" 
        onClick={toggleMenu}
      >
        <h2 className="text-lg font-semibold">what is your location?</h2>
        <span className="w-6 h-6">
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="w-full h-full"
            >
              <line x1="4" y1="12" x2="20" y2="12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="w-full h-full"
            >
              <line x1="12" y1="4" x2="12" y2="20" />
              <line x1="4" y1="12" x2="20" y2="12" />
            </svg>
          )}
        </span>
      </div>
      <div 
        className={`overflow-hidden transition-max-height duration-300 ease-in-out ${isOpen ? 'max-h-40' : 'max-h-0'}`} 
        aria-hidden={!isOpen}
      >
        <div className="p-4 bg-gray-100">

            <p className='py-1'>Main Office: 25 Sheppard Ave W Suite #300, North York, ON M2N 6S6</p>
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;
