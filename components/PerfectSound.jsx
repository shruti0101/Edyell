"use client";

import React, { useState } from "react";
import Image from "next/image";

const soundImages = [
  {
    type: "image",
    image: "/toggle/3.png",
  },
  {
    type: "image",
    image: "/toggle/2-2.png",
  },
  {
    type: "image",
    image: "/toggle/1.png",
  },
  {
    type: "video",
    image: "/toggle/4.mp4",
  },
];

export default function PerfectSound() {
  // Video is active initially
  const [activeIndex, setActiveIndex] = useState(3);

  // RIGHT ARROW
  const handleNext = () => {
    setActiveIndex((prev) => {
      return (prev + 1) % soundImages.length;
    });
  };

  // LEFT ARROW
  const handlePrevious = () => {
    setActiveIndex((prev) => {
      return (
        (prev - 1 + soundImages.length) %
        soundImages.length
      );
    });
  };

  return (
    <section className="w-full bg-white py-[70px]">
      <div className="mx-auto w-full max-w-[1432px]">

        {/* HEADER */}
        <div className="relative my-15 flex items-center justify-center">
          <h2 className="m-0 heading-size">
            Perfect Sound,Anytime,Anywhere
          </h2>

          {/* ARROWS */}
          <div className="absolute right-0 flex items-center gap-[6px]">

            {/* PREVIOUS */}
         <button
  type="button"
  onClick={handlePrevious}
  aria-label="Previous"
  className="
    group
    flex
    h-[30px]
    w-[30px]
    items-center
    justify-center
    bg-[#F2F2F2]
    p-0
    transition
    duration-200
    hover:bg-[#DA291C]
  "
>
  <svg
    width="6"
    height="12"
    viewBox="0 0 5 8"
    fill="none"
  >
    <path
      d="M4 1L1 4L4 7"
      stroke="black"
      className="transition duration-200 group-hover:stroke-white"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
</button>

            {/* NEXT */}
   {/* NEXT */}
<button
  type="button"
  onClick={handleNext}
  aria-label="Next"
  className="
    group
    flex
    h-[30px]
    w-[30px]
    items-center
    justify-center
    bg-[#F2F2F2]
    p-0
    transition
    duration-200
    hover:bg-[#DA291C]
  "
>
  <svg
    width="6"
    height="12"
    viewBox="0 0 5 8"
    fill="none"
  >
    <path
      d="M1 1L4 4L1 7"
      stroke="black"
      className="transition duration-200 group-hover:stroke-white"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
</button>

          </div>
        </div>

        {/* ACCORDION */}
        <div
          className="
            flex
            h-[500px]
            w-full
            gap-[20px]
            overflow-hidden
          "
          onMouseLeave={() => setActiveIndex(3)}
        >
          {soundImages.map((item, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={index}
                onMouseEnter={() => setActiveIndex(index)}
                className={`
                  relative
                  h-full
                  min-w-0
                  overflow-hidden
                  cursor-pointer
                  transition-[flex]
                  duration-500
                  ease-in-out
                  ${
                    isActive
                      ? "flex-[2.8]"
                      : "flex-[0.5]"
                  }
                `}
              >
                {/* IMAGE */}
                {item.type === "image" && (
                  <Image
                    src={item.image}
                    alt={`Sound product ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                )}

                {/* VIDEO */}
                {item.type === "video" && (
                  <video
                    src={item.image}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="
                      absolute
                      inset-0
                      h-full
                      w-full
                      object-cover
                    "
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}