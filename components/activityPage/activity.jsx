import React from 'react'
import ActivityCard from '../activity/activityCard'


const Act = () => {
  
  return (
    <section className='h-auto w-full px-4 md:px-16 bg-gray-300 py-10' id='activity'>
        <div className='flex flex-col gap-2 items-center justify-between'>
            <div className='flex flex-col items-center gap-2'>
                <h1 className='text-5xl font-bold text-black text-center px-2 py-3 border-b-2
                    border-black w-fit max-lg:text-3xl mx-md:p-[4px] mx-auto max-md:text-xl'>
                    Events
                </h1>
                <p className='text-xl mb-6 max-md:text-lg max-sm:text-[1rem] text-center w-[90%] md:w-[60%] mt-2'>
                  Explore a vibrant array of innovation-driven events at IIITA's IIC Club, where creativity meets entrepreneurship. 
                  Engage with cutting-edge ideas, inspiring talks, and hands-on workshops shaping the future of technology and business.
                </p>
            </div>
            <ActivityCard/>
        </div>
    </section>
  )
}

export default Act