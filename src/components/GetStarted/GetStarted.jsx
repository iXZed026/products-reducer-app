import React from 'react'

function GetStarted() {
    return (
        <div className='get-started relative flex justify-center items-center h-[630px]'>
            {/* Background images */}
            <img
                className='xl:top-[95px] bottom-0 z-10 lg:w-[300px] w-[200px] absolute left-[12%] opacity-90 rounded-full'
                src="../../images/QkIa5tT.jpeg"
                alt="img not found!"
            />
            <img
                className='xl:top-[250px] bottom-0 z-10 lg:w-[300px] w-[200px] absolute right-[12%] opacity-90 rounded-full'
                src="../../images/ZANVnHE.jpeg"
                alt="img not found!"
            />
            <div className="get-started-description">
                <div className='text-center z-20'>
                    <h1 className='sm: text-4xl mb-[150px] font-semibold w-[500px] text-gray-800 leading-relaxed'>
                        This is a redux project built for testing and collecting resumes.
                    </h1>
                    <button className='w-[120px] bg-black text-gray-100 py-2 rounded-md hover:transition-all hover:opacity-80' type='submit'>Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default GetStarted;