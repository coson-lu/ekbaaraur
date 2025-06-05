import React from 'react';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowRight, MdOutlineKeyboardArrowRight } from "react-icons/md";


export default function Home() {
  return (
    <div className="">
      <div class="relative w-full h-[75vh] mb-20 shadow-xl overflow-hidden">
        <div class="absolute inset-0 bg-[url(/banner.png)] bg-fixed bg-center bg-contain"></div>
        <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
      </div>
      <div className='flex justify-center gap-[4.5vw] mb-17.5'>
        <div className='flex flex-col gap-6 w-[38vw] max-w-[560px]'>
          <h2 className='font-jacques text-4xl font-bold'>Give Clothes a Second Life,<br />Give People a Second Chance</h2>
          <h4 className='text-xl tracking-wide leading-7.5 text-gray-200'>We turn your unused clothes into affordable fashion, support refugees with essentials, and fund life-changing work through global charities.</h4>
        </div>
        <div className='flex w-[38vw] flex-col max-w-[560px]'>
          <div className='flex flex-col gap-2.5'>
            <Link to='/about-us' className='group inline-flex items-center font-bold text-2xl text-primary tracking-wide transition-all'>
              About Us
              <MdOutlineKeyboardArrowRight className='ml-1 transform transition-transform duration-300 group-hover:translate-x-1' />
            </Link>
            <h4 className='text-lg tracking-wide'>In turpis, condimentum risus luctus imperdiet nulla dui, tempor dui. Et sagittis dui eget ut aliquet diam, lacus nunc luctus. Etiam arcu risus amet vulputate sed dictum ac leo molestie. </h4>
          </div>
          <div className='my-12 h-0.5 border-t-0 border-[0.5px] border-gray-400 bg-neutral-700'></div>
          <div className='flex flex-col gap-2.5'>
            <Link to='/get-involved' className='group inline-flex items-center font-bold text-2xl text-primary tracking-wide transition-all'>
              Get Involved
              <MdOutlineKeyboardArrowRight className='ml-1 transform transition-transform duration-300 group-hover:translate-x-1' />
            </Link>
            <h4 className='text-lg tracking-wide'>In turpis, condimentum risus luctus imperdiet nulla dui, tempor dui. Et sagittis dui eget ut aliquet diam, lacus nunc luctus. Etiam arcu risus amet vulputate sed dictum ac leo molestie. </h4>
          </div>
        </div>
      </div>
      <div className='flex flex-col mb-17.5 align-middle text-gray-300 font-bold justify-center gap-10 w-full bg-stone-700 py-[7vh]'>
        <h3 className='text-center text-2xl font-jacques font-bold'>Ek Baar Aur's Impact to Date</h3>
        <div className='flex gap-[20vh] align-middle justify-center'>
          <div className='font-jacques gap-[2vh] flex flex-col align-middle justify-center text-center'>
            <h1 className='text-5xl'>$16,000+</h1>
            <h1 className='text-xl'>Raised Since 2021</h1>
          </div>
          <div className='font-jacques gap-[2vh] flex flex-col align-middle justify-center text-center'>
            <h1 className='text-5xl'>1000+</h1>
            <h1 className='text-xl'>Poeple Reached</h1>
          </div>
          <div className='font-jacques gap-[2vh] flex flex-col align-middle justify-center text-center'>
            <h1 className='text-5xl'>15</h1>
            <h1 className='text-xl'>Events Held</h1>
          </div>
        </div>
      </div>
      <div className='flex justify-center items-center gap-[4.5vw] mb-15'>
        <img src='/poster.png' className='w-[30vw] max-w-[450px]' />
        <div className='flex flex-col gap-6 w-[38vw] max-w-[560px]'>
          <h2 className='font-jacques text-4xl font-bold'>What we're currently working on</h2>
          <h4 className='text-xl tracking-wide leading-7.5 text-gray-200'>Ek Baar Aur is collecting lightly-used or unused toys for Afghan refugees in Sacramento, in partnership with ICNA. Donations support displaced families and are distributed through local aid efforts. Donate now!</h4>
        </div>
      </div>
    </div>
  );
}


