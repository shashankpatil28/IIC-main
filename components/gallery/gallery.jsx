import React from 'react';

const RandomImageGallery = () => {
  const imageLinks = [
    "https://picsum.photos/id/1019/200/300",
    "https://picsum.photos/id/1020/200/300",
    "https://picsum.photos/id/1021/200/300",
    "https://picsum.photos/id/1022/200/300",
    "https://picsum.photos/id/1023/200/300",
    "https://picsum.photos/id/1024/200/300",
    "https://picsum.photos/id/1025/200/300",
    "https://picsum.photos/id/1026/200/300",
    "https://picsum.photos/id/1027/200/300",
    "https://picsum.photos/id/1028/200/300"
  ];

  return (
    <div className='h-auto w-full px-24 my-10'>
        <div className='text-5xl w-full font-bold text-black text-center px-2 py-3 max-lg:text-3xl mx-md:p-[4px] mx-auto max-md:text-xl mb-8'>
            <span className='h-full border-b-2 border-black py-[5px]'>
                Gallery
            </span>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
            {imageLinks.map((link, index) => (
                <div key={index} className="max-w-xs hover:scale-125">
                <img src={link} alt={`Random Image ${index + 1}`} className="w-full h-auto rounded-lg shadow-md" />
                </div>
            ))}
        </div>
    </div>
   
  );
};

export default RandomImageGallery;
