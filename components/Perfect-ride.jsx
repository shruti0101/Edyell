"use client";

import React from "react";

import { Science_Gothic } from "next/font/google";

const scienceGothic = Science_Gothic({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const categories = [
  {
    image: "/perfect-ride/1.png",
    title: "Motorcycle",
  },
  {
    image: "/perfect-ride/2.png",
    title: "Cycling",
  },
  {
    image: "/perfect-ride/3.png",
    title: "Outdoor",
  },
  {
    image: "/perfect-ride/4.png",
    title: "Off-Road Vehicles",
  },
  {
    image: "/perfect-ride/5.png",
    title: "Snowmobiles",
  },
];




const riderTypes = [
  {
    image: "/1.png",
    title: "Solo Riders",
  },
  {
    image: "/2.png",
    title: "Group Riders",
  },
  {
    image: "/3.png",
    title: "Daily Commuters",
  },
  {
    image: "/4.png",
    title: "Cycling Users",
  },
];

export default function PerfectRide() {
  return (


<>



    <section className=" bg-white py-[60px] ">
      
      {/* SECTION CONTAINER */}

      <div className="mx-auto  w-[1000px] ">

        {/* HEADING */}

        <h2
          className="
            mb-[55px]
            text-center
           heading-size
          "
        >
          Your Perfect Ride
        </h2>

        {/* CATEGORY CARDS */}

        <div
          className="
            flex
            items-start
            justify-center
          gap-[30px]
          "
        >
          {categories.map((category, index) => (
            <div
              key={index}
              className="
                flex
                w-[345px]
               h-[460px]
                flex-col
                items-center
              "
            >
              {/* IMAGE */}

              <div
                className="
                  h-[350px]
                  w-[261px]
                  overflow-hidden
                  bg-gray-200
                "
              >
                <img
                  src={category.image}
                  alt={category.title}
                  className="
                    h-full
                    w-full
                    object-cover
                  "
                />
              </div>

              {/* TITLE */}

              <h3
                className="
                  mt-[28px]
                  text-center
                perfect-ride-subtitle
                "
              >
                {category.title}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>








<section className="w-full bg-white py-[80px]">
  <div
    className="
      mx-auto
      grid
      w-full
      max-w-[1440px]
      grid-cols-2
      gap-[30px]
    "
  >
    {riderTypes.map((rider, index) => (
      <div
        key={index}
        className="
          group
          relative
          h-[487px]
          w-full
          overflow-hidden
        "
      >
        {/* BACKGROUND IMAGE */}
        <img
          src={rider.image}
          alt={rider.title}
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            transition-transform
            duration-500
            group-hover:scale-[1.02]
          "
        />

        {/* DARK GRADIENT OVERLAY */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/80
            via-black/20
            to-transparent
          "
        />

        {/* CONTENT */}
        <div
          className="
            absolute
            bottom-[35px]
            left-0
            flex
            w-full
            flex-col
            items-center
            justify-center
          "
        >
          {/* TITLE */}
     <h2
  className={`
    ${scienceGothic.className}
    m-0
    text-center
    font-semibold
    uppercase
    leading-normal
    text-white
    text-[42px]
    
    drop-shadow-md
  `}
>
            {rider.title}
          </h2>

          {/* BUTTON */}
          <button
            type="button"
            className="
              mt-[18px]
              flex
              h-[30px]
              min-w-[107px]
              items-center
              justify-center
              bg-[#DA291C]
              px-[18px]
              text-[12px]
              font-medium
              text-white
              transition-all
              duration-300
              hover:bg-[#b92117]
              hover:scale-105
            "
          >
            Buy Now
            <span className="ml-[6px]">»</span>
          </button>
        </div>
      </div>
    ))}
  </div>
</section>


</>

  );
}