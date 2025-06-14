import React from "react";

function WaySection({ imageSrc, title, description, rev }) {
  return (
    <div className={`flex flex-col md:flex-row justify-center items-center gap-6 md:gap-[5.5vw] mb-15 px-4 md:px-0 ${rev ? 'md:flex-row-reverse' : 'md:flex-row'}`} >
      <img src={imageSrc} className='w-full max-w-[500px] md:w-[40vw] md:max-w-[650px] pb-4 md:pb-[3.5vh] aspect-[4/3] object-cover' />
      <div className='flex flex-col gap-4 md:gap-6 w-full md:w-[38vw] max-w-[560px]'>
        <h2 className='font-jacques text-3xl md:text-4xl font-bold text-center md:text-left'>{title}</h2>
        <div className="w-12 h-1 bg-primary mx-auto md:mx-0"></div>
        <h4 className='text-lg md:text-xl tracking-wide leading-7 md:leading-7.5 text-gray-200 text-center md:text-left'>{description}</h4>
      </div>
    </div >
  );
}

export default WaySection;
