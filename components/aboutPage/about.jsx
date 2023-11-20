import React from 'react'
import Card from '../cards/card'

const About = () => {
  return (
    <section className='min-h-[88vh] h-auto w-full px-16 py-4'>
      <div className='flex flex-col gap-2 items-center justify-between'>
        <div className='flex flex-col items-center gap-2'>
            <h1 className='text-5xl font-bold text-black text-center px-2 py-3 border-b-2
                border-black w-fit max-lg:text-3xl mx-md:p-[4px] mx-auto max-md:text-xl'>
                  About the Meet 
            </h1>
            <p className='text-xl mb-6 max-md:text-lg max-sm:text-[1rem] text-center w-[80%] mt-2'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quod fugit omnis recusandae voluptatibus, 
              accusamus totam a incidunt mollitia iure eos.
            </p>
        </div>
        <Card />
      </div>
      
    </section>
  )
}

export default About