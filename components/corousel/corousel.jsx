import React from 'react'
import ImageSlider from '../slider/slider'

const Corousel = () => {
  const slides = [
    { url: "http://localhost:3000/slide2.jpg", title: "beach" },
    { url: "http://localhost:3000/slide1.jpg", title: "boat" },
    { url: "http://localhost:3000/slide3.png", title: "forest" },

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