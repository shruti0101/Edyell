"use client";

import Image from "next/image";
import React from "react";

const hotPicks = [


 {
    title: "Music, Calls",
    subtitle: "Communication System",
    image: "/hotpicks3.png",
  },





  {
    title: "Cycling",
    subtitle: "Communication System",
    image: "/hotpicks1.png",
  },
  {
    title: "Warning light",
    subtitle: "Smart Brake Flash",
    image: "/hotpicks2.png",
  },
 
];

export default function HotPicks() {
  return (
    <section className="w-full bg-white py-[80px]">
      {/*  CONTAINER  */}

      <div className="mx-auto w-[1432px]">

        {/*  HEADING  */}

        <h2
          className="
            mb-[55px]
            text-center
           heading-size
          "
        >
          Hot Picks
        </h2>

        {/*  CARDS  */}

        <div className="flex items-start justify-center gap-[32px]">

          {hotPicks.map((product, index) => (
            <div
              key={index}
              className="
                relative
                h-[606px]
                w-[460px]
                shrink-0
                overflow-hidden
                bg-[#EDEFF4]
              "
            >

              {/*  TITLE AREA  */}

              <div
                className="
                  absolute
                  left-[38px]
                  top-[38px]
                  z-10
                  flex
                  items-start
                "
              >

                {/* RED LINE */}

                <div
                  className="
                    mr-[12px]
                    mt-[2px]
                    h-[60px]
                    w-[2px]
                    shrink-0
                    bg-[#DA291C]
                  "
                />

                {/* TITLE + SUBTITLE */}

                <div className="flex flex-col">

                  <h3
                    className="
                      m-0
                      font-roboto
                      text-[46px]
                      font-medium
                      leading-normal
                     
                      text-black
                    "
                  >
                    {product.title}
                  </h3>

                  <p
                    className="
                  
                      m-0
                      font-roboto
                      text-[24px]
                      font-normal
                      leading-normal
                      text-black
                    "
                  >
                    {product.subtitle}
                  </p>

                </div>
              </div>

       

              <div
                className="
                  absolute
                  left-1/2
                  top-[150px]
                  flex
                  h-[330px]
                  w-[330px]
                  -translate-x-1/2
                  items-center
                  justify-center
                "
              >
               <Image
  src={product.image}
  alt={product.title}
  width={294}
  height={314}
  className="
    absolute
    left-1/2
    top-[33px]
    w-[294px]
    aspect-[147/157]
    -translate-x-1/2
    object-contain
  "
/>
              </div>

           

              <button
                className="
                  absolute
                  bottom-[24px]
                  right-[30px]
                  flex
                  h-[30px]
                  min-w-[105px]
                  items-center
                  justify-center
                  gap-[7px]
                  bg-[#DA291C]
                  px-[12px]
                  font-roboto
                  text-[11px]
                  font-normal
                  leading-none
                  text-white
                  transition
                  duration-200
                  hover:bg-[#b82016]
                "
              >
                Buy Now

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="6"
                  height="10"
                  viewBox="0 0 9 14"
                  fill="none"
                >
                  <path
                    d="M1 13L7 7L1 1"
                    stroke="white"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                  />
                </svg>
              </button>

            </div>
          ))}

        </div>
      </div>
    </section>

  );
}