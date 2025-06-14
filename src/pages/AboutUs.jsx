import React from 'react';
import ProfileCard from '../components/ProfileCard';

export default function AboutUs() {
  return (
    <div className=''>
      <div className='relative w-full h-[50vh] md:h-[70vh] mb-20 shadow-xl overflow-hidden flex align-middle items-center justify-center'>
        <div className='absolute inset-0 bg-[url(/banner.png)] brightness-40 bg-attachment-scroll bg-[calc(50%+2vw)_calc(50%-2vh)] bg-cover'></div>
        <div className='absolute inset-[-1px] bg-gradient-to-b from-transparent via-transparent to-gray-950'></div>
        <div className='z-20 flex flex-col gap-[3vh] items-center px-4'>
          <h2 className='font-sans text-xl md:text-2xl tracking-wider font-bold animate-title-top text-shadow-lg/100'>ABOUT US</h2>
          <div className="w-12 h-1 bg-primary mx-auto my-1"></div>
          <h2 className='font-jacques text-4xl md:text-7xl font-bold animate-title-bottom text-shadow-lg/100 text-center'>Who We Are</h2>
        </div>
      </div>
      <div className='flex flex-col py-10 mb-10 items-center gap-[3vh] px-4'>
        <h2 className='font-jacques text-2xl md:text-4xl font-bold w-full md:w-[60%] max-w-[800px] text-center leading-tight md:leading-11'>Ek Baar Aur is a student-led nonprofit turning overstocked closets into global support.</h2>
        <h2 className='font-[Open Sans] text-lg md:text-2xl w-full md:w-[70%] max-w-[1200px] text-center font-light tracking-wide leading-relaxed'>Founded by three high school students, Ek Baar Aur collects and resells donated clothes and toys to raise funds for humanitarian causes. Through partnerships with organizations like ICNA, we support refugees, reduce fashion waste, and direct profits to vetted charities worldwide, creating impact through every item donated and every item sold.</h2>
      </div>
      <div className='flex flex-col mb-20 align-middle text-gray-300 justify-center gap-8 md:gap-10 w-full bg-stone-700 py-[7vh] px-4'>
        <h3 className='text-center text-2xl md:text-4xl font-jacques font-bold'>How We Work</h3>
        <div className="w-12 h-1 bg-primary mx-auto my-1"></div>
        <div className='flex flex-col md:flex-row gap-8 md:gap-[5vh] items-center md:items-baseline mt-1 tracking-wide text-center align-middle justify-center'>
          <div className='gap-[2vh] w-full md:w-[20vw] max-w-[300px] flex flex-col align-middle justify-center text-center'>
            <h1 className='text-xl md:text-2xl'>1. Collect Donations</h1>
            <h1 className='font-light text-base md:text-xl'>We gather gently-used clothes from local communities to reduce waste and support charitable causes.</h1>
          </div>
          <div className='gap-[2vh] w-full md:w-[20vw] max-w-[300px] flex flex-col align-middle justify-center text-center'>
            <h1 className='text-xl md:text-2xl'>2. Sort and Clean</h1>
            <h1 className='font-light text-base md:text-xl'>Volunteers inspect, wash, and prepare clothing to ensure quality and dignity for all recipients.</h1>
          </div>
          <div className='gap-[2vh] w-full md:w-[20vw] max-w-[300px] flex flex-col align-middle justify-center text-center'>
            <h1 className='text-xl md:text-2xl'>3. Affordable Sales</h1>
            <h1 className='font-light text-base md:text-xl'>We sell donated clothes at low prices through events, making fashion more accessible and sustainable.</h1>
          </div>
          <div className='gap-[2vh] w-full md:w-[20vw] max-w-[300px] flex flex-col align-middle justify-center text-center'>
            <h1 className='text-xl md:text-2xl'>4. Fund Global Aid</h1>
            <h1 className='font-light text-base md:text-xl'>Profits go directly to vetted charities supporting refugees and underserved communities worldwide.</h1>
          </div>
        </div>
      </div>
      <div className='flex flex-col mb-10 items-center gap-[3vh] px-4'>
        <h2 className='font-jacques mb-[2vh] text-2xl md:text-4xl font-bold w-full md:w-[60%] text-center leading-tight md:leading-11'>The Executive Team</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-[5vh] justify-items-center'>
          <ProfileCard
            imageSrc={'/pavni.png'}
            name='Pavni Jaidka Bagga'
            title='Chief Executive Officer'
          />
          <ProfileCard
            imageSrc={'/ambika.png'}
            name='Ambika Agarwal'
            title='Chief Operating Officer'
          />
          <ProfileCard
            imageSrc={'/baljit.png'}
            name='Baljit Singh Bal'
            title='Chief Financial Officer'
          />
          <ProfileCard
            imageSrc={'/shray.png'}
            name='Shray Bagga'
            title='Director of Programs & Outreach'
          />
          <ProfileCard
            imageSrc={'/aarna.png'}
            name='Aarna Bahuguna'
            title='Director of Operations & Photography'
          />
          <ProfileCard
            imageSrc={'/mehtaab.png'}
            name='Mehtaab Bal'
            title='Director of Fundraising & Videography'
          />
        </div>
      </div>
    </div>
  );
}
