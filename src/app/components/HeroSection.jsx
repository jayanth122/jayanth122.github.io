"use client";
import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className='lg:py-16'>
      <div className='grid grid-cols-1 sm:grid-cols-12'>
        <div className='col-span-12 place-self-center mb-10'> 
          <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative overflow-clip mx-auto'>
            <Image src="/images/Hi.png"
              alt='Hi Memoji'
              className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
              width={300}
              height={300}
            />
          </div>
        </div>
        
        {/* Text container */}
        <div className='col-span-12 place-self-center text-center'>
          <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold' >
            <span className='text-white bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-red-400'>Hello, I&apos;m{" "}</span><br/>
            <span className='text-white bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-red-400'>Jayanth Chennupati</span>
          </h1>
        </div>
      </div>
    </section>
  )
}

export default HeroSection;
