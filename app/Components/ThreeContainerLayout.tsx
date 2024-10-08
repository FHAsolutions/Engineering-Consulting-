import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiagramProject, faFileSignature, faHandHoldingDollar, faTowerCell } from '@fortawesome/free-solid-svg-icons';

export default function ThreeContainerLayout() {
  return (
    <div>
      <h1 className="text-black mt-24 mb-14 text-4xl text-center sm:text-3xl md:text-5xl lg:text-6xl sm:mt-16 md:mt-20 lg:mt-24  md:mb-12">
        Field Of Specialization
      </h1>
      <div className="flex text-center items-center justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-10">
          
          {/* Container 1 */}
          <div className="bg-transparent flex flex-col justify-center items-center hover:bg-gray-900 transition-all rounded-3xl border-spacing-1 border border-gray-400 duration-500 w-full h-[400px] group">
            <div className='mt-3'>
            <div className="w-[80px] flex justify-center items-center">
              <FontAwesomeIcon icon={faHandHoldingDollar} size="2x" className="group-hover:text-blue-400" />
            </div>
            </div>
            <div className="text-center p-4 transition-colors duration-1000">
              <h2 className="text-xl text-black font-bold mb-2 group-hover:text-blue-400">
                Project Managment & Budget Control
              </h2>
              <div>
                <div className='mt-3 mb-5'>
              <p className="text-sm text-black group-hover:text-blue-400">
                Streamlines complex projects and optimize financial resources. Our expert managers ensure timely delivery and cost-effectiveness through comprehensive planning, risk assessment, and budget control.
              </p>
              </div>
              </div>
            </div>
          </div>

          {/* Container 2 */}
          <div className="bg-transparent flex flex-col justify-center items-center hover:bg-gray-900 transition-all rounded-3xl border-spacing-1 border border-gray-400 duration-500 w-full h-[400px] group">
            <div className=''>
            <div className="w-[80px] mt-2 flex justify-center items-center">
              <FontAwesomeIcon icon={faDiagramProject} size="2x" className="group-hover:text-blue-400" />
            </div>
            </div>
            <div className="text-center mt-3 p-2 transition-colors duration-1000">
              <h2 className="text-xl text-black font-bold mb-2 group-hover:text-blue-400">
              Procurement Solutions Design
              </h2>
              <p className="text-sm text-black group-hover:text-blue-400">
                We offer tailored procurement services covering strategic sourcing, vendor management, and supply chain optimization. Our team of experts streamline purchasing processes, reduce costs, and enhance operational efficiency using the best industry practices.
              </p>
            </div>
          </div>

          {/* Container 3 */}
          <div className="bg-transparent flex flex-col justify-center items-center hover:bg-gray-900 transition-all rounded-3xl border-spacing-1 border border-gray-400 duration-500 w-full h-[400px] group">
            <div className="w-[80px] flex justify-center items-center">
              <FontAwesomeIcon icon={faFileSignature} size="2x" className="group-hover:text-blue-400" />
            </div>
            <div className="text-center p-4 mb-7 transition-colors duration-1000">
              <h2 className="text-xl text-black font-bold mb-2 group-hover:text-blue-400">
              Subcontracting
              </h2>
              <p className="text-sm text-black group-hover:text-blue-400">
                We manage complex subcontracting relationships to ensure project success. We provide comprehensive subcontractor qualification, selection, and management services, maintaining seamless coordination and accountability.
              </p>
            </div>
          </div>

          {/* Container 4 */}
          <div className="bg-transparent flex flex-col justify-center items-center hover:bg-gray-900 transition-all rounded-3xl border-spacing-1 border border-gray-400 duration-500 w-full h-[400px] group">
            <div className="w-[80px] flex justify-center items-center">
              <FontAwesomeIcon icon={faTowerCell} size="2x" className="group-hover:text-blue-400 mt-14" />
            </div>
            <div className="text-center p-4 mb-10 transition-colors duration-1000">
              <h2 className="text-xl text-black font-bold mb-2 group-hover:text-blue-400">
              Telecommunications Design
              </h2>
              <p className="text-sm text-black group-hover:text-blue-400">
                Our engineering and design services include underground, aerial, fiber, copper, and 5G network designs from end to end. We play a crucial role in integrating your telecommunications infrastructure into major urban development projects, requiring expertise in both engineering and project management.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
