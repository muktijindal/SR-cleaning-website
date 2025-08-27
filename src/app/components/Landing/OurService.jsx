"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const teamMembers = [
  {
    name: "Abhiram",
    role: "UI/UX designer @SRA",
    image: "https://www.premiersupportservices.co.uk/static/5507820ddfbfc2a7326000d243c55037/0acc8/DOC_Vax_2-scaled-square-e1733313446791.webp",
    socials: {
      twitter: "#",
      linkedin: "https://www.linkedin.com/company/SRA/",
    },
  },
  {
    name: "Shanmukh",
    role: "AI Researcher @SRA",
    image: "https://www.premiersupportservices.co.uk/static/db2b176b2fb99ee108f329fe57e61346/f7be8/IMG_0384-scaled.webp",
    socials: {
      twitter: "#",
      linkedin: "https://www.linkedin.com/company/SRA/",
    },
  },
  {
    name: "Akshay",
    role: "Developer @SRA",
    image: "https://plus.unsplash.com/premium_photo-1667520405114-47d3677f966e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    socials: {
      twitter: "#",
      linkedin: "https://www.linkedin.com/company/SRA/",
    },
  },
  {
    name: "Charan",
    role: "Product designer @SRA",
    image: "https://plus.unsplash.com/premium_photo-1664910244290-867148725f01?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // socials: {
    //   twitter: "#",
    //   linkedin: "https://www.linkedin.com/company/SRA/",
    // },
  },
  {
    name: "Rakshit",
    role: "Documentation Researcher",
    image: "https://plus.unsplash.com/premium_photo-1682142629967-998babaee016?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // socials: {
    //   twitter: "#",
    //   linkedin: "https://www.linkedin.com/company/SRA/",
    // },
  },
];

export const OurService = () => {
//   const [navigation, setNavigation] = useState({ prevEl: null, nextEl: null });
//   const prevRef = useRef(null);
//   const nextRef = useRef(null);

//   useEffect(() => {
//     setNavigation({
//       prevEl: prevRef.current,
//       nextEl: nextRef.current,
//     });
//   }, []);

  return (
    <div>
            <section className="pl-16 bg-white text-center">
      <button className="text-white bg-black py-2 px-4 sm:py-[10px] sm:px-[20px] rounded-xl text-sm sm:text-base">
        Our Services
      </button>

      <div className="flex flex-col items-center justify-center text-center">
        <h2 className="text-[56px] leading-[67px] font-semibold mb-6 pt-10">
          Simple Steps to a Cleaner Home
        </h2>
        <p className="text-gray-700 mb-8 text-lg leading-[27px] w-[60%] mx-auto">
          Cleanz is well known and most trusted name in home cleaning service
          company in India.
        </p>
      </div>
      </section>

       <div className="relative text-center ">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={45}
        //   navigation={navigation}
          autoplay={{
            delay: 500, // 2.5s delay
            disableOnInteraction: true, // keeps autoplay even after manual navigation
          }}
          speed={1200}
          loop={true}
          breakpoints={{
            480: {
              slidesPerView: 1.3,
              centeredSlides: false,
            },
            640: {
              slidesPerView: 1.5,
              centeredSlides: false,
            },
            768: {
              slidesPerView: 3.5,
              spaceBetween: 15,
              centeredSlides: false,
            },
            1024: {
              slidesPerView: 3.5,
              spaceBetween: 12,
              centeredSlides: false,
            },
          }}
        >
          {teamMembers.map((member, index) => (
            <SwiperSlide key={index}>
              <div className="border border-none p-2 rounded-lg shadow-sm hover:shadow-lg transition ">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-[400px] h-[400px] rounded-lg mx-auto mb-4 object-cover"
                />
                <h4 className="text-[20px] leading-[10px] font-bold text-black">
                  {member.name}
                </h4>
              
                {/* <div className="flex justify-center space-x-6 text-black">
                  <a
                    href={member.socials.twitter}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaTwitter className="w-[29px] h-[29px]" />
                  </a>
                  <a
                    href={member.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaLinkedin className="w-[29px] h-[29px]" />
                  </a>
                </div> */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        {/* <div className="flex justify-center mt-8 gap-4">
          <button ref={prevRef} className="p-2 rounded-full text-black">
            <ChevronLeft />
          </button>
          <button ref={nextRef} className="p-2 rounded-full text-black">
            <ChevronRight />
          </button>
        </div> */}
      </div>


    </div>

     
  
  );
};
