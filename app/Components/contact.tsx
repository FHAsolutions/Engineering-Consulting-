import React from 'react';
import Image from 'next/image';
import phone from "../Images/phone.png";
import map from "../Images/map-marker.png";
import email from "../Images/new-post.png";
import ResponsiveIframe from '../Components/ResponsiveIframe';

export default function Contact() {
  return (
    <div className="container mt-16 mx-auto px-4">
      <h2 className="text-3xl font-bold text-center text-black mb-8">
        CON<span>TACT INFO</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="flex p-6 rounded-lg duration-500 hover:shadow-lg">
          <div>
            <Image src={phone} alt="Phone" />
          </div>
          <div className='ml-6'>
            <h3 className="text-xl font-semibold">Phone</h3>
            <p className="mt-2">TBD</p>
          </div>
        </div>
        
        <div className="flex p-6 rounded-lg duration-500 hover:shadow-lg">
          <div>
            <Image src={email} alt="Email" />
          </div>
          <div className='ml-6'>
            <h3 className="text-xl font-semibold">Email</h3>
            <p className="mt-2">General@fhasolutions.ca</p>
          </div>
        </div>
        
        <div className="flex p-6 rounded-lg duration-500 hover:shadow-lg">
          <div>
            <Image src={map} alt="Location" className='w-48 mt-0' />
          </div>
          <div className='ml-6'>
            <h3 className="text-xl font-semibold">Location</h3>
            <p className="mt-2">Main Office: 25 Sheppard Ave W Suite #300, North York, ON M2N 6S6</p>
          </div>
        </div>
      </div>
      
      <div className="flex justify-center items-center mt-8">
        <div className="flex p-6 rounded-lg duration-1000 hover:shadow-lg w-full">
          <div className='ml-6 flex text-center w-full'>
            <h3 className="text-4xl mb-4">You Can Find Us At</h3> <br></br>
            <ResponsiveIframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2881.5752150618864!2d-79.41467898761597!3d43.7609171453358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2d63630f7429%3A0x8e8c1b22ab5ac319!2s25%20Sheppard%20Ave%20W%2C%20North%20York%2C%20ON%20M2N%206S6%2C%20Canada!5e0!3m2!1sen!2seg!4v1727606085923!5m2!1sen!2seg"
              title="Google Maps Location"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
