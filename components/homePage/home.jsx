import React from 'react'
import Corousel from '../corousel/corousel'
import Image from 'next/image'
import clglogo from '../../public/clglogo.png'
import Link from 'next/link'

const Home = () => {
  return (
    <section className='min-h-[90vh] h-auto w-full px-16 py-12' id='home'>
      <div className='flex w-full h-full justify-between items-center max-lg:flex-col gap-4'>
        <div className='w-1/3 flex flex-col gap-2 items-center justify-center max-lg:w-[80%]'>
          <div className='h-full w-full flex justify-center'>
            <Image 
              src={clglogo}
              width={100}
              height={100}
              className='h-[30%] w-[30%]'
              />
          </div>
            <h1 className='text-4xl font-extrabold text-center text-black mb-2'>INSTITUTE's INNOVATION CELL</h1>
            <p className='text-center text-xl'>Indian Institute of Information Technology, Allahabad</p>
        </div>
        <div className='w-2/3 max-lg:w-[90%]'>
          <Corousel />
        </div>
      </div>     
    </section>
  )
}

export default Home