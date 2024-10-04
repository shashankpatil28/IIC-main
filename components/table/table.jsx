"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { boardMember, normalMember } from "../../public/data.js";

function Table() {
  const [activeTab, setActiveTab] = useState("boardMembers");

  return (
    <section className="antialiased h-auto px-4 md:px-[10%] py-8 bg-white" id="members">
       <motion.div className='text-5xl w-full font-bold text-black text-center px-2 py-3 max-lg:text-3xl mx-md:p-[4px] mx-auto max-md:text-xl mb-4'
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:0.9}}
            viewport={{once:1}}>
            <span className='h-full border-b-2 border-black py-[5px]'>
                Members
            </span>
        </motion.div>
      <div className="flex flex-col justify-center h-full">
        <div className="flex justify-center gap-4 mb-6">
          <button
            className={`px-4 py-2 font-semibold ${
              activeTab === "boardMembers"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-600"
            }`}
            onClick={() => setActiveTab("boardMembers")}
          >
            Board Members
          </button>
          <button
            className={`px-4 py-2 font-semibold ${
              activeTab === "normalMembers"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-600"
            }`}
            onClick={() => setActiveTab("normalMembers")}
          >
            Student Members
          </button>
        </div>

        <motion.div
          className="w-full mx-auto bg-gray-100 shadow-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: 1 }}
        >
          <div className="p-3">
            <div className="overflow-x-auto">
              {activeTab === "boardMembers" ? (
                <table className="table-auto w-full">
                  <thead className="text-lg font-semibold uppercase text-gray-600 bg-blue-200">
                    <tr className="text-md">
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
                    {boardMember.map((ele) => (
                      <motion.tr
                        key={ele.personId}
                        className={
                          ele.personId % 2 === 0 ? "bg-blue-50 text-[15px]" : "bg-white text-[15px]"
                        }
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: 1 }}
                      >
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-left">{ele.personId}</div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="font-medium text-gray-800">
                              {ele.name}
                            </div>
                          </div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-left font-medium text-gray-700">
                            {ele.designation}
                          </div>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <table className="table-auto w-full">
                  <thead className="text-lg font-semibold uppercase text-gray-600 bg-green-200">
                    <tr className="text-md">
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">SR No.</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">Name</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">
                          Role Number
                        </div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">Position</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-[15px] divide-y divide-gray-100">
                    {normalMember.map((ele) => (
                      <motion.tr
                        key={ele.personId}
                        className={
                          ele.personId % 2 === 1 ? "bg-green-50" : "bg-white"
                        }
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: 1 }}
                      >
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-left">{ele.personId + 1}</div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="font-medium text-gray-800">
                              {ele.name}
                            </div>
                          </div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="font-medium text-gray-800">
                              {ele.rollNo}
                            </div>
                          </div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-left font-medium text-gray-700">
                            {ele.designation}
                          </div>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Table;
