"use client"
import React, { useState } from "react";

export const FAQ = () => {
  const faqs = [
    {
      question: "Can I hire a driver for a duration shorter than two hours?",
      answer:
        "Yes, you can! However, our minimum billing duration is two hours. If you need a driver for less than that, charges will still apply for two hours.",
    },
    {
      question: "How can I book a driver?",
      answer:
        "You can easily book a driver through our website or mobile app. Just select the time, duration, and location, and confirm your booking.",
    },
    {
      question: "Are your drivers background verified?",
      answer:
        "Absolutely! All our drivers go through strict background verification, training, and health checks before onboarding.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white mx-auto text-dark py-20 px-5">
      <h2 className="font-semibold text-2xl lg:text-[56px] text-[24px] leading-[28.8px] lg:leading-[61.6px] text-center mb-12">
        Frequently asked <br />
        <span className="text-[#f7931e]">questions</span>
      </h2>

      <div className="max-w-3xl mx-auto space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-[#D7D7D7] rounded-lg p-6 cursor-pointer transition-shadow hover:shadow-md"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="font-medium text-base lg:text-xl">
                {faq.question}
              </h3>
              <span className="text-xl font-bold text-[#f7931e]">
                {openIndex === index ? "−" : "+"}
              </span>
            </div>

            {openIndex === index && (
              <p className="mt-4 text-sm lg:text-lg text-gray-600">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
