import React from 'react'
import Corousel from '../corousel/corousel'
import Image from 'next/image'
import clglogo from '../../public/clglogo.png'

const Home = () => {
  return (
    <section className='h-[90vh] w-full px-16'>
      <div className='flex w-full h-full justify-between items-center max-lg:flex-col gap-4'>
        <div className='w-1/3 flex flex-col gap-2 items-center justify-center'>
          <div className='h-full w-full flex justify-center'>
            <Image 
              src={clglogo}
              width={100}
              height={100}
              className='h-[30%] w-[30%]'
              />
          </div>
            <h1 className='text-4xl font-extrabold text-center text-black'>INSTITUTE's INNOVATION CELL</h1>
            <p>Indian Institute of Information Technology, Allahabad</p>
        </div>
        <div className='w-2/3'>
          <Corousel />
        </div>
      </div>
       
    </section>
  )
}

export default Home