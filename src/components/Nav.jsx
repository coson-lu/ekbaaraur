import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <div className='flex z-50 justify-around h-17 border-b-[1px] border-gray-500 gap-16 backdrop-blur items-center text-white font-sans fixed w-full top-0'>
      <Link to='/' className='flex items-center gap-3'>
        <img src='logo.png' className='w-10' />
        <h3 className='font-bold text-[20px] text-primary font-jacques'>Ek Baar Aur</h3>
      </Link>
      <div className='flex gap-10'>
        <Link to='/' className='nav-item hover:text-primary text-gray-300 transition-all duration-200 tracking-wide text-shadow-lg'>Home</Link>
        <Link to='/about-us' className='nav-item hover:text-primary text-gray-300 transition-all duration-200 tracking-wide text-shadow-lg'>About Us</Link>
        <Link to='/get-involved' className='nav-item hover:text-primary text-gray-300 transition-all duration-200 tracking-wide text-shadow-lg'>Get Involved</Link>
        <Link to='/gallery' className='nav-item hover:text-primary text-gray-300 transition-all duration-200 tracking-wide text-shadow-lg'>Gallery</Link>
      </div>
    </div>
  );
}



