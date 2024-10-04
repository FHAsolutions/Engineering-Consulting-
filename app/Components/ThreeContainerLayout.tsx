import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiagramProject, faFileSignature, faHandHoldingDollar, faTowerCell } from '@fortawesome/free-solid-svg-icons';

export default function ThreeContainerLayout() {
    return (
      <div>
        <h1 className="text-black mt-24 mb-14 text-4xl text-center sm:text-3xl md:text-5xl lg:text-6xl sm:mt-16 md:mt-20 lg:mt-24 sm:mb-10 md:mb-12 lg:mb-14">FIELD OF SPECIALIZATION</h1>
        <br />
        <br />
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:grid-areas-custom">
            
            {/* Container 1 */}
            <div className="bg-transparent hover:bg-gray-900 transition-all g rounded-3xl border-spacing-1 border border-gray-400 transform hover:-translate-y-20 duration-500 w-[350px] h-[500px] group lg:area-one">
              <div className="ml-6 mt-9 w-[150px] object-fit rounded-t-lg">
                <FontAwesomeIcon icon={faHandHoldingDollar} size="3x" className="group-hover:text-blue-400" />
              </div>
              <div className="p-6 transition-colors duration-1000">
                <h2 className="text-2xl text-black font-bold mb-2 group-hover:text-blue-400">
                  PROJECT MANAGEMENT & BUDGET CONTROL
                </h2>
                <p className="text-black group-hover:text-blue-400">
                  Streamlines complex projects and optimize financial resources. Our expert managers ensure timely delivery and cost-effectiveness through comprehensive planning, risk assessment, and budget control.
                </p>
              </div>
            </div>
  
            {/* Container 2 */}
            <div className="bg-transparent hover:bg-gray-900 transition-all rounded-3xl border-spacing-1 border border-gray-400 transform duration-500 hover:-translate-y-20 w-[350px] h-[500px] group lg:area-two">
              <div className="ml-6 mt-9 w-[150px] object-fit rounded-t-lg">
                <FontAwesomeIcon icon={faDiagramProject} size="3x" className="group-hover:text-blue-400"/>
              </div>
              <div className="p-6 transition-colors duration-1000">
                <h2 className="text-2xl text-black font-bold mb-2 group-hover:text-blue-400">PROCUREMENT SOLUTIONS DESIGN</h2>
                <p className="text-black group-hover:text-blue-400">
                  We offer tailored procurement services covering strategic sourcing, vendor management, and supply chain optimization. Our team of experts streamline purchasing processes, reduce costs, and enhance operational efficiency using the best industry practices.
                </p>
              </div>
            </div>
  
            {/* Container 3 */}
            <div className="bg-transparent hover:bg-gray-900 transition-all rounded-3xl border-spacing-1 border border-gray-400 transform duration-500 hover:-translate-y-20 hover:delay-2000 w-[350px] h-[500px] group lg:area-three">
              <div className="ml-6 mt-9 w-[150px] object-fit rounded-t-lg">
                <FontAwesomeIcon icon={faFileSignature} size="3x" className="group-hover:text-blue-400"/>
              </div>
              <div className="p-6 transition-colors duration-1000">
                <h2 className="text-2xl text-black font-bold mb-2 group-hover:text-blue-400">SUBCONTRACTING</h2>
                <p className="text-black group-hover:text-blue-400">
                  We manage complex subcontracting relationships to ensure project success. We provide comprehensive subcontractor qualification, selection, and management services, maintaining seamless coordination and accountability.
                </p>
              </div>
            </div>

            <div className="hidden md:block bg-transparent w-[350px] h-[500px] group">

            </div>
            {/* Container 4 */}
            <div className="bg-transparent hover:bg-gray-900 transition-all rounded-3xl border-spacing-1 border border-gray-400 transform duration-500 hover:-translate-y-6 hover:delay-2000 w-[350px] h-[500px] group lg:area-four">
              <div className="ml-6 mt-9 w-[150px] object-fit rounded-t-lg">
                <FontAwesomeIcon icon={faTowerCell} size="3x" className="group-hover:text-blue-400"/>
              </div>
              <div className="p-6 transition-colors duration-1000">
                <h2 className="text-2xl text-black font-bold mb-2 group-hover:text-blue-400">
                  TELECOMMUNICATIONS DESIGN
                </h2>
                <p className="text-black group-hover:text-blue-400">
                  Our engineering and design services include underground, aerial, fiber, copper, and 5G network designs from end to end. We play a crucial role in integrating your telecommunications infrastructure into major urban development projects, requiring expertise in both engineering and project management.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
