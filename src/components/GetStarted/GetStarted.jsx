import React, { useContext, useRef } from 'react'
import { ScrollContext } from '../../context/ScrollProvide';

function GetStarted() {

    const elementRef = useContext(ScrollContext)

    function goToElement() {
        if (elementRef.current) {
            elementRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <div className='get-started relative flex justify-center md:items-center h-screen sm:h-[630px]'>
            {/* Background images */}
            <img
                className='xl:top-[95px] bottom-0 z-10 lg:w-[300px] w-[200px] absolute left-[8%] opacity-90 rounded-xl md:block hidden'
                src="../../images/QkIa5tT.jpeg"
                alt="img not found!"
            />
            <img
                className='xl:top-[250px] bottom-0 z-10 lg:w-[300px] w-[200px] absolute right-[8%] opacity-90 rounded-full md:block hidden'
                src="../../images/ZANVnHE.jpeg"
                alt="img not found!"
            />
            <div className="get-started-description md:pt-0 pt-28">
                <div className='text-center z-20'>
                    <h1 className='sm:text-4xl md:mb-[150] mb-[50px] font-semibold sm:w-[470px] text-gray-800 leading-relaxed text-2xl w-[90%] m-auto'>
                        This is a simple redux project built for testing and collecting resumes.
                    </h1>
                    <button className='w-[120px] bg-purple-950 text-white py-2 rounded-md hover:transition-all hover:opacity-80' type='submit' onClick={goToElement}>Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default GetStarted;