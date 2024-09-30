"use client";
import React, { useState } from 'react';
import Link from 'next/link'; 

export default function Navbar() {
    const [isClick, setIsClick] = useState(false);

    const runnav = (): void => {
        setIsClick(!isClick);
    };

    return (
        <div>
            <nav className='bg-gray-900 transition-all duration-500 fixed top-0 w-full z-50'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='flex items-center justify-between h-16'>
                        {/* Left: Logo */}
                        <div className='flex items-center'>
                            <div className='flex-shrink-0'>
                                <Link href="/" className='text-white font-bold text-xl'>
                                    LOGO
                                </Link>
                            </div>
                        </div>

                        {/* Center: Nav Links */}
                        <div className='hidden md:flex justify-center flex-grow'>
                            <div className='ml-4 flex items-center space-x-6'>
                                <Link href="/" className='text-white hover:text-blue-500 p-2 rounded-lg'>Home</Link>
                                <Link href="#Aboutus" className='text-white hover:text-blue-500 p-2 rounded-lg'>About Us</Link>
                                <Link href="#Services" className='text-white hover:text-blue-500 p-2 rounded-lg'>Services</Link>
                            </div>
                        </div>

                        {/* Right: Contact Us Button */}
                        <div className='hidden md:flex items-center'>
                            <Link href="/Pages/Contact">
                                <button className='bg-blue-500 text-white px-4 py-2 rounded-3xl hover:bg-blue-600 transition-colors'>
                                    Contact Us
                                </button>
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className='md:hidden flex items-center'>
                            <button className='inline-flex items-center justify-center p-2 rounded-md text-white md:text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                                onClick={runnav}
                            >
                                {isClick ? (
                                    <svg
                                        fill="none"
                                        className="w-6 h-6"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        fill="none"
                                        className="w-6 h-6"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`md:hidden overflow-hidden transition-all duration-1000 ease-in-out ${isClick ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
                        <Link href="/" className='text-white block hover:text-blue-500 p-2 rounded-lg'>Home</Link>
                        <Link href="#Aboutus" className='text-white block hover:text-blue-500 p-2 rounded-lg'>About Us</Link>
                        <Link href="#Services" className='text-white block hover:text-blue-500 p-2 rounded-lg'>Services</Link>
                        <Link href="#Contact" className='text-white block hover:text-blue-500 p-2 rounded-lg'>Contact Us</Link>
                    </div>
                </div>
            </nav>
        </div>
    );
}
