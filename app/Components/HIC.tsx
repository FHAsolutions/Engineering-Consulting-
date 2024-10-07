import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodeBranch, faHandshakeAngle, faUsersGear } from '@fortawesome/free-solid-svg-icons'

export default function HIC() {
  return (
    <div>
    <div className='text-center mt-24 items-center justify-center'>
    <h1 className=" text-black mt-10 text-6xl text-center justify-center mb-2 inline-block">Our Vision</h1>
    <br />
    <br />
    <div className="flex justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Container 1 */}
        <div className="bg-transparent hover:bg-gray-900 transition-all duration-500 rounded-3xl border-spacing-1 border border-gray-400  transform w-[350px] h-[400px] group">
          <div className="ml-28 mt-9 w-[105px] object-fit items-center justify-center rounded-t-lg">
          <FontAwesomeIcon icon={faCodeBranch} size="3x" className=" group-hover:text-blue-400" />
          </div>
          <div className="p-6">
            <h2 className="text-xl text-black font-bold mb-2 group-hover:text-blue-400">Innovative Excellence
            </h2>
            <p className="text-black group-hover:text-blue-400"> To lead the industry with cutting-edge engineering solutions that set new standards for quality, efficiency, and sustainability.
            </p>
          </div>
        </div>

        {/* Container 2 */}
        <div className="bg-transparent hover:bg-gray-900 transition-all duration-500 rounded-3xl border-spacing-1 border border-gray-400 items-center justify-center text-center w-[350px] h-[400px] group">
        <div className="ml-24 mt-9 w-[150px] object-fit items-center justify-center rounded-t-lg">
          <FontAwesomeIcon icon={faUsersGear} size="3x" className=" group-hover:text-blue-400" />
          </div>
          <div className="p-6">
            <h2 className="text-xl text-black font-bold mb-2 group-hover:text-blue-400">Client-Centric Approach
            </h2>
            <p className="text-black group-hover:text-blue-400"> To build lasting partnerships by consistently exceeding client expectations through exceptional service and tailored solutions.</p>
          </div>
        </div>
        <div className="bg-transparent hover:bg-gray-900 transition-all duration-500 rounded-3xl border-spacing-1 border border-gray-400  transform w-[350px] h-[400px] group">
        <div className="ml-28 mt-9 w-[150px] object-fit items-center justify-center rounded-t-lg">
        <FontAwesomeIcon icon={faHandshakeAngle} size="3x" className=" group-hover:text-blue-400" />
          </div>
          <div className="p-6">
            <h2 className="text-xl text-black font-bold mb-2 group-hover:text-blue-400">Empowered Workforce</h2>
            <p className="text-black group-hover:text-blue-400"> To foster a culture of continuous learning and professional growth, empowering our team to achieve their full potential and drive our collective success.
            </p>
          </div>
        </div>
        <br/><br/><br/><br/><br/><br/><br/><br/>
      </div>
    </div>
  </div>
  </div>
  )
}
