import React from 'react'

const Intro = () => {
  return (
    <section className='min-h-[75vh] h-auto w-full px-16 bg-gray-200 flex flex-col justify-center gap-6 max-md:gap-3 py-4'> 
        <h1 className='text-5xl font-bold text-black text-center px-2 py-3 border-b-2 border-black w-fit max-lg:text-3xl mx-md:p-[4px] mx-auto max-md:text-xl'>INTRODUCTION</h1>

        <div className='py-4 flex flex-col items-center'>
            <p className='text-2xl mb-6 max-md:text-lg max-sm:text-[1rem] text-center w-[90%]'>
                The Ministry of Human Resource Development in 2019 released the National Innovation and 
                Startup Policy 2019 for students and faculty of Higher Education Institutions (HEIs). 
                The Policy is in line with the focus of the Central Government on entrepreneurial projects.
            </p>
            <button className="px-4 py-2 bg-white border-gray-100 border-[1px] 
            rounded-md hover:border-black hover:bg-gray-100 max-md:px-2 max-sm:py-1 
            ">Read More</button>
        </div>
        
        <div className='py-4 mb-4'>
            <div className='relative left-[15%] text-2xl font-bold w-[5%]'>##</div>
            <p className='text-3xl mb-3 px-[20%] text-center max-lg:text-xl max-md:text-lg max-sm:text-md '>
                "Innovation is the art of turning today's dreams into 
                tomorrow's reality, and entrepreneurship 
                is the vessel that carries those dreams forward."
            </p>
            <div className='relative right-[-82%] text-2xl font-bold w-[5%]'>##</div>
        </div>
       
    </section>
  )
}

export default Intro