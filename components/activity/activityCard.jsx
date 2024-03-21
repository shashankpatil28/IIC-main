"use client"

import React from 'react'
import { motion } from "framer-motion"

const ActivityCard = (props) => {
  return (
    <>
    <motion.div className="container mx-auto w-full h-full">
        <div className="relative wrap overflow-hidden p-10 h-full">
            <div
            className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border"
            style={{ left: "50%" }}
            />
            {
                props.event.map((ele) => (
                    <motion.div key={ele.eventId} className={ele.eventId % 2 == 0 ? "mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline" : "mb-8 flex justify-between items-center w-full left-timeline"}
                    initial={ ele.eventId % 2 == 0 ? { x:'-10vw', opacity:0} :  { x:'10vw', opacity:0}}
                    whileInView={{opacity:1,  x:'0'}}
                    transition={{ duration: 2}}
                    viewport={{once:1}}
                    >
                        <div className="order-1 w-5/12">
                            <img src="https://picsum.photos/id/1024/600/300" alt="eventPic" className='rounded-lg mb-2'/>
                        </div>
                        <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                            <h1 className="mx-auto font-semibold text-lg text-white">{ele.eventId}</h1>
                        </div>
                        <div className="order-1 bg-blue-100 rounded-lg shadow-xl w-5/12 px-6 py-4 md:min-h-[30vh] flex flex-col justify-between">
                            <div className='py-4'>
                                <h3 className="mb-2 font-bold text-gray-800 text-2xl text-start">{ele.name}</h3>
                                <p className="text-lg leading-snug tracking-tight text-gray-900 text-opacity-100 ">
                                    {ele.desc}
                                </p>
                            </div>
                            <p>{ele.date}</p>
                        </div>
                    </motion.div>
                ))
            }
            
            {/* left timeline */}
            {/* <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                
                <div className="order-1 w-5/12">
                    <img src="https://picsum.photos/id/1021/600/300" alt="eventPic" className='rounded-lg mb-2'/>
                </div>
                <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                        <h1 className="mx-auto text-white font-semibold text-lg">2</h1>
                </div>
                <div className="order-1 bg-blue-100 rounded-lg shadow-xl w-5/12 px-6 py-4 md:min-h-[30vh] flex flex-col justify-between">
                        <div className='py-4'>
                            <h3 className="mb-2 font-bold text-gray-800 text-2xl text-start">Event Name</h3>
                            <p className="text-lg leading-snug tracking-tight text-gray-900 text-opacity-100 ">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod commodi sed inventore 
                            possimus iure suscipit tempore facere? Rem debitis magnam autem possimus nesciunt
                             rerum architecto iusto esse laboriosam neque quasi inventore beatae dolorem,
                            </p>
                        </div>
                        <p>Date : 10.10.10</p>
                </div>
            </div> */}
        </div>
    </motion.div>
</>


  )
}

export default ActivityCard