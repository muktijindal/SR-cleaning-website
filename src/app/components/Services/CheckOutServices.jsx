import Image from "next/image";
import React from "react";
import { FaCheck } from "react-icons/fa";

export const CheckOutServices = () => {
    const services = [
        "Cleaning and highrise dusting",
        "Furniture Dusting/Vacuuming",
        "Fixtures cleaning - A/C, Fan etc",
        "Wall marks cleaning (Washable paint)",
        "Floor scrubbing / Dry and Wet mop",
        "Carpet vacuuming",
      ];
  return (
    <div>
      <div className="bg-[#45c3d3] p-10  text-white text-center">
        <h1 className="text-4xl font-semibold">
          Check out some of our services!
        </h1>
      </div>
      <div className="flex justify-evenly items-center gap-20">
        <Image
          src="https://plus.unsplash.com/premium_photo-1664910117544-5a3eed7c6413?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={400}
          height={400}
          className=" w-[50%] h-[500px] object-cover "
          alt="Cleaning tools"
        />
        <div className="space-y-5 w-[50%]">
          <h2 className="text-3xl font-semibold">Make Better Living room</h2>
          <div className="space-y-4">
      {services.map((service, index) => (
        <div key={index} className="flex items-start gap-3">
          {/* Check Icon */}
          <FaCheck className="text-teal-400 mt-1" />

          {/* Service Text */}
          <p className="text-gray-500 text-base">{service}</p>
        </div>
      ))}
    </div>
        </div>
      </div>
      <div className="flex justify-evenly items-center gap-20">
     
        <div className="space-y-5 w-[50%] pl-50">
          <h2 className="text-3xl font-semibold ">Make Better Living room</h2>
          <div className="space-y-4">
      {services.map((service, index) => (
        <div key={index} className="flex items-start gap-3">
          {/* Check Icon */}
          <FaCheck className="text-teal-400 mt-1" />

          {/* Service Text */}
          <p className="text-gray-500 text-base">{service}</p>
        </div>
      ))}
    </div>
        </div>
        <Image
        src="https://images.unsplash.com/photo-1669101602124-f5b78895d91c?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={400}
          height={400}
          className=" w-[50%] h-[500px] object-cover "
          alt="Cleaning tools"
        />
      </div>
    </div>
  );
};
