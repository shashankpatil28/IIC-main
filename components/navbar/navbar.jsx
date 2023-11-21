import React from 'react'
import logo from '../../public/iiclogo.png'
import Image from 'next/image'
import { FaPlus } from "react-icons/fa6";
import Link from 'next/link';
import './navbar.css'

const Navbar = () => {
  return (
    <section className="navbar bg-gray-300 px-16 min-h-[10vh] sticky top-0 left-0 z-10 shadow-lg">
        <div className="navbar-start">
           <Image 
                height={"80px"}
                width={"200px"}
                src={logo}
                className='h-[4rem] w-36'
           />
        </div>

        {/* media query navbar  */}
        <div className="navbar-center flex lg:hidden">
            <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li><Link href="#home">Home</Link></li>
                    <li><Link href="#activity">INNOTECH VENTURES</Link></li>
                    <li><Link href="#">INNOVATION'S COUNCIL</Link></li>
                    <li><Link href="#">GUIDELINES</Link></li>
                    <li><Link href="#footer">CONTACT US</Link></li>
                    <li><Link href="https://yukti.mic.gov.in/">YUKTI PORTAL</Link></li>
                    <li><Link href="https://www.sih.gov.in/">SIH</Link></li>
                </ul>
            </div>
        </div>

        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
            <li><Link href="#home">Home</Link></li>
            <li tabIndex={0}>
                <details>
                <summary>InnoTech</summary>
                <ul className="p-2 w-[185%]">
                    <li><Link href="#activity">Innotech Ventures</Link></li>
                    <li><Link href="#">Innovation's Counsils</Link></li>
                </ul>
                </details>
            </li>
            <li><Link href="#">Guidlines</Link></li>
            <li tabIndex={1}>
                <details>
                <summary>Portals</summary>
                <ul className="p-2 w-[150%]">
                    <li><Link href="https://yukti.mic.gov.in/">Yukti Portal</Link></li>
                    <li><Link href="https://www.sih.gov.in/">SIH</Link></li>
                </ul>
                </details>
            </li>
            
            <li><Link href="#footer">Contact Us</Link></li>
            </ul>
        </div>
        
        <div className="navbar-end">
            <div className="indicator">
                <Link href='/admin'>
                    <button className="btn text-lg">
                        <FaPlus className='text-xl'/>
                        Admin
                    </button>
                </Link>
                
            </div>
        </div>
    </section>
  )
}

export default Navbar