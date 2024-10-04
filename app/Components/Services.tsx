import React from 'react'
import Image from 'next/image';
import im2 from "../public/Images/2.jpg";
import im3 from "../public/Images/3.jpg";
import im4 from "../public/Images/4.jpg";
import im5 from "../public/Images/5.jpg";
export default function Services() {
  return (
    <div>
      <div className="text-center mt-24">
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
              src={im2}
              alt="Telecom"
              className="object-cover h-full w-full border border-gray-900 transform transition-transform duration-300 hover:scale-110"
            />
          </div>
          <div className="bg-gray-900 border border-gray-900 p-6 w-full md:w-[50%] lg:w-[50%] h-64">
            <h2 className="text-2xl text-white font-bold mt-10 mb-4">Project Management and Coordination            </h2>
            <p className="text-sm text-white">
            Our project management services provide comprehensive oversight 
            of all project phases, ensuring seamless collaboration among project 
            coordinators, engineers, and CAD designers. By maintaining clear communication 
            and effective resource management, we facilitate timely project delivery while 
            adhering to budget constraints.
            </p>
          </div>
        </div>

        {/* Middleman/Bids Service */}
        <div className="flex flex-col md:flex-row-reverse justify-between items-center w-full">
          <div className="relative h-64 w-full md:w-[50%] flex-1 overflow-hidden">
            <Image
              src={im4}
              alt="Middleman/Bids"
              className="object-cover h-full w-full border border-gray-900 transform transition-transform duration-300 hover:scale-110"
            />
          </div>
          <div className="bg-gray-900 border border-gray-900 p-6 w-full md:w-[50%] h-64">
            <h2 className="text-2xl font-bold text-white mt-10 mb-4">Telecommunications Design and Engineering
            </h2>
            <p className="text-sm text-white">
            We specialize in telecommunications design, offering 
            expertise in both aerial and underground utility infrastructure. 
            Our team produces detailed engineering drawings that comply with 
            industry standards, ensuring the successful integration of telecommunication 
            systems into various projects.
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
            <h2 className="text-2xl font-bold text-white mt-10 mb-4">Quality Control and Compliance</h2>
            <p className="text-sm text-white">
            Our quality control services guarantee that all engineering designs meet rigorous regulatory standards and client specifications. We conduct thorough reviews of plans and drawings to ensure compliance with CSA, ESA, and other relevant guidelines, minimizing risks and enhancing project reliability.
            </p>
          </div>
        </div>

        {/* Project Management Service */}
        <div className="flex flex-col md:flex-row-reverse justify-between items-center w-full">
          <div className="relative h-64 w-full md:w-[50%] flex-1 overflow-hidden">
            <Image
              src={im5}
              alt="Project Management"
              className="object-cover h-full w-full border border-gray-900 transform transition-transform duration-300 hover:scale-110"
            />
          </div>
          <div className="bg-gray-900 border border-gray-900 p-6 w-full md:w-[50%] h-64">
            <h2 className="text-2xl font-bold mb-4 mt-10 text-white">Procurement and Resource Management
            </h2>
            <p className="text-sm text-white">
            We provide tailored procurement solutions to optimize resource allocation and streamline purchasing processes. Our experienced team manages vendor relationships and ensures efficient sourcing of materials, contributing to overall project success while maintaining cost-effectiveness.            </p>
          </div>
        </div>

 
        

      </div>
    </div>
  )
}
