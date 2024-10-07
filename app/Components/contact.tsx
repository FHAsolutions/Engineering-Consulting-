import React from 'react';
import Image from 'next/image';
import phone from "../public/Images/phone.svg";
import map from "../public/Images/location-dot-solid.svg";
import email from "../public/Images/envelope-solid.svg";

export default function Contact() {
  return (
    <div className="container mt-24 mb-32 mx-auto px-10">
      <h2 className="text-5xl text-center text-black mb-8">
        CON<span>TACT INFO</span>
      </h2>

      {/* Grid for contact info and map */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-14">

        {/* Contact Information */}
        <div className="space-y-8 lg:ml-24">
          <div className="flex p-6 rounded-lg duration-500 hover:shadow-lg lg:w-[500px] bg-gray-900">
            <div>
              <Image src={phone} alt="Phone" className='w-[70px]'/>
            </div>
            <div className="ml-6">
              <h3 className="text-xl font-semibold text-white">Phone</h3>
              <a className="mt-2 text-white" href="tel:+16474297279">(647) 429-7279</a>
            </div>
          </div>

          <div className="flex p-6 rounded-lg duration-500 lg:w-[500px] hover:shadow-lg bg-gray-900">
            <div>
              <Image src={email} alt="Email" className='w-[70px]'/>
            </div>
            <div className="ml-6">
              <h3 className="text-xl font-semibold text-white">Email</h3>
              <a className="mt-2 text-white" href="mailto:General@fhasolutions.ca">
                General@fhasolutions.ca
              </a>
            </div>
          </div>
          <div className="flex p-6 rounded-lg w-full duration-500 lg:w-[500px] hover:shadow-lg bg-gray-900">
              <div className="rounded-full flex-shrink-0">
                  <Image src={map} alt="Location" sizes="8x" className="rounded-full w-[70px]" />
              </div>
          <div className=" ml-5 flex-grow">
              <h3 className="text-xl font-semibold text-white">Location</h3>
              <a className="mt-2 text-white" href="https://maps.app.goo.gl/rgmUGnNkPvLFVNW6A">
                Main Office: 25 Sheppard Ave W Suite #300, North York, ON M2N 6S6
              </a>
          </div>
        </div>
          </div>
        {/* Map Section */}
        <div className="flex justify-center items-center">
            <div className="text-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2881.5752150618864!2d-79.41467898761597!3d43.7609171453358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2d63630f7429%3A0x8e8c1b22ab5ac319!2s25%20Sheppard%20Ave%20W%2C%20North%20York%2C%20ON%20M2N%206S6%2C%20Canada!5e0!3m2!1sen!2seg!4v1727606085923!5m2!1sen!2seg"
                title="Google Maps Location"
                className="w-[400px] h-[400px] lg:w-[600px] lg:h-[435px] mx-auto"
 
              />
            </div>
          </div>
        </div>
    </div>
  );
}
