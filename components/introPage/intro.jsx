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
  return (
    <motion.div className='min-h-[75vh] h-auto w-full px-16 bg-gray-200 flex flex-col justify-center gap-6 max-md:gap-3 py-4'
        >
        <motion.div className='text-5xl w-full font-bold text-black text-center px-2 py-3 max-lg:text-3xl mx-md:p-[4px] mx-auto max-md:text-xl'
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:0.9}}
            viewport={{once:1}}>
            <span className='h-full border-b-2 border-black py-[5px]'>
                INTRODUCTION
            </span>
        </motion.div>

        <motion.div className='py-4 mb-4'
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

        <motion.div className='w-full flex gap-2'
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:2}}
        viewport={{once:1}}>
            <div className='min-w-[17%] my-auto'>
               <Image 
              src={logo}
              width={50}
              height={50}
              className='h-[90%] w-[100%]'
              />
            
            </div>
            <div className='py-4 flex flex-col items-center text-black'>
                <p className='text-xl mb-6 max-md:text-lg max-sm:text-[1rem] text-start w-[90%]'>
                The Ministry of Human Resource Development in 2019, released the National Innovation and Startup Policy
                2019 for students and faculty of Higher Education Institutions (HEIs). The Policy is in line with the 
                focus of the Central Government on entrepreneurial projects. The framework was created to enable the 
                institutes to actively engage students, faculties and staff in innovation and entrepreneurship related 
                activities. The Guidelines on National Innovation & Startup policy 2019 were published to provide required 
                direction and support in handling Innovation Startup and Intellectual Property rights related issues.
                </p>
                <p className='text-xl mb-6 max-md:text-lg max-sm:text-[1rem] text-start w-[90%]'>
                The framework designed to facilitate the Ministry of Human Resource Development in bringing uniformity 
                across HEIs in terms of Intellectual Property ownership management, technology licensing and institutional
                 Startup policy, thus enabling creation of a robust innovation and Start up ecosystem across all HEIs.
                </p>
            </div>
        </motion.div>

        
        
       
       
    </motion.div>
  )
}

export default Intro