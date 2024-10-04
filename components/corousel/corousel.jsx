import React from 'react'
import ImageSlider from '../slider/slider'

const Corousel = () => {
  const slides = [
    { url: "https://i.postimg.cc/kXv23BGG/slide1.jpg", title: "beach" },
    { url: "https://i.postimg.cc/cHDVnqsf/slide2.jpg", title: "boat" },
    { url: "https://i.postimg.cc/sfYmXnDx/slide3.png", title: "forest" },

  ];

  return (
      <div className='w-full h-full '>
        <ImageSlider slides={slides} className='w-full'/>
      </div>
  )
}
export default Corousel