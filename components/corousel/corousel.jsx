import React from 'react'
import ImageSlider from '../slider/slider'

const Corousel = () => {
  const slides = [
    { url: "https://i.postimg.cc/kXv23BGG/slide1.jpg", title: "beach" },
    { url: "https://i.postimg.cc/cHDVnqsf/slide2.jpg", title: "boat" },
    { url: "http://g.imgpost.co/2024/04/03/slide3.png", title: "forest" },

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