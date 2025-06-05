import React from 'react';
import ProfileCard from '../components/ProfileCard';

export default function AboutUs() {
  return (
    <div className=''>
      <div className='relative w-full h-[75vh] mb-20 shadow-xl overflow-hidden flex align-middle items-center justify-center'>
        <div className='absolute inset-0 bg-[url(/banner.png)] bg-fixed bg-center bg-contain'></div>
        <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black'></div>
        <div className='z-20 flex flex-col gap-[3vh] items-center'>
          <h2 className='font-sans text-2xl tracking-wider font-bold text-shadow-lg/100'>ABOUT US</h2>
          <div className="w-12 h-1 bg-primary mx-auto my-1"></div>
          <h2 className='font-jacques text-7xl font-bold text-shadow-lg/100'>Who We Are</h2>
        </div>
      </div>
      <div className='flex flex-col py-10 mb-10 items-center gap-[3vh]'>
        <h2 className='font-jacques text-4xl font-bold w-[60%] max-w-[800px] text-center leading-11'>Ek Baar Aur is a student-led nonprofit turning overstocked closets into global support.</h2>
        <h2 className='font-[Open Sans] text-2xl w-[70%] max-w-[1200px] text-center font-light tracking-wide'>Founded by three high school students, Ek Baar Aur collects and resells donated clothes and toys to raise funds for humanitarian causes. Through partnerships with organizations like ICNA, we support refugees, reduce fashion waste, and direct profits to vetted charities worldwide, creating impact through every item donated and every item sold.</h2>
      </div>
      <div className='flex flex-col mb-20 align-middle text-gray-300 justify-center gap-10 w-full bg-stone-700 py-[7vh]'>
        <h3 className='text-center text-4xl font-jacques font-bold'>How We Work</h3>
        <div className="w-12 h-1 bg-primary mx-auto my-1"></div>
        <div className='flex gap-[5vh] items-baseline mt-1 tracking-wide text-center align-middle justify-center'>
          <div className='gap-[2vh] w-[20vw] flex flex-col align-middle justify-center text-center'>
            <h1 className='text-2xl'>1. Collect Donations</h1>
            <h1 className='font-light text-xl'>We gather gently-used clothes from local communities to reduce waste and support charitable causes.</h1>
          </div>
          <div className='gap-[2vh] w-[20vw] flex flex-col align-middle justify-center text-center'>
            <h1 className='text-2xl'>2. Sort and Clean</h1>
            <h1 className='font-light text-xl'>Volunteers inspect, wash, and prepare clothing to ensure quality and dignity for all recipients.</h1>
          </div>
          <div className='gap-[2vh] w-[20vw] flex flex-col align-middle justify-center text-center'>
            <h1 className='text-2xl'>3. Affordable Sales</h1>
            <h1 className='font-light text-xl'>We sell donated clothes at low prices through events, making fashion more accessible and sustainable.</h1>
          </div>
          <div className='gap-[2vh] w-[20vw] flex flex-col align-middle justify-center text-center'>
            <h1 className='text-2xl'>4. Fund Global Aid</h1>
            <h1 className='font-light text-xl'>Profits go directly to vetted charities supporting refugees and underserved communities worldwide.</h1>
          </div>
        </div>
      </div>
      <div className='flex flex-col mb-10 items-center gap-[3vh]'>
        <h2 className='font-jacques mb-[2vh] text-4xl font-bold w-[60%] text-center leading-11'>The Executive Team</h2>
        <div className='flex gap-[5vh] justify-center items-baseline flex-col'>
          <div className='flex gap-[5vh] justify-center items-baseline flex-row'>
            <ProfileCard
              imageSrc={'/stevejobless.webp'}
              name='Steve Jobless'
              title='Founder'
            />
            <ProfileCard
              imageSrc={'/stevejobless.webp'}
              name='Steve Jobless'
              title='Founder'
            />
            <ProfileCard
              imageSrc={'/stevejobless.webp'}
              name='Steve Jobless'
              title='Founder'
            />
          </div>
          <div className='flex gap-[5vh] justify-center items-baseline flex-row'>
            <ProfileCard
              imageSrc={'/stevejobless.webp'}
              name='Steve Jobless'
              title='Founder'
            />
            <ProfileCard
              imageSrc={'/stevejobless.webp'}
              name='Steve Jobless'
              title='Founder'
            />
            <ProfileCard
              imageSrc={'/stevejobless.webp'}
              name='Steve Jobless'
              title='Founder'
            />
          </div>
          <div className='flex gap-[5vh] justify-center items-baseline flex-row'>
            <ProfileCard
              imageSrc={'/stevejobless.webp'}
              name='Steve Jobless'
              title='Founder'
            />
            <ProfileCard
              imageSrc={'/stevejobless.webp'}
              name='Steve Jobless'
              title='Founder'
            />
            <ProfileCard
              imageSrc={'/stevejobless.webp'}
              name='Steve Jobless'
              title='Founder'
            />
          </div>
        </div>
      </div>
    </div>
  );
}


