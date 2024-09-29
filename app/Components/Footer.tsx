import React from 'react';
export default function Footer() {
  return (
    <div>
        <footer className="bg-gradient-to-r from-gray-500 to-gray-500  text-white font-sans">
            <div className="container px-6 py-12 mx-auto">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
                    <div className="sm:col-span-2">
                        <h1 className="max-w-lg text-xl font-semibold tracking-tight text-white xl:text-2xl dark:text-white">Send US An Email and Lets Start!</h1>
            </div>

            <div>
                <p className="font-semibold text-white dark:text-white">Address</p>

                <div className="flex flex-col items-start mt-5 space-y-2">
                    <p className="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-black hover:text-black" >Main Office: 25 Sheppard Ave W Suite #300, North York, ON M2N 6S6
                    </p>
                </div>
            </div>

            <div>
                <p className="font-semibold text-white dark:text-white"> Contact us</p>

                <div className="flex flex-col items-start mt-5 space-y-2">
                    <p className="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-black hover:text-black">Email: General@fhasolutions.ca
                    </p>
                    <p className="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-black hover:text-black">Phone: TBD
                    </p>
                    {/* <a className="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500"href=''></a> */}
                </div>
            </div>
        </div>
        
        <hr className="my-6 md:my-8 border-gray-700 h-2" />
        
        <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex flex-1 gap-4 hover:cursor-pointer">
                
            </div>
            
            <div className="flex gap-4 hover:cursor-pointer items-center justify-center ">
                <img src="https://www.svgrepo.com/show/303114/facebook-3-logo.svg" width="30" height="30" alt="fb" />
                <img src="https://www.svgrepo.com/show/303115/twitter-3-logo.svg" width="30" height="30" alt="tw" />
                <img src="https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg" width="30" height="30" alt="inst" />
                {/* <img src="https://www.svgrepo.com/show/94698/github.svg" className="" width="30" height="30" alt="gt" /> */}
                <img src="https://www.svgrepo.com/show/28145/linkedin.svg" width="30" height="30" alt="in" />
            </div>
        </div>
        <p className="font-sans p-8 text-white text-center  md:text-center md:text-lg md:p-4">We Always Happy to Help You!</p>
    </div>
        </footer>
    </div>
  )
}
