import Image from 'next/image'
import React from 'react'

export const HeroSection = () => {
  return (
    <div className="py-20 lg:py-20 relative flex flex-col lg:flex-row items-center justify-center bg-black">
      {/* Left Image */}
      <div className="bg-amber-300 relative w-[250px] h-[300px] sm:w-[280px] sm:h-[360px] lg:w-[300px] lg:h-[400px] lg:top-[127px] mb-8 lg:mb-0">
        <Image
          src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={400}
          height={400}
          className="w-full h-full rounded-lg mx-auto object-cover"
          alt="Cleaning worker"
        />
      </div>

      {/* Text */}
      <header className="text-center mt-5 md:mt-0 mx-5 lg:mx-10">
        <h1 className="font-bold text-[22px] leading-[28px] sm:text-[28px] sm:leading-[32px] md:leading-[40px] text-white lg:text-[70px] lg:leading-[80px] px-2">
          Hire cleaning masters
          <br />
          100% trained &amp; verified
        </h1>

        <p className="text-sm sm:text-base lg:text-2xl mt-3 px-2 sm:px-5 lg:mt-10 max-w-3xl lg:leading-[36px] text-white/70 mx-auto">
          Experience premium on-demand service for your own place
          <br />
          <br />— <b>A SRA Cleaning Company</b> —
        </p>
      </header>

      {/* Right Image */}
      <div className="bg-amber-300 relative w-[250px] h-[300px] sm:w-[280px] sm:h-[360px] lg:w-[300px] lg:h-[400px] lg:top-[127px] mt-8 lg:mt-0">
        <Image
          src="https://plus.unsplash.com/premium_photo-1677234147127-36046f5fbe78?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={400}
          height={400}
          className="w-full h-full rounded-lg mx-auto object-cover"
          alt="Cleaning tools"
        />
      </div>
    </div>
  )
}
