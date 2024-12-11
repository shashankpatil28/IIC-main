"use client"

import {motion} from "framer-motion"
import iifi1 from "../../public/images/iifi1.png"
import iifi2 from "../../public/images/iifi2.png"
import iifi3 from "../../public/images/iifi3.png"
import Image from "next/image"


const RandomImageGallery = () => {
  const imageLinks = [
    iifi1, iifi2, iifi3
  ];

  return (
    <div className='h-auto w-full px-6 md:px-24 my-10 ' id="iifi">
        <div className='text-5xl w-full font-bold text-black text-center px-2 py-3 max-lg:text-3xl mx-md:p-[4px] mx-auto max-md:text-xl mb-8'>
            <span className='h-full border-b-2 border-black py-[5px]'>
            INNOVATION AND INCUBATION FOUNDATION 
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
