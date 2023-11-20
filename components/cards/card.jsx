import React from 'react'

const Card = () => {
  return (
    <>
        {/* component */}
        <div className="flex items-center justify-center">
            <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4">
                {/* Replace this with your grid items */}
                <div className="bg-white rounded-lg border p-2">
                <img
                    src="https://placehold.co/300x200/d1d4ff/352cb5.png"
                    alt="Placeholder Image"
                    className="w-full h-48 rounded-md object-cover"
                />
                <div className="px-1 py-4">
                    <div className="font-bold text-xl mb-2">Blog Title</div>
                    <p className="text-gray-700 text-base">
                    This is a simple blog card example using Tailwind CSS. You can
                    replace this text with your own blog content.
                    </p>
                </div>
                </div>
                <div className="bg-white rounded-lg border p-2">
                <img
                    src="https://placehold.co/300x200/d1d4ff/352cb5.png"
                    alt="Placeholder Image"
                    className="w-full h-48 rounded-md object-cover"
                />
                <div className="px-1 py-4">
                    <div className="font-bold text-xl mb-2">Blog Title</div>
                    <p className="text-gray-700 text-base">
                    This is a simple blog card example using Tailwind CSS. You can
                    replace this text with your own blog content.
                    </p>
                </div>
                </div>
                <div className="bg-white rounded-lg border p-2">
                <img
                    src="https://placehold.co/300x200/d1d4ff/352cb5.png"
                    alt="Placeholder Image"
                    className="w-full h-48 rounded-md object-cover"
                />
                <div className="px-1 py-4">
                    <div className="font-bold text-xl mb-2">Person Name</div>
                    <p className="text-gray-700 text-base">
                   Position in IIC
                    </p>
                </div>
                </div>
                <div className="bg-white rounded-lg border p-2">
                <img
                    src="https://placehold.co/300x200/d1d4ff/352cb5.png"
                    alt="Placeholder Image"
                    className="w-full h-48 rounded-md object-cover"
                />
                <div className="px-1 py-4">
                    <div className="font-bold text-xl mb-2">Blog Title</div>
                    <p className="text-gray-700 text-base">
                    This is a simple blog card example using Tailwind CSS. You can
                    replace this text with your own blog content.
                    </p>
                </div>
                </div>
                {/* Add more items as needed */}
            </div>
            </div>
        </div>
        </>

  )
}

export default Card