"use client"

import React from 'react'
import Corousel from '../corousel/corousel'
import Image from 'next/image'
import clglogo from '../../public/images/clglogo.png'
import Link from 'next/link'
import {motion} from 'framer-motion'

const Home = () => {
  return (
    <section className='min-h-[100vh] h-auto w-full px-4 py-12 md:px-16' id='home'>
      <div className='flex w-full h-full justify-between items-center max-lg:flex-col gap-4'>
        <div className='w-1/3 flex flex-col gap-2 items-center justify-center max-lg:w-[80%]'>
          <motion.div className='h-full w-full flex justify-center'
            initial={{y:'-20vw', opacity:0}}
            whileInView={{opacity:1,  y:'0'}}
            transition={{ duration: 0.2}}
            viewport={{once:1}}>
            <Image 
              src={clglogo}
              width={100}
              height={100}
              className='h-[30%] w-[30%]'
              />
          </motion.div>
            <motion.div
              initial={{y:'20vw', opacity:0}}
              whileInView={{opacity:1,  y:'0'}}
              transition={{ duration: 0.2}}
              viewport={{once:1}}>
              <h1 className='md:text-4xl text-3xl font-extrabold text-center text-black mb-2'>INSTITUTE's INNOVATION CELL</h1>
              <p className='text-center  text-[22px] md:text-[26px] font-semibold'>Indian Institute of Information Technology, Allahabad</p>
            </motion.div>
            
        </div>
        <motion.div className='w-2/3 max-lg:w-[100%] mb-4'
          initial={{x:'20vw', opacity:0}}
          whileInView={{opacity:1,  x:'0'}}
          transition={{ duration: 0.8, staggerChildren: 0.8}}
          viewport={{once:1}}>
          <Corousel />
          
        </motion.div>
      </div>     
    </section>
  )
}

export default Home