import React from 'react'
import Image from 'next/image'

import {
  MapPin,
  Handshake,
  Headphones,
  Mail,
} from "lucide-react";
const page = () => {





    const contactInfo = [
  {
    icon: MapPin,
    title: "Company Address",
    lines: ["Longgang District, Shenzhen Guangdong , China"],
  },
  {
    icon: Handshake,
    title: "Cooperation",
    lines: [
      "Tel: +91 9321935357",
      "Email : IL : SUPPORT@FENMAN.IN",
    ],
  },
  {
    icon: Headphones,
    title: "Hotline Service",
    lines: [
      "Tel: +91 9321935357",
      "Monday~Friday: 9:00~20:00(PST:(UTC-8)",
    ],
  },
  {
    icon: Mail,
    title: "E-mail Customer Service",
    lines: [
      "Email : SUPPORT@FENMAN.IN",
      "Monday-Sunday: 6:00 -18:00 (PST/PDT)",
    ],
  },
];
  return (
    <div>
         {/*  HERO  */}
            <section className="relative h-[180px] w-full overflow-hidden sm:h-[220px] lg:h-[300px]">
              <Image
                src="/contactbg.png"
                alt="EDYELL riders"
                fill
                priority
                className="object-cover"
              />
            </section>


              <section className="px-5 py-[28px] sm:pt-16">
        <h1 className="text-center font-inter text-[68px] font-semibold
 leading-none ">
          Contact Us
        </h1>
      </section>






        <section className="w-full bg-white py-[32px]">
      <div className="mx-auto w-full max-w-[1100px]">
        
        {/* CONTACT CARDS */}
        <div className="grid grid-cols-1 gap-[30px] sm:grid-cols-2">
          {contactInfo.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="h-[264px] w-[545px] bg-[#F8F8F8] px-[43px] pt-[39px]"
              >
                {/* ICON */}
                <Icon
                  size={62}
                  strokeWidth={2.5}
                  className="text-black"
                />

                {/* TITLE */}
                <h3 className="mt-[5px] font-roboto text-[24px] font-semibold leading-normal text-black">
                  {item.title}
                </h3>

                {/* DETAILS */}
                <div className="mt-[2px]">
                  {item.lines.map((line, lineIndex) => (
                    <p
                      key={lineIndex}
                      className="font-roboto text-[18px] font-normal leading-normal text-[#5C5C5C]"
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* ONLINE MESSAGE */}
        <div className="mt-[43px]">
          <h2 className="text-center font-roboto text-[44px] font-semibold leading-normal text-black">
            Online Message
          </h2>

          {/* FORM */}
          <form className="mt-[25px]">
            {/* NAME / EMAIL / NUMBER */}
            <div className="grid grid-cols-1 gap-[10px] sm:grid-cols-3">
              <input
                type="text"
                placeholder="Your Name"
                className="h-[76px]  w-[365px] bg-[#F8F8F8] px-[16px] font-roboto text-[20px] font-normal text-black outline-none placeholder:text-[#555555]"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="h-[76px] w-full bg-[#F8F8F8] px-[16px] font-roboto text-[20px] font-normal text-black outline-none placeholder:text-[#555555]"
              />

              <input
                type="tel"
                placeholder="Your Number"
                className="h-[76px] w-full bg-[#F8F8F8] px-[16px] font-roboto text-[20px] font-normal text-black outline-none placeholder:text-[#555555]"
              />
            </div>

            {/* MESSAGE */}
            <textarea
              placeholder="Enter your feedback here"
              className="mt-[12px] h-[317px] w-[1100px] resize-none bg-[#F8F8F8] px-[16px] py-[14px] font-roboto text-[20px] font-normal text-black outline-none placeholder:text-[#555555]"
            />

            {/* BUTTON */}
            <div className="mt-[24px] flex justify-center">
              <button
                type="submit"
                className="h-[54px] w-[244px] cursor-pointer rounded-[3px] bg-[#111111] font-roboto text-[20px] font-bold text-white leading-[20px] transition hover:bg-black"
              >
                SEND NOW
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>

    </div>
  )
}

export default page
