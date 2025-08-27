import Image from "next/image";
import React from "react";
import ServiceHeroImage from "../../../../public/images/servicehero.jpg";

export const HeroService = () => {
  return (
    <div>
      {/* <div className='justify-content-center align-items-end align-items-md-center h-100 text-center row'>
<span className='display: inline-block; transform: translate(0px, 0%); translate: none; rotate: none; scale: none;'>
Professional
</span>
        </div> */}
      <Image
        src={ServiceHeroImage}
        width={400}
        height={400}
        className="w-full h-[500px] object-cover"
        alt="Cleaning tools"
      />

      <section  className="flex  gap-30 items-center justify-center ">
        <div className="w-[50%] pl-10">
        <h1 className="text-[56px] leading-[67px] font-semibold mb-6 ">So clean, visitors comment on the standards.</h1>
        <span className="text-gray-700 mb-8 text-lg leading-[27px] w-[60%] mx-auto">  
          A clean workplace environment is essential. Our commercial cleaning
          service ensures your workspace remains spotless, safe, and inviting,
          with no disruption to your daily operations. Our highly trained
          cleaning staff, all employed locally, adhere to industry-leading
          standards and use eco-friendly, chemical-free products. We go beyond
          the basics to deliver exceptional results that exceed expectations,
          providing you with a work environment that reflects your commitment to
          quality and professionalism.
        </span>
<br/>
        <button
          type="submit"
          className="w-[20%] bg-black text-white py-2 mt-5 rounded-lg font-medium hover:bg-gray-800 transition text-sm sm:text-base"
        >
          Get In Touch
        </button>
        </div>
        <div className="p-10 rounded-2xl ">
        <Image
        src="https://plus.unsplash.com/premium_photo-1667520405114-47d3677f966e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        width={400}
        height={400}
        className=" h-[500px] object-cover rounded-2xl"
        alt="Cleaning tools"
      />
        </div>

      </section>
    </div>
  );
};
