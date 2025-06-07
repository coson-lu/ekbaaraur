import React from 'react';
import WaySection from '../components/WaySection';

export default function GetInvolved() {
  return (
    <div className=''>
      <div className='relative w-full h-[50vh] md:h-[70vh] mb-20 shadow-xl overflow-hidden flex align-middle items-center justify-center'>
        <div className='absolute inset-0 bg-[url(/banner.png)] bg-center bg-cover' style={{ backgroundPosition: 'center top' }}></div>
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
        description={'Have clothes or toys you no longer use? Give them a second life by donating to Ek Baar Aur. We accept lightly-used items that we clean, sort, and sell at reduced prices. Every donation reduces waste and funds vital support for refugees and global aid organizations. Your unused items can become someone else’s essentials.'}
      />
      <WaySection
        imageSrc={'/stevejobless.webp'}
        title={'Attend an Event'}
        description={'Support our mission by showing up. At our pop-up events, you can shop affordable, donated fashion while directly contributing to meaningful change. All proceeds go to vetted charities and aid efforts. Attending is more than just shopping—it’s taking part in a cycle of impact.'}
        rev={true}
      />
      <WaySection
        imageSrc={'/stevejobless.webp'}
        title={'Volunteer'}
        description={'Behind every item we sell is the work of dedicated volunteers. Help us sort, clean, organize, or run events. Whether you give a few hours or take on a larger role, your time directly powers our ability to operate, grow, and reach more communities in need.'}
        rev={false}
      />
      <WaySection
        imageSrc={'/stevejobless.webp'}
        title={'Follow Us'}
        description={
          <>
            Awareness drives action. By following us on{" "}
            <a href="https://www.youtube.com/channel/UC3tXJ2VqxCipwQFVbdSiYrA" className="text-primary" target="_blank">Instagram</a>,{" "}
            <a href="https://www.instagram.com/ekbaaraur21/" className="text-primary" target="_blank">YouTube</a>,{" "}
            <a href="https://www.facebook.com/people/Ek-Baar-Aur/pfbid02mdX3fkUXwhCoURbScDEaAp3QvnFxJ8d3atAFdFaApJeDPhZQJiLn49cqiMQqVhkUl/" className="text-primary" target="_blank">Facebook</a>, and{" "}
            <a href="https://www.tiktok.com/@ek.baar.aur?_t=ZP-8wzsC6EwiPG&_r=1" className="text-primary" target="_blank">Tik Tok</a>,
            you help amplify our mission. Stay informed about upcoming events, learn more about our impact, and help spread the word to others who want to get involved. Your voice online strengthens our reach.
          </>
        }
        rev={true}
      />
    </div>
  );
}
