import React from "react";

function WaySection({ imageSrc, title, description, rev }) {
  return (
    <div className={`flex justify-center items-center gap-[5.5vw] mb-15 ${rev ? 'flex-row-reverse' : 'flex-row'}`} >
      <img src={imageSrc} className='w-[40vw] grayscale max-w-[650px] pb-[3.5vh]' />
      <div className='flex flex-col gap-6 w-[38vw] max-w-[560px]'>
        <h2 className='font-jacques text-4xl font-bold'>{title}</h2>
        <div className="w-12 h-1 bg-primary"></div>
        <h4 className='text-xl tracking-wide leading-7.5 text-gray-200'>{description}</h4>
      </div>
    </div >
  );
}

export default WaySection;

