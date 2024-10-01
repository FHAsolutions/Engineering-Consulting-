import React from 'react';
import Image from 'next/image';
import phone from "../public/Images/phone.png";
import map from "../public/Images/design.png";
import email from "../public/Images/new-post.png";
export default function Contact() {
  return (
    <div className="container mt-16 mx-auto px-4">
      <h2 className="text-5xl  text-center text-black mb-8">
        CON<span>TACT INFO</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="flex p-6 rounded-lg duration-500 hover:shadow-lg bg-gray-900">
          <div>
            <Image src={phone} alt="Phone" />
          </div>
          <div className='ml-6'>
            <h3 className="text-xl font-semibold text-white">Phone</h3>
            <p className="mt-2 text-white">TBD</p>
          </div>
        </div>
        
        <div className="flex p-6 rounded-lg duration-500 hover:shadow-lg bg-gray-900">
          <div>
            <Image src={email} alt="Email" />
          </div>
            <div className='ml-6'>
            <h3 className="text-xl font-semibold text-white">Email</h3>
            <a className="mt-2 text-white" href='mailto:General@fhasolutions.ca'>General@fhasolutions.ca</a>
          </div>
        </div>
        
        <div className="flex p-6 rounded-lg duration-500 hover:shadow-lg bg-gray-900">
          <div className='rounded-full w-44 mt-2'>
            <Image src={map} alt="Location" className='rounded-full' />
          </div>
          <div className='ml-6'>
            <h3 className="text-xl font-semibold text-white">Location</h3>
            <p className="mt-2 text-white">Main Office: 25 Sheppard Ave W Suite #300, North York, ON M2N 6S6</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-2">
  <div className="p-6 rounded-lg duration-1000 hover:shadow-lg w-full flex justify-center items-center">
    <div className="text-center">
      <h3 className="text-4xl mb-4">You Can Find Us At</h3> <br />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2881.5752150618864!2d-79.41467898761597!3d43.7609171453358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2d63630f7429%3A0x8e8c1b22ab5ac319!2s25%20Sheppard%20Ave%20W%2C%20North%20York%2C%20ON%20M2N%206S6%2C%20Canada!5e0!3m2!1sen!2seg!4v1727606085923!5m2!1sen!2seg"
        title="Google Maps Location"
        className="mx-auto"
        style={{ width: 380, height: 400 }}
      />
    </div>
  </div>
</div>
     
    </div>
  );
}
