import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <div className='flex z-50 justify-between md:justify-around h-17 border-b-[1px] border-gray-500 backdrop-blur backdrop-brightness-50 items-center text-white font-sans fixed w-full top-0 px-4 md:px-0'>
        <Link to='/' className='flex items-center gap-3'>
          <img src='logo.png' className='w-8 md:w-10' />
          <h3 className='font-bold text-lg md:text-[20px] text-primary font-jacques'>Ek Baar Aur</h3>
        </Link>

        <div className='hidden md:flex gap-10'>
          <Link to='/' className='nav-item hover:text-primary text-gray-300 transition-all duration-200 tracking-wide text-shadow-lg'>Home</Link>
          <Link to='/about-us' className='nav-item hover:text-primary text-gray-300 transition-all duration-200 tracking-wide text-shadow-lg'>About Us</Link>
          <Link to='/get-involved' className='nav-item hover:text-primary text-gray-300 transition-all duration-200 tracking-wide text-shadow-lg'>Get Involved</Link>
          {/* <Link to='/gallery' className='nav-item hover:text-primary text-gray-300 transition-all duration-200 tracking-wide text-shadow-lg'>Gallery</Link> */}
        </div>

        <button
          onClick={toggleMenu}
          className='md:hidden flex flex-col gap-1 p-2'
          aria-label="Toggle menu"
        >
          <div className={`w-6 h-0.5 bg-gray-300 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-gray-300 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-gray-300 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden fixed inset-0 z-40 transition-all duration-300 ${isMenuOpen
        ? 'opacity-100 pointer-events-auto'
        : 'opacity-0 pointer-events-none'
        }`}>
        <div className='absolute inset-0 bg-black/90'></div>
        <div className='relative flex flex-col items-center justify-center h-full gap-8'>
          <Link
            to='/'
            className='nav-item hover:text-primary text-gray-300 transition-all duration-200 tracking-wide text-shadow-lg text-2xl'
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            to='/about-us'
            className='nav-item hover:text-primary text-gray-300 transition-all duration-200 tracking-wide text-shadow-lg text-2xl'
            onClick={closeMenu}
          >
            About Us
          </Link>
          <Link
            to='/get-involved'
            className='nav-item hover:text-primary text-gray-300 transition-all duration-200 tracking-wide text-shadow-lg text-2xl'
            onClick={closeMenu}
          >
            Get Involved
          </Link>
          {/*
          <Link
            to='/gallery'
            className='nav-item hover:text-primary text-gray-300 transition-all duration-200 tracking-wide text-shadow-lg text-2xl'
            onClick={closeMenu}
          >
            Gallery
          </Link>
          */}
        </div>
      </div>
    </>
  );
}
