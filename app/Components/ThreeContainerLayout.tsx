import Image from "next/image";
import React from 'react';
import im1 from "../public/Images/OR.png";
import im2 from "../public/Images/ER.png";
import im3 from "../public/Images/ns.png";

export default function ThreeContainerLayout() {
    return (
      <div>
        <h1 className="text-black mt-20 mb-14 text-6xl text-center">FIELD OF SPECIALIZATION</h1>
        <br />
        <br />
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            
            {/* Container 1 */}
            <div className="bg-transparent hover:bg-gray-900 transition-all g rounded-3xl border-spacing-1 border border-gray-400 transform hover:-translate-y-20 duration-500 w-[350px] h-[500px] group">
              <Image src={im1} alt="Image 1" className="ml-6 mt-9 w-[150px] object-fit rounded-t-lg" />
              <div className="p-6 transition-colors duration-1000">
                <h2 className="text-2xl text-black font-bold mb-2 group-hover:text-blue-400">SURVEY</h2>
                <p className="text-black group-hover:text-blue-400">A successful project starts with accurate and comprehensive data collection. G2’s experienced field technicians use the most current and modern field equipment to deliver a top-quality engineering product.</p>
              </div>
            </div>
  
            {/* Container 2 */}
            <div className="bg-transparent hover:bg-gray-900 transition-all rounded-3xl border-spacing-1 border border-gray-400 transform  duration-500 hover:-translate-y-20 w-[350px] h-[500px] group">
              <Image src={im2} alt="Image 2" className="ml-6 mt-9 w-[160px] object-fit rounded-t-lg" />
              <div className="p-6 transition-colors duration-1000">
                <h2 className="text-2xl text-black font-bold mb-2 group-hover:text-blue-400">TELECOMMUNICATIONS DESIGN</h2>
                <p className="text-black group-hover:text-blue-400">Our highly skilled and experienced design team takes an innovative approach at every step from concept to delivery. We think outside the box to deliver efficient, logical and constructible designs that meet the technical requirements of our clients.</p>
              </div>
            </div>
  
            {/* Container 3 */}
            <div className="bg-transparent hover:bg-gray-900 transition-all rounded-3xl border-spacing-1 border border-gray-400 transform duration-500 hover:-translate-y-20 hover:delay-2000 w-[350px] h-[500px] group">
              <Image src={im3} alt="Image 3" className="ml-6 mt-9 w-[160px] object-fit rounded-t-lg" />
              <div className="p-6 transition-colors duration-1000">
                <h2 className="text-2xl text-black font-bold mb-2 group-hover:text-blue-400">ENGINEERING</h2>
                <p className="text-black group-hover:text-blue-400">G2 is committed to quality, accuracy and constructability. We consider every project that crosses our desks to be unique, requiring collaboration and applied civil expertise to ensure that what we deliver is first time right.</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
}
