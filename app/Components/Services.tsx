import React from 'react'
import Image from 'next/image';
import im1 from "../public/Images/1.jpg";
import im2 from "../public/Images/2.jpg";
import im3 from "../public/Images/3.jpg";
import im4 from "../public/Images/4.jpg";
import im5 from "../public/Images/5.jpg";
import im6 from "../public/Images/6.jpg";
export default function Services() {
  return (
    <div>
      <div className="text-center mt-10">
        <h1 className="text-black text-4xl md:text-6xl">
          Ser<span className="mb-2 inline-block">vices</span>
        </h1>
      </div>

      {/* Service Container */}
      <div className="flex flex-col gap-10 md:gap-0 md:space-y-0 px-4 md:px-16 mt-10">

        {/* Telecom Service */}
        <div className="flex flex-col md:flex-row justify-between items-center w-full">
          <div className="relative h-64 w-full md:w-[50%] flex-1 overflow-hidden">
            <Image
              src={im4}
              alt="Telecom"
              className="object-cover h-full w-full border border-gray-900 transform transition-transform duration-300 hover:scale-110"
            />
          </div>
          <div className="bg-gray-900 border border-gray-900 p-6 w-full md:w-[50%] lg:w-[50%] h-64">
            <h2 className="text-2xl text-white font-bold mt-10 mb-4">Telecom</h2>
            <p className="text-sm text-white">
              At FHA Solutions, we are a dedicated telecommunication design firm.
              With extensive experience in both underground and aerial projects,
              we pride ourselves on delivering high-quality work efficiently and effectively.
            </p>
          </div>
        </div>

        {/* Middleman/Bids Service */}
        <div className="flex flex-col md:flex-row-reverse justify-between items-center w-full">
          <div className="relative h-64 w-full md:w-[50%] flex-1 overflow-hidden">
            <Image
              src={im2}
              alt="Middleman/Bids"
              className="object-cover h-full w-full border border-gray-900 transform transition-transform duration-300 hover:scale-110"
            />
          </div>
          <div className="bg-gray-900 border border-gray-900 p-6 w-full md:w-[50%] h-64">
            <h2 className="text-2xl font-bold text-white mt-10 mb-4">Middleman/Bids</h2>
            <p className="text-sm text-white">
              We specialize in overseeing and ensuring the success of your projects!
              Providing a seamless service connecting bidders to their most suitable contractor
              to maximize efficiencies.
            </p>
          </div>
        </div>

        {/* Design and Drafting Service */}
        <div className="flex flex-col md:flex-row justify-between items-center w-full">
          <div className="relative h-64 w-full md:w-[50%] flex-1 overflow-hidden">
            <Image
              src={im3}
              alt="Design and Drafting"
              className="object-cover h-full w-full transform border border-gray-900 transition-transform duration-300 hover:scale-110"
            />
          </div>
          <div className="bg-gray-900 border border-gray-900 p-6 w-full md:w-[50%] h-64">
            <h2 className="text-2xl font-bold text-white mt-10 mb-4">Design and Drafting</h2>
            <p className="text-sm text-white">
              We pride ourselves on delivering high-quality work efficiently and effectively.
              Our commitment to excellence ensures that your projects are completed on time
              and to the highest standards.
            </p>
          </div>
        </div>

        {/* Project Management Service */}
        <div className="flex flex-col md:flex-row-reverse justify-between items-center w-full">
          <div className="relative h-64 w-full md:w-[50%] flex-1 overflow-hidden">
            <Image
              src={im1}
              alt="Project Management"
              className="object-cover h-full w-full border border-gray-900 transform transition-transform duration-300 hover:scale-110"
            />
          </div>
          <div className="bg-gray-900 border border-gray-900 p-6 w-full md:w-[50%] h-64">
            <h2 className="text-2xl font-bold mb-4 mt-10 text-white">Project Management</h2>
            <p className="text-sm text-white">
              We are dedicated to delivering projects efficiently and to the highest standards.
            </p>
          </div>
        </div>

        {/* General Consultation Service */}
        <div className="flex flex-col md:flex-row justify-between items-center w-full">
          <div className="relative h-64 w-full md:w-[50%] flex-1 overflow-hidden">
            <Image
              src={im5}
              alt="General Consultation"
              className="object-cover h-full w-full border border-gray-900 transform transition-transform duration-300 hover:scale-110"
            />
          </div>
          <div className="bg-gray-900 border border-gray-900 p-6 w-full md:w-[50%] h-64">
            <h2 className="text-2xl font-bold mb-4 mt-10 text-white">General Consultation & Contracting</h2>
            <p className="text-sm text-white">
              Our experienced team ensures your projects are delivered to the highest standards.
            </p>
          </div>
        </div>

        {/* Additional Telecom Service */}
        <div className="flex flex-col md:flex-row-reverse justify-between items-center w-full">
          <div className="relative h-64 w-full md:w-[50%] flex-1 overflow-hidden">
            <Image
              src={im6}
              alt="Telecom"
              className="object-fit h-[100%] w-[100%] border border-gray-900 transform transition-transform duration-300 hover:scale-110"
            />
          </div>
          <div className="bg-gray-900 border border-gray-900 p-6 w-full md:w-[50%] h-64">
            <h2 className="text-2xl font-bold mb-4 mt-10 text-white">Telecom</h2>
            <p className="text-sm text-white">
              Delivering high-quality work efficiently and effectively.
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}
