"use client"

import React, { useState, useEffect } from 'react'
import { motion } from "framer-motion"
import Image from 'next/image'

import event1 from "../../public/images/event1.jpg"
import event2 from "../../public/images/event2.jpg"

const ActivityCard = () => {

    const [expanded, setExpanded] = useState({}); // State to track expanded descriptions
    const [isMobile, setIsMobile] = useState(false); // State to check if in mobile view

    // Toggle expanded state for specific eventId
    const toggleExpanded = (eventId) => {
        setExpanded((prevState) => ({
            ...prevState,
            [eventId]: !prevState[eventId],
        }));
    };

    // Function to handle resizing and detect mobile view
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768); // Set to true if screen width is less than 768px
        };

        // Run on initial load
        handleResize();

        // Add event listener on window resize
        window.addEventListener("resize", handleResize);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const event = [
        {
            eventId: 1,
            name: "Workshop on Intellectual Property Rights and Innovation",
            desc: "The training program covered details on intellectual property rights, copyrights, patents, etc. The participants could learn the technology translation procedures of making patents related to the US and other motivations for creating start-up. The focus of the training program was on intellectual property rights, patents related to India and other countries, the supporting platform, and required exposure.",
            date: "Dec 2, 2023",
            url: event2
        },
        {
            eventId: 2,
            name: "Advance Entrepreneurship and skill Development Program",
            desc: "Capacity building through data-driven technologies is vital for shaping the entrepreneurs of the future. In an ever-changing business landscape, such tools empower entrepreneurs to make informed decisions, identify emerging trends, and adapt swiftly to market dynamics. By harnessing data analytics, entrepreneurs gain valuable insights into consumer behavior, industry trends, and competitive landscapes, enabling them to innovate effectively.",
            date: "Feb 12-16, 2024",
            url: event1
        }
    ];

    const maxDescLength = 150; // Maximum length of description before truncating

    return (
        <>
            <motion.div className="container mx-auto w-full h-full">
                <div className="relative wrap overflow-hidden  p-4 md:p-10 h-full">
                    <div
                        className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border"
                        style={{ left: "50%" }}
                    />
                    {
                        event.map((ele) => (
                            <motion.div
                                key={ele.eventId}
                                className={ele.eventId % 2 === 0
                                    ? "mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline max-md:flex-col"
                                    : "mb-8 flex justify-between items-center w-full left-timeline max-md:flex-col"
                                }
                                initial={ele.eventId % 2 === 0
                                    ? { x: '-10vw', opacity: 0 }
                                    : { x: '10vw', opacity: 0 }
                                }
                                whileInView={{ opacity: 1, x: '0' }}
                                transition={{ duration: 2 }}
                                viewport={{ once: 1 }}
                            >
                                <div className="order-1 w-5/12 max-md:w-full">
                                    <Image
                                        src={ele.url}
                                        objectFit='cover'
                                    />
                                </div>
                                <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full max-md:hidden">
                                    <h1 className="mx-auto font-semibold text-lg text-white">{ele.eventId}</h1>
                                </div>
                                <div className="order-1 bg-blue-100 rounded-lg shadow-xl w-5/12 px-6 py-4 md:min-h-fit flex flex-col justify-between max-md:w-full">
                                    <div className='py-4 flex flex-col'>
                                        <h3 className="mb-2 font-bold text-gray-800 text-2xl text-start">{ele.name}</h3>
                                        <p className="text-lg leading-snug tracking-tight text-gray-900 text-opacity-100">
                                            {/* Show full text on desktop or handle truncation in mobile view */}
                                            {isMobile && !expanded[ele.eventId]
                                                ? `${ele.desc.slice(0, maxDescLength)}${ele.desc.length > maxDescLength ? '...' : ''}`
                                                : ele.desc
                                            }
                                        </p>
                                        {/* Show 'Show more/less' button only in mobile view */}
                                        {isMobile && ele.desc.length > maxDescLength && (
                                            <button
                                                onClick={() => toggleExpanded(ele.eventId)}
                                                className="text-blue-600 mt-2"
                                            >
                                                {expanded[ele.eventId] ? 'Show less' : 'Show more'}
                                            </button>
                                        )}
                                    </div>
                                    <p>{ele.date}</p>
                                </div>
                            </motion.div>
                        ))
                    }

                </div>
            </motion.div>
        </>
    );
}

export default ActivityCard;
