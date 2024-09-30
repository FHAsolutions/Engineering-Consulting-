import React from 'react'
import Image from 'next/image'
import im1 from "../public/Images/con-2.svg"
import im2 from "../public/Images/3_icon.svg"

export default function HIC() {
  return (
    <div>
    <div className='text-center mt-28 items-center justify-center'>
    <h1 className=" text-black mt-10 text-6xl text-center justify-center mb-2 inline-block">Our Vision</h1>
    <br />
    <br />
    <div className="flex justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Container 1 */}
        <div className="bg-transparent hover:bg-gray-900 transition-all duration-500 rounded-3xl  transform w-[350px] h-[400px] group">
          <Image src={im1} alt="Image 1" className="ml-36 mt-9 object-fit items-center justify-center rounded-t-lg" />
          <div className="p-6">
            <h2 className="text-xl text-black font-bold mb-2 group-hover:text-blue-400">To Help Your Projects Come To Life</h2>
            <p className="text-black group-hover:text-blue-400">Our vision is to help your projects come to life. We believe in transforming ideas into reality through innovative design and expert execution. By prioritizing collaboration and creativity, we aim to empower you to realize your goals and bring your vision to fruition.
            </p>
          </div>
        </div>

        {/* Container 2 */}
        <div className="bg-transparent hover:bg-gray-900 transition-all duration-500 rounded-3xl items-center justify-center text-center w-[350px] h-[400px] group">
          <Image src={im2} alt="Image 2" className="ml-36 mt-9 object-fit rounded-t-lg" />
          <div className="p-6">
            <h2 className="text-xl text-black font-bold mb-2 group-hover:text-blue-400">Client Expansion</h2>
            <p className="text-black group-hover:text-blue-400">We view our clients as partners. We are committed to every project, regardless of its scale, and strive to foster meaningful collaborations. Our dedication to building strong relationships ensures that we not only meet your needs but also create opportunities for mutual growth.</p>
          </div>
        </div>
        <br/><br/><br/><br/><br/><br/><br/><br/>
      </div>
    </div>
  </div>
  </div>
  )
}
