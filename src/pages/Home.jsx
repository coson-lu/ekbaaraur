import React from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";


export default function Home() {
  return (
    <div className="">
      <div className='relative w-full h-[50vh] md:h-[70vh] mb-20 shadow-xl overflow-hidden flex align-middle items-center justify-center'>
        <div className='absolute inset-0 bg-[url(/banner.png)] brightness-50 bg-fixed bg-center bg-cover' style={{ backgroundPosition: 'center top' }}></div>
        <div className='absolute inset-[-1px] bg-gradient-to-b from-transparent via-transparent to-gray-950'></div>
      </div>
      <div className='flex flex-col md:flex-row justify-center gap-6 md:gap-[4.5vw] mb-17.5 px-4 md:px-0'>
        <div className='flex flex-col gap-6 w-full md:w-[38vw] max-w-[560px]'>
          <h2 className='font-jacques text-[1.55rem] md:text-4xl font-bold'>Give Clothes a Second Life,<br />Give People a Second Chance</h2>
          <h4 className='text-lg md:text-xl tracking-wide leading-7.5 text-gray-200'>We turn your unused clothes into affordable fashion, support refugees with essentials, and fund life-changing work through global charities.</h4>
        </div>
        <div className='flex w-full md:w-[38vw] flex-col max-w-[560px]'>
          <div className='flex flex-col gap-2.5'>
            <Link to='/about-us' className='group inline-flex items-center font-bold text-xl md:text-2xl text-primary tracking-wide transition-all'>
              About Us
              <MdOutlineKeyboardArrowRight className='ml-1 transform transition-transform duration-300 group-hover:translate-x-1' />
            </Link>
            <h4 className='text-base md:text-lg tracking-wide'>We are a student-led nonprofit turning donated clothes and toys into affordable goods and critical support for refugees and global charities.</h4>
          </div>
          <div className='my-8 md:my-12 h-0.5 border-t-0 border-[0.5px] border-gray-400 bg-neutral-700'></div>
          <div className='flex flex-col gap-2.5'>
            <Link to='/get-involved' className='group inline-flex items-center font-bold text-xl md:text-2xl text-primary tracking-wide transition-all'>
              Get Involved
              <MdOutlineKeyboardArrowRight className='ml-1 transform transition-transform duration-300 group-hover:translate-x-1' />
            </Link>
            <h4 className='text-base md:text-lg tracking-wide'>Make an impact by donating, volunteering, attending our events, or spreading the word on social media — every action helps drive real change.</h4>
          </div>
        </div>
      </div>
      <div className='flex flex-col mb-17.5 align-middle text-gray-300 font-bold justify-center gap-8 md:gap-10 w-full bg-stone-700 py-[7vh] px-4'>
        <h3 className='text-center text-xl md:text-2xl font-jacques font-bold'>Ek Baar Aur's Impact to Date</h3>
        <div className='flex flex-col md:flex-row gap-8 md:gap-[20vh] align-middle justify-center'>
          <div className='font-jacques gap-[2vh] flex flex-col align-middle justify-center text-center'>
            <h1 className='text-4xl md:text-5xl'>$16,000+</h1>
            <h1 className='text-lg md:text-xl'>Raised Since 2021</h1>
          </div>
          <div className='font-jacques gap-[2vh] flex flex-col align-middle justify-center text-center'>
            <h1 className='text-4xl md:text-5xl'>1000+</h1>
            <h1 className='text-lg md:text-xl'>Poeple Reached</h1>
          </div>
          <div className='font-jacques gap-[2vh] flex flex-col align-middle justify-center text-center'>
            <h1 className='text-4xl md:text-5xl'>15</h1>
            <h1 className='text-lg md:text-xl'>Events Held</h1>
          </div>
        </div>
      </div>
      <div className='flex flex-col md:flex-row justify-center items-center gap-6 md:gap-[4.5vw] mb-15 px-4 md:px-0'>
        <div className='flex flex-col gap-6 w-full md:w-[38vw] max-w-[560px]'>
          <h2 className='font-jacques text-3xl md:text-4xl font-bold'>What we're currently working on</h2>
          <h4 className='text-lg md:text-xl tracking-wide leading-7.5 text-gray-200'>Ek Baar Aur is collecting lightly-used or unused toys for Afghan refugees in Sacramento, in partnership with ICNA. Donations support displaced families and are distributed through local aid efforts. Donate now!</h4>
        </div>
        <img src='/poster.png' className='w-full max-w-[400px] md:w-[30vw] md:max-w-[450px]' />
      </div>
    </div>
  );
}
