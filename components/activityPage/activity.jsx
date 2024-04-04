import React from 'react'
import ActivityCard from '../activity/activityCard'
import event1 from "../../public/pictures/event1.jpg"
import event2 from "../../public/pictures/event2.jpg"

const Act = () => {
  const event = [
    
    {
      eventId : 1,
      name : "Workshop on Intellectual Property Rights and Innovation",
      desc : "The training program covered details on intellectual property rights, copyrights, patents, etc. The participants could learn the technology translation procedures of making patents related to the US and other motivations for creating start-up. The focus of the training program was on intellectual property rights, patents related to India and other countries, the supporting platform, and required exposure.   ",
      date : "Dec 2, 2023",
      url : event2
    },
    {
      eventId : 2,
      name : "Advance Entrepreneurship and skill Development Program",
      desc : "Capacity building through data-driven technologies is vital for shaping the entrepreneurs of the future. In an ever-changing business landscape, such tools empower entrepreneurs to make informed decisions, identify emerging trends, and adapt swiftly to market dynamics. By harnessing data analytics, entrepreneurs gain valuable insights into consumer behavior, industry trends, and competitive landscapes, enabling them to innovate effectively. ",
      date : "Feb 12-16, 2024",
      url : event1
    }
  ]
  return (
    <section className='h-auto w-full px-16 bg-gray-300 py-10' id='activity'>
        <div className='flex flex-col gap-2 items-center justify-between'>
            <div className='flex flex-col items-center gap-2'>
                <h1 className='text-5xl font-bold text-black text-center px-2 py-3 border-b-2
                    border-black w-fit max-lg:text-3xl mx-md:p-[4px] mx-auto max-md:text-xl'>
                    Events
                </h1>
                <p className='text-xl mb-6 max-md:text-lg max-sm:text-[1rem] text-center w-[60%] mt-2'>
                  Explore a vibrant array of innovation-driven events at IIITA's IIC Club, where creativity meets entrepreneurship. 
                  Engage with cutting-edge ideas, inspiring talks, and hands-on workshops shaping the future of technology and business.
                </p>
            </div>
            <ActivityCard event={event}/>
        </div>
    </section>
  )
}

export default Act