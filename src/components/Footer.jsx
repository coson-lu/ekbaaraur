import React from 'react';
import { FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa";
import { SiGmail } from "react-icons/si";


export default function Footer() {
  return (
    <div className='flex mt-10 text-center justify-around p-4 border-t-1 border-gray-500 bg-gray-950 items-center font-sans'>
      <p>© Copyright 2025 Ek Baar Aur. All rights reserved. | Website by Coson Lu</p>
      <div className='flex justify-center items-center gap-6'>
        <a href='https://www.youtube.com/channel/UC3tXJ2VqxCipwQFVbdSiYrA' className='text-[20px]'><FaYoutube /></a>
        <a href='https://www.instagram.com/ekbaaraur21/' className='text-[20px]'><FaInstagram /></a>
        <a href='https://www.facebook.com/people/Ek-Baar-Aur/pfbid02mdX3fkUXwhCoURbScDEaAp3QvnFxJ8d3atAFdFaApJeDPhZQJiLn49cqiMQqVhkUl/' className='text-[20px]'><FaFacebook /></a>
        <a href='mailto:ekbaaraur2021@gmail.com' className='text-[20px]'><SiGmail /></a>
      </div>
    </div>
  );
}
