import React from 'react';

export default function Footer() {
  return (
    <div>
      <footer className="bg-gray-900 text-white font-sans">
        <div className="container px-6 py-6 mx-auto">
          {/* Center the headers but keep the content left-aligned */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
            
            <div className="col-span-2 mx-auto">
              <p className="font-semibold text-left text-white">Address</p>
              <div className="flex flex-col items-start mt-1 space-y-2">
                <a
                  className="text-white transition-colors duration-300 hover:underline"
                  href="https://maps.app.goo.gl/rgmUGnNkPvLFVNW6A"
                >
                  Main Office: 25 Sheppard Ave W Suite #300, North York, ON M2N 6S6
                </a>
              </div>
            </div>

            <div className="col-span-2 mx-auto">
              <p className="font-semibold text-left text-white">Contact us</p>
              <div className="flex flex-col items-start mt-1 space-y-2">
                <p className="text-white">Email: General@fhasolutions.ca</p>
                <p className="text-white">Phone: (647) 429-7279</p>
              </div>
            </div>
          </div>
          
          <hr className="my-2 border-gray-700" />
          
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex flex-1 gap-4"></div>
          </div>
          
          <p className="font-sans text text-white text-center md:text-lg">
            Copyright © 2024 FHA Solutions Inc. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
