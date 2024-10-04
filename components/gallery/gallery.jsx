"use client"

import {motion} from "framer-motion"
import gal1 from "../../public/pictures/gallery1.jpg"
// import gal2 from "../../public/pictures/gallery2.jpg"
import gal3 from "../../public/pictures/gallery3.jpeg"
import gal4 from "../../public/pictures/gallery4.jpg"
import gal5 from "../../public/pictures/gallery5.jpg"
import gal6 from "../../public/pictures/gallery6.jpg"
import gal7 from "../../public/pictures/gallery7.jpg"
import gal8 from "../../public/pictures/gallery8.jpg"
import gal9 from "../../public/pictures/gallery9.jpg"
import gal10 from "../../public/pictures/gallery10.jpg"
import Image from "next/image"


const RandomImageGallery = () => {
  const imageLinks = [
    gal1, gal3, gal4, gal5, gal6, gal7, gal8, gal9, gal10
  ];

  return (
    <div className='h-auto w-full px-6 md:px-24 my-10'>
        <div className='text-5xl w-full font-bold text-black text-center px-2 py-3 max-lg:text-3xl mx-md:p-[4px] mx-auto max-md:text-xl mb-8'>
            <span className='h-full border-b-2 border-black py-[5px]'>
                Gallery
            </span>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
            {imageLinks.map((link, index) => (
                
                <motion.div 
                  key={index} 
                  className="max-w-xs hover:scale-110 transition duration-300"
                  initial={{opacity:0}}
                  whileInView={{opacity:1}}
                  transition={{duration:1.2}}
                  viewport={{once:1}}
                >
                  <Image 
                    objectFit="cover"
                    src={link}
                    alt="image"
                  />
                </motion.div>
            ))}
        </div>
    </div>
   
  );
};

export default RandomImageGallery;
