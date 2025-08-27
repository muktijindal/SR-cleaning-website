import Image from "next/image";
import React from "react";
import ServiceHeroImage from "../../../../public/images/servicehero.jpg";

export const HeroService = () => {
  return (
    <div className="w-full overflow-hidden">
      {/* Hero Image Section */}
      <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
        <Image
          src={ServiceHeroImage}
          fill
          className="object-cover"
          alt="Cleaning tools"
          priority
        />
        <div className="absolute inset-0  bg-opacity-10 flex items-center justify-center">
          <h2 className="text-white text-2xl md:text-4xl font-semibold px-4 text-center">
            Professional Cleaning Services
          </h2>
        </div>
      </div>

      {/* Content Section */}
      <section className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center justify-center px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <div className="w-full lg:w-[50%] max-w-2xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-tight sm:leading-snug md:leading-normal lg:leading-[67px] font-semibold mb-4 md:mb-6">
            So clean, visitors comment on the standards.
          </h1>
          <p className="text-gray-700 mb-6 md:mb-8 text-base sm:text-lg leading-relaxed">
            A clean workplace environment is essential. Our commercial cleaning
            service ensures your workspace remains spotless, safe, and inviting,
            with no disruption to your daily operations. Our highly trained
            cleaning staff, all employed locally, adhere to industry-leading
            standards and use eco-friendly, chemical-free products. We go beyond
            the basics to deliver exceptional results that exceed expectations,
            providing you with a work environment that reflects your commitment to
            quality and professionalism.
          </p>
          <button
            type="submit"
            className="w-full sm:w-auto bg-black text-white py-3 px-6 mt-3 rounded-lg font-medium hover:bg-gray-800 transition text-base"
          >
            Get In Touch
          </button>
        </div>
        
        <div className="w-full lg:w-[45%] max-w-xl">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="https://plus.unsplash.com/premium_photo-1667520405114-47d3677f966e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width={600}
              height={600}
              className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
              alt="Clean workspace"
            />
          </div>
        </div>
      </section>
    </div>
  );
};