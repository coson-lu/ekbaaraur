
import React from 'react';
import WaySection from '../components/WaySection';

export default function GetInvolved() {
  return (
    <div className=''>
      <div className='relative w-full h-[50vh] md:h-[75vh] mb-20 shadow-xl overflow-hidden flex align-middle items-center justify-center'>
        <div className='absolute inset-0 bg-[url(/banner.png)] bg-fixed bg-center bg-cover'></div>
        <div className='absolute inset-[-1px] bg-gradient-to-b from-transparent via-transparent to-gray-950'></div>
        <div className='z-20 flex flex-col gap-[3vh] items-center px-4'>
          <h2 className='font-sans text-xl md:text-2xl tracking-wider font-bold animate-title-top text-shadow-lg/100'>GET INVOLVED</h2>
          <div className="w-12 h-1 bg-primary mx-auto my-1"></div>
          <h2 className='font-jacques text-4xl md:text-7xl font-bold animate-title-bottom text-shadow-lg/100 text-center'>How to Help</h2>
        </div>
      </div>
      <div className='flex flex-col py-10 mb-[10vh] items-center gap-[3vh] px-4'>
        <h2 className='font-jacques text-2xl md:text-4xl font-bold w-full md:w-[60%] max-w-[800px] text-center leading-tight md:leading-11'>Your Impact Starts with a Closet</h2>
        <h2 className='font-[Open Sans] text-lg md:text-2xl w-full md:w-[70%] max-w-[1200px] text-center font-light tracking-wide leading-relaxed'>Around the world, countless people lack essentials while millions of usable clothes sit forgotten. At Ek Baar Aur, we turn donations into affordable fashion and life-changing support for those in need. Your unused clothes can help refugees, reduce waste, and fund critical aid. It starts small, but it starts with you.</h2>
      </div>
      <h2 className='font-jacques text-3xl md:text-5xl font-bold w-full text-center mb-[2.5vh] px-4'>Ways to Get Involved</h2>
      <p className='text-lg md:text-[1.375rem] leading-relaxed md:leading-[1.875rem] w-full text-center mb-[7vh] px-4'>Show your support by taking action today.</p>
      <WaySection
        imageSrc={'/stevejobless.webp'}
        title={'Donate'}
        description={'Imperdiet tristique velit vulputate, ornare, platea fringilla venenatis consequat pulvinar. Finibus ac est leo porta vitae condimentum morbi elementum nullam. Sed id, enim nisl a ipsum nulla mi eget nisl. semper nascetur pellentesque rhoncus.'}
      />
      <WaySection
        imageSrc={'/stevejobless.webp'}
        title={'Attend an Event'}
        description={'Imperdiet tristique velit vulputate, ornare, platea fringilla venenatis consequat pulvinar. Finibus ac est leo porta vitae condimentum morbi elementum nullam. Sed id, enim nisl a ipsum nulla mi eget nisl. semper nascetur pellentesque rhoncus.'}
        rev={true}
      />
      <WaySection
        imageSrc={'/stevejobless.webp'}
        title={'Volunteer'}
        description={'Imperdiet tristique velit vulputate, ornare, platea fringilla venenatis consequat pulvinar. Finibus ac est leo porta vitae condimentum morbi elementum nullam. Sed id, enim nisl a ipsum nulla mi eget nisl. semper nascetur pellentesque rhoncus.'}
        rev={false}
      />
      <WaySection
        imageSrc={'/stevejobless.webp'}
        title={'Follow Us'}
        description={'Imperdiet tristique velit vulputate, ornare, platea fringilla venenatis consequat pulvinar. Finibus ac est leo porta vitae condimentum morbi elementum nullam. Sed id, enim nisl a ipsum nulla mi eget nisl. semper nascetur pellentesque rhoncus.'}
        rev={true}
      />
    </div>
  );
}
