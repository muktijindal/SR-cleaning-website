import Image from 'next/image'
import React from 'react'


export const HeroSection = () => {
  return (
  <div className='py-20 lg:py-20 relative flex items-center justify-center bg-black'>
    <div className=' bg-amber-300 relative w-[300px] h-[400px] top-[127px]'>
      <Image src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"   width={400}
      height={400}
      className="w-[400px] h-[400px] rounded-lg mx-auto mb-4 object-cover"
      />
    </div>
    <header className='text-center mt-10 md:mt-0 mx-10'>
    <h1 className='font-bold text-[28px] leading-[32px] md:leading-[40px] md:font-white text-white lg:text-[70px] lg:leading-[80px] px-2' >
    Hire cleaning masters
    <br />
    100% trained & verified
    </h1>
   
{/* India's most trusted digital cleaning platform */}

    <p className='text-sm md:text-base lg:text-2xl mt-3 px-5 lg:mt-10 max-w-3xl lg:leading-[36px] text-white/70  mx-auto'>
    Experience premium on-demand service for your own place
    <br/>
    <br/>
    — 
    <b>
    A SRA Cleaning Company
    </b>
    —
    </p>
    </header>
    <div className=' bg-amber-300 relative w-[300px] h-[400px] top-[127px]'>
      <Image src="https://plus.unsplash.com/premium_photo-1677234147127-36046f5fbe78?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"   width={400}
      height={400}
      className="w-[400px] h-[400px] rounded-lg mx-auto mb-4 object-cover"
      />
    </div>
  </div>
  )
}
