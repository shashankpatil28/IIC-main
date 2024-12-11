"use client"

import React, { useState, useEffect } from 'react';
import logo from '../../public/images/iiclogo.png';
import clglogo from '../../public/images/clglogo.png';
import Image from 'next/image';
import { FaPlus, FaTimes } from "react-icons/fa";
import Link from 'next/link';
import './navbar.css';

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isDropdownOpen && !event.target.closest('.dropdown')) {
        setDropdownOpen(false);
      }
    };

    const handleActivity = () => {
      setDropdownOpen(false);
    };

    const timeout = setTimeout(() => {
      setDropdownOpen(false);
    }, 3000); // 3 seconds timeout for dropdown

    document.addEventListener('click', handleOutsideClick);
    document.addEventListener('scroll', handleActivity);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
      document.removeEventListener('scroll', handleActivity);
      clearTimeout(timeout);
    };
  }, [isDropdownOpen]);

  // Handle auto-close of the drawer on screen resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setDrawerOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="navbar bg-gray-300 px-6 md:px-16 min-h-[10vh] sticky top-0 left-0 z-10 shadow-lg">
      <div className="navbar-start gap-2">
        <a href="https://iic.mic.gov.in">
          <Image
            height={"80px"}
            width={"200px"}
            src={logo}
            className='h-[4rem] w-36'
          />
        </a>

        <a className='flex justify-center items-center gap-1' href='https://www.iiita.ac.in/'>
          <Image
            src={clglogo}
            width={50}
            height={50}
            className='h-[16%] w-[100%]'
          />
          <div className='max-md:hidden'>
            <p className='font-semibold'>IIIT</p>
            <p className='font-semibold'>Allahabad</p>
          </div>
        </a>
      </div>

      {/* Hamburger menu for mobile */}
      <div className="navbar-end flex lg:hidden">
        <button onClick={() => setDrawerOpen(true)} className="btn btn-ghost btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
          </svg>
        </button>
      </div>

      {/* Drawer for mobile view */}
      {isDrawerOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-20 transition-opacity duration-300">
          <div className="bg-white w-64 h-full p-5 z-30 absolute left-0 top-0 transform transition-transform duration-500">
            <button onClick={() => setDrawerOpen(false)} className="text-right mb-4 absolute right-4 top-8">
              <FaTimes className="text-2xl" />
            </button>
            <p className='absolute top-8 left-4 text-2xl font-bold ml-1'>
                IIC IIITA
            </p>
            <ul className="space-y-2 relative top-16 right-2"  >
                <li className='border-2 px-2 py-1 rounded-md'  onClick={() => setDrawerOpen(false)}><Link href="#home">Home</Link></li>
                <li className='border-2 px-2 py-1 rounded-md'  onClick={() => setDrawerOpen(false)}><Link href="#">Guidelines</Link></li>
                <li className='border-2 px-2 py-1 rounded-md'  onClick={() => setDrawerOpen(false)}><Link href="#members">Members</Link></li>
                <li className='border-2 px-2 py-1 rounded-md'>
                    <details open={isDropdownOpen} onClick={() => setDropdownOpen(!isDropdownOpen)}>
                    <summary>Portals</summary>
                    <ul className="p-2 w-[100%]">
                        <li className='border-2 px-2 py-1 rounded-md'><Link href="https://yukti.mic.gov.in/"  onClick={() => setDrawerOpen(false)}>Yukti Portal</Link></li>
                        <li className='border-2 px-2 py-1 rounded-md'><Link href="https://www.sih.gov.in/"  onClick={() => setDrawerOpen(false)}>SIH</Link></li>
                    </ul>
                    </details>
                </li >
                <li className='border-2 px-2 py-1 rounded-md'><Link href="#footer"  onClick={() => setDrawerOpen(false)}>Contact Us</Link></li>
            </ul>
          </div>
        </div>
      )}

      {/* Dropdown for "Portals" */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link href="#home">Home</Link></li>
          <li><Link href="#">Guidelines</Link></li>
          <li><Link href="#members">Members</Link></li>
          <li>
            <details open={isDropdownOpen} onClick={() => setDropdownOpen(!isDropdownOpen)}>
              <summary>Portals</summary>
              <ul className="p-2 w-[150%]">
                <li><Link href="https://yukti.mic.gov.in/">Yukti Portal</Link></li>
                <li><Link href="https://www.sih.gov.in/">SIH</Link></li>
              </ul>
            </details>
          </li>
          <li><Link href="#iifi">IIFI</Link></li>
          <li><Link href="#footer">Contact Us</Link></li>
        </ul>
      </div>
    </section>
  );
};

export default Navbar;
