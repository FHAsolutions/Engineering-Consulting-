import React from 'react';
export default function Footer() {
  return (
    <div>
        <footer className="bg-gray-900 text-white font-sans">
            <div className="container px-6 py-6 mx-auto">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
                    <div className="sm:col-span-2">
                        <h1 className="max-w-lg text-xl font-semibold tracking-tight text-white xl:text-2xl dark:text-white">Send US An Email and Lets Start!</h1>
            </div>

            <div>
                <p className="font-semibold text-white dark:text-white">Address</p>

                <div className="flex flex-col items-start mt-5 space-y-2">
                    <a className="text-white transition-colors duration-300 dark:text-white hover:underline" href="https://maps.app.goo.gl/rgmUGnNkPvLFVNW6A">Main Office: 25 Sheppard Ave W Suite #300, North York, ON M2N 6S6
                    </a>
                </div>
            </div>

            <div>
                <p className="font-semibold text-white dark:text-white"> Contact us</p>

                <div className="flex flex-col items-start mt-5 space-y-2">
                    <p className="text-white transition-colors duration-300 dark:text-white">Email: General@fhasolutions.ca
                    </p>
                    <p className="text-white transition-colors duration-300 dark:text-white">Phone: TBD
                    </p>
                    {/* <a className="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500"href=''></a> */}
                </div>
            </div>
        </div>
        
        <hr className="my-6 md:my-2 border-gray-700" />
        
        <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex flex-1 gap-4 hover:cursor-pointer">
                
            </div>
        </div>
        <p className="font-sans text-white text-center md:text-center md:text-lg md:">Copyright © 2024 FHA Solutions inc. All rights reserved.</p>
    </div>
        </footer>
    </div>
  )
}
