import React from 'react'
import Image from 'next/image'
import slide1 from '../../public/slide1.jpg'
import slide2 from '../../public/slide2.jpg'
import slide3 from '../../public/slide3.jpg'
import slide4 from '../../public/slide4.jpg'
import ImageSlider from '../slider/slider'

const Corousel = () => {
  const slides = [
    { url: "http://localhost:3000/slide1.jpg", title: "beach" },
    { url: "http://localhost:3000/slide2.jpg", title: "boat" },
    { url: "http://localhost:3000/slide3.jpg", title: "forest" },
    { url: "http://localhost:3000/slide1.jpg", title: "city" },
    { url: "http://localhost:3000/slide4.jpg", title: "italy" },
  ];
  // const containerStyles = {
  //   width: "60vh",
  //   height: "40vh",
  //   margin: "0 auto",
  // };
  return (
      <div className='w-full h-full '>
        <ImageSlider slides={slides} className='w-full'/>
      </div>
  )
}
export default Corousel