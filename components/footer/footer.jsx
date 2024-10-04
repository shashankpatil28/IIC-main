import React from 'react'
import Link from 'next/link'
import MoeImg from "../../public/MIC-Big.png"
import Image from "next/image"
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube  } from "react-icons/fa";

const Footer = () => {
  return (
    <section className='footer w-full px-16 bg-gray-200' id='footer'>
        <footer className="relative pt-8 pb-6 w-full">
        <div className="container mx-auto px-4">
            <div className="flex flex-wrap text-left lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
                <h4 className="text-3xl fonat-semibold text-blueGray-700 mb-1">
                    Connect With Us
                </h4>
                <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
                    through Social Media
                </h5>
                <div className="mt-6 lg:mb-0 mb-6">
                <button
                    className="bg-white text-blue-500 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                    type="button"
                >
                    <Link href='https://twitter.com/IIC_IIITA'  className='flex justify-center items-center'><FaTwitter className='text-2xl'/></Link>
                </button>
                <button
                    className="bg-white text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                    type="button"
                >
                    <Link href='https://www.facebook.com/iiciiita/' className='flex justify-center items-center'><FaFacebook className='text-2xl'/></Link>
                </button>
                <button
                    className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                    type="button"
                >
                    <Link href='https://www.instagram.com/iic_iiit_allahabad/?igsh=Z2ljYWFvc3VpY2Z3'  className='flex justify-center items-center'><FaInstagram className='text-2xl'/></Link>
                </button>
                <button
                    className="bg-white text-red-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                    type="button"
                >
                   <Link href='twitter.com'  className='flex justify-center items-center'><FaYoutube className='text-2xl'/></Link>
                </button>
                </div>
                <div className='mt-4'>
                    <a href="https://mic.gov.in/">
                        <Image 
                            objectFit='cover'
                            src={MoeImg}

                        />
                    </a>
                   
                </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
                <div className="flex flex-wrap items-top mb-6">
                    <div className="w-full  px-4 ml-auto">
                        <span className="block uppercase text-blueGray-500 text-2xl font-semibold mb-4">
                            Useful Links
                        </span>
                        <ul className="list-unstyled">
                            <li className='mb-2'>
                                <button className="cta">
                                    <Link href="https://yukti.mic.gov.in/">
                                        <span className="hover-underline-animation">Yukti Portal</span>
                                    </Link>
                                </button>
                            </li>
                            <li className='mb-2'>
                                <button className="cta">
                                    <Link href="https://www.sih.gov.in/">
                                        <span className="hover-underline-animation">Smart India Hackathon</span>
                                    </Link>
                                </button>
                            </li>
                            <li className='mb-2'>
                                <button className="cta">
                                    <Link href="https://nisp.mic.gov.in/">
                                        <span className="hover-underline-animation">NISP</span>
                                    </Link>
                                </button>
                            </li>
                            <li className='mb-2'>
                                <button className="cta">
                                    <Link href="https://mic.gov.in/">
                                        <span className="hover-underline-animation">MOE's Innovation cell</span>
                                    </Link>
                                </button>
                            </li>
                            <li className='mb-2'>
                                <button className="cta">
                                    <Link href="https://www.ariia.gov.in/">
                                        <span className="hover-underline-animation">NIRF Innovation</span>
                                    </Link>
                                    
                                </button>
                            </li>
                        </ul>
                        
                    </div>
                </div>
            </div>
            </div>
            <hr className=" border-gray-400 mt-4" />'
            <div className="flex flex-wrap items-center md:justify-between justify-center">
                <div className="w-full md:w-4/12 px-2 mx-auto text-center">
                    <div className="text-sm text-blueGray-500 font-semibold py-1">
                    Copyright © <span id="get-current-year" className='text-black'>2023</span>
                    <a
                        className="text-blueGray-500 hover:text-gray-800"
                        target="_blank"
                    />{" "}
                    IIC- 
                    <a
                        className="text-blueGray-500 hover:text-blueGray-800"
                    >
                        WebTeam
                    </a>
                    .
                    </div>
                </div>
            </div>
        </div>
        </footer>  
    </section>
  )
}

export default Footer