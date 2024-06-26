"use client"

import React from 'react'
import logo from '../../public/logo.png'
import Image from 'next/image'
import { useState } from 'react'
import {motion} from 'framer-motion'

const Intro = () => {

    const [flag , setFlag] = useState(false);
    const handleClick = () => {
        setFlag(flag => !flag)
        console.log(flag)
    } 

    const bullet = [
        {
            content: "To conduct various innovation, startup -related activities prescribed by MIC from time to time."
        },
        {
            content: "Mentoring the students in innovation, startup, and IPR activities."
        },
        {
            content: "To organise Hackathons, idea competition, mini-challenges etc. involving industry."
        },
        {
            content: "To organise periodic workshops/seminars/ interactions with entrepreneurs, investors, professionals."
        },
        {
            content: "Connecting with other IICs to develop an ecosystem conducive to the innovators."
        }
    ]
  return (
    <motion.div className='min-h-[75vh] h-auto w-full px-16 bg-gray-200 flex flex-col justify-center gap-6 max-md:gap-3 py-4'
        >
        <motion.div className='text-5xl w-full font-bold text-black text-center px-2 py-3 max-lg:text-3xl mx-md:p-[4px] mx-auto max-md:text-xl'
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:0.9}}
            viewport={{once:1}}>
            <span className='h-full border-b-2 border-black py-[5px]'>
                ABOUT
            </span>
        </motion.div>

        <motion.div className='py-4 mb-2'
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:1.5}}
            viewport={{once:1}}>
            <div className='relative left-[15%] text-2xl font-bold w-[5%]'>##</div>
            <p className='text-3xl mb-3 px-[20%] text-center max-lg:text-xl max-md:text-lg max-sm:text-md '>
                "Innovation is the art of turning today's dreams into 
                tomorrow's reality, and entrepreneurship 
                is the vessel that carries those dreams forward."
            </p>
            <div className='relative right-[-82%] text-2xl font-bold w-[5%]'>##</div>
        </motion.div>

        <motion.div className='w-[82%] flex gap-2 mx-auto max-md:w-full'
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:2}}
            viewport={{once:1}}>
            
            <div className='py-4 flex flex-col items-center text-black'>

                <p className='text-2xl font-semibold mb-6 max-md:text-lg max-sm:text-[1rem] text-center w-[90%]'>
                    MoE’s Innovation Cell (MIC) launched the Institution’s Innovation Council (IIC)
                    program in collaboration with AICTE for Higher Educational Institutions (HEIs).
                    The goal of this program is to promote the culture of innovation and start-up
                    ecosystem in educational institutions.
                </p>
                <p className='text-[20px] mb-6 max-md:text-lg max-sm:text-[1rem] text-center w-[96%]'>
                    Innovation and startups are the animating elements of a dynamic and thriving economy. 
                    They play a pivotal role in driving progress, pushing boundaries, and addressing pressing 
                    societal challenges. The need for innovation is paramount in today's rapidly evolving world, 
                    where technological advancements and changing consumer preferences demand constant adaptation. 
                    Startups, with their agility and fresh perspectives, are uniquely positioned to harness innovation 
                    and transform ideas into impactful solutions. They bring novel concepts to market, disrupt 
                    traditional industries, and create new avenues for growth and employment.
                </p>
            </div>
        </motion.div>
            <motion.div className='w-[80%] flex mx-auto gap-x-8 max-md:flex-col mb-8'
             initial={{opacity:0}}
             whileInView={{opacity:1}}
             transition={{duration:1.5}}
             viewport={{once:1}}>
                <div className='min-w-[22%] my-auto'>
                     <Image 
                        src={logo}
                        width={50}
                        height={50}
                        className='h-[90%] w-[100%]'
                    /> 
                </div>
                <div className='flex-1 my-auto gap-y-2'>
                    <div className='text-3xl font-semibold mb-2 '>
                        <p className='border-b-black border-b-[3px] border-opacity-50 py-2 w-fit px-1'>Objectives</p>
                    </div>
                    {bullet.map((b, i) => {
                        return (
                        <div className='flex items-center gap-4 justify-start mb-2'>
                            <div className='text-2xl font-bold flex items-center gap-[2px]'>
                                # <span className='text-[18px]'>{i+1}</span>
                            </div>
                            <p className='py-2 bg-zinc-300/50 my-auto p-2 text-lg text-zinc-700 w-full rounded-md'>
                                {b.content}
                            </p>
                        </div>
                         
                        )
                    })}
                </div>
            </motion.div>
    </motion.div>
  )
}

export default Intro