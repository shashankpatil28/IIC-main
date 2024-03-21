"use client"

import React from 'react';
import {motion} from 'framer-motion'

function Table() {
    const data = [
        {
            personId : 1,
            designation : "president",
            name : "Dean (R&D)",
            position : "dean"
        },
        {
            personId : 2,
            designation : "Convener",
            name : "Dr. Pramod Kumar",
            position : "dean"
        },
        {
            personId : 3,
            designation : "Innovation Activity Coordinator",
            name : "Dr.T.Pant",
            position : "dean"
        },
        {
            personId : 4,
            designation : "Start-Up Activity Coordinator",
            name : "Dr.Pragya Singh",
            position : "dean"
        },
        {
            personId : 5,
            designation : "Internship Coordinator",
            name : "Dr.Rekha Verma",
            position : "dean"
        },
        {
            personId : 6,
            designation : "IPR Activity Coordinator",
            name : "Dr.Prasanna Kumar Mishra",
            position : "dean"
        },
        {
            personId : 7,
            designation : "Social Media Coordinator",
            name : "Dr.Srijit Bhattacharjee",
            position : "dean"
        },
        {
            personId : 8,
            designation : "ARIIA Coordinator",
            name : "to be added",
            position : "dean"
        },
        {
            personId : 9,
            designation : "NIRF Coordinator",
            name : "to be added",
            position : "dean"
        },
        {
            personId : 10,
            designation : "Member",
            name : "to be added",
            position : "dean"
        },
        {
            personId : 11,
            designation : "Secretory",
            name : "Assistant Registrar",
            position : "dean"
        },
    ];
    
    return (
        <section className="antialiased h-auto px-[10%] py-8 bg-white" id='members'>
            <div className="flex flex-col justify-center h-full">
                {/* Table */}
                <div className='flex flex-col items-center gap-2'>
                    <h1 className='text-5xl font-bold text-black text-center px-2 py-3 border-b-2
                        border-black w-fit max-lg:text-3xl mx-md:p-[4px] mx-auto max-md:text-xl'>
                        Institute’s Innovation Council
                    </h1>
                    <p className='text-xl mb-6 max-md:text-lg max-sm:text-[1rem] text-center w-[80%] mt-2'>
                    The Institute’s Innovation Council at IIIT Allahabad will comprise of following members
                    </p>
                </div>
                <motion.div className="w-full mx-auto bg-gray-100 shadow-lg"
                    initial={{opacity:0}}
                    whileInView={{opacity:1}}
                    transition={{duration:0.5}}
                    viewport={{once:1}}>
                    <div className="p-3">
                        <div className="overflow-x-auto">
                            <table className="table-auto w-full">
                                <thead className="text-lg font-semibold uppercase text-gray-600 bg-blue-200">
                                    <tr>
                                        <th className="p-2 whitespace-nowrap">
                                            <div className="font-semibold text-left">SR No.</div>
                                        </th>
                                        <th className="p-2 whitespace-nowrap">
                                            <div className="font-semibold text-left">Name</div>
                                        </th>
                                        <th className="p-2 whitespace-nowrap">
                                            <div className="font-semibold text-left">Position</div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="text-lg divide-y divide-gray-100">
                                    {data.map( ele => (
                                        <motion.tr key={ele.personId} className={ele.personId % 2 === 0 ? 'bg-blue-50' : 'bg-white'}initial={{opacity:0}}
                                            whileInView={{opacity:1}}
                                            transition={{duration:1}}
                                            viewport={{once:1}}>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="text-left">{ele.personId}</div>
                                            </td>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="font-medium text-gray-800">{ele.name}</div>
                                                </div>
                                            </td>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="text-left font-medium text-gray-700">{ele.designation}</div>
                                            </td>
                                        </motion.tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default Table;
