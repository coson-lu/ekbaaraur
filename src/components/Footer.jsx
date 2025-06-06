import React from 'react';
import { FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function Footer() {
  return (
    <div className='flex flex-col md:flex-row mt-10 text-center justify-center md:justify-around p-4 md:p-6 border-t-1 border-gray-500 bg-gray-950 items-center font-sans gap-4 md:gap-0'>
      <p className='text-sm md:text-base order-2 md:order-1 leading-relaxed'>
        © Copyright 2025 Ek Baar Aur. All rights reserved.
        <span className='block md:inline md:before:content-["|"] md:before:mx-2'>
          Website by Coson Lu
        </span>
      </p>
      <div className='flex justify-center items-center gap-6 md:gap-6 order-1 md:order-2'>
        <a
          href='https://www.youtube.com/channel/UC3tXJ2VqxCipwQFVbdSiYrA'
          className='text-[24px] md:text-[20px] hover:text-red-500 transition-colors p-2'
          aria-label="YouTube"
        >
          <FaYoutube />
        </a>
        <a
          href='https://www.instagram.com/ekbaaraur21/'
          className='text-[24px] md:text-[20px] hover:text-pink-500 transition-colors p-2'
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href='https://www.facebook.com/people/Ek-Baar-Aur/pfbid02mdX3fkUXwhCoURbScDEaAp3QvnFxJ8d3atAFdFaApJeDPhZQJiLn49cqiMQqVhkUl/'
          className='text-[24px] md:text-[20px] hover:text-blue-500 transition-colors p-2'
          aria-label="Facebook"
        >
          <FaFacebook />
        </a>
        <a
          href='mailto:ekbaaraur2021@gmail.com'
          className='text-[24px] md:text-[20px] hover:text-red-400 transition-colors p-2'
          aria-label="Email"
        >
          <SiGmail />
        </a>
      </div>
    </div>
  );
}

