"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    image: "/hero/hero1.webp",
    title: "Pleasant Sound",
    subtitle: "Clearer Audio · Richer Detail",
    description: (
      <>
        Enhanced soundstage and deeper bass for immersive
        <br />
        audio, even on the move.
      </>
    ),
  },
  {
    image: "/hero/hero2.webp",
    title: "Powerful Performance",
    subtitle: "Built for Every Ride",
    description: (
      <>
        Premium performance and advanced technology for immersive
        <br />
        audio, even on the move.
      </>
    ),
  },
  {
    image: "/hero/hero3.webp",
    title: "Premium Experience",
    subtitle: "Designed for Adventure",
    description: (
      <>
        Exceptional quality and powerful features
        <br />
        wherever you go.
      </>
    ),
  },

  {
    image: "/hero/hero4.webp",
    title: "Premium Experience",
    subtitle: "Designed for Adventure",
    description: (
      <>
        Exceptional quality and powerful features
        <br />
        wherever you go.
      </>
    ),
  },
];

const features = [
  {
    icon: "🛡️",
    title: "12 Months",
    subtitle: "Warranty",
  },
  {
    icon: "🚚",
    title: "Free Express",
    subtitle: "Delivery",
  },
  {
    icon: "♻️",
    title: "7-day",
    subtitle: "Replacement",
  },
  {
    icon: "🏆",
    title: "ToP",
    subtitle: "Top Brand",
  },
  {
    icon: "💰",
    title: "Cash/Pay on",
    subtitle: "Delivery",
  },
];

const ArrowLeft = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M15 18l-6-6 6-6" />
  </svg>
);

const ArrowRight = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M9 18l6-6-6-6" />
  </svg>
);

export default function Hero() {
  return (
    <section className="w-full overflow-hidden bg-white relative">
      {/*  HERO SLIDER  */}

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={{
          prevEl: ".hero-prev",
          nextEl: ".hero-next",
        }}
        pagination={{
          clickable: true,
          el: ".hero-pagination",
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="relative h-[800px] min-w-[1920px]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative h-full  w-full  bg-cover bg-center bg-no-repeat "
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              {/* DARK OVERLAY */}

              <div
                className="
                  absolute inset-0
                  bg-gradient-to-r
                  from-black/35
                  via-black/25
                  to-transparent
                "
              />

              {/* ================= CONTENT ================= */}

              <div
                className="
                  absolute
                  left-[17.4%]
                  top-[31.5%]
                  z-10
                  text-[#FFFFFF]
                "
              >
                {/* TITLE */}

                <h1
                  className="
    m-0
    font-roboto
    text-[68px]
    font-bold
    leading-normal
    text-white
       
  "
                >
                  {slide.title}
                </h1>

                {/* SUBTITLE */}

                <h2
                  className="
                     font-roboto
                    
    text-[32px]
     font-bold
    leading-normal
    text-white
     leading-normal
                  "
                >
                  {slide.subtitle}
                </h2>

                {/* DESCRIPTION */}

                <p
                  className="
                    my-4
                                       font-roboto
                     
    text-[24px]
     font-normal
    leading-normal
    text-white
   
                  "
                >
                  {slide.description}
                </p>

                {/* BUY BUTTON */}

                <button
                  className="
                    flex
                    h-[44px]
                    min-w-[171px]
                    items-center
                    justify-center
                    gap-3
                    bg-[#DA291C]
                    cursor-pointer
                    font-roboto
                    text-[24px]
                    font-normal
                    text-[#fffff]
                  mt-10
                  "
                >
                  Buy Now
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="9"
                    height="14"
                    viewBox="0 0 9 14"
                    fill="none"
                  >
                    <path
                      d="M1 13L7 7L1 1"
                      stroke="white"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <button
          className="
            hero-prev
            absolute
            left-[5.2%]
            top-1/2
            z-20
            flex
            h-[75px]
            w-[75px]
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            bg-(rgba(0, 0, 0, 0.50))
            text-white
            transition
            hover:bg-black/35
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="75"
            height="75"
            viewBox="0 0 75 75"
            fill="none"
          >
            <circle
              cx="37.5"
              cy="37.5"
              r="37.5"
              fill="black"
              fill-opacity="0.5"
            />
            <path
              d="M45 22L30.7071 36.2929C30.3166 36.6834 30.3166 37.3166 30.7071 37.7071L45 52"
              stroke="white"
              stroke-width="3"
              stroke-miterlimit="10"
              stroke-linecap="round"
            />
          </svg>
        </button>

        <button
          className="
            hero-next
            absolute
            right-[5.2%]
            top-1/2
            z-20
            flex
            h-[75px]
            w-[75px]
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            bg-(rgba(0, 0, 0, 0.50))
            text-white
            transition
            hover:bg-black/35
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="75"
            height="75"
            viewBox="0 0 75 75"
            fill="none"
          >
            <circle
              cx="37.5"
              cy="37.5"
              r="37.5"
              fill="black"
              fill-opacity="0.5"
            />
            <path
              d="M30 52L44.2929 37.7071C44.6834 37.3166 44.6834 36.6834 44.2929 36.2929L30 22"
              stroke="white"
              stroke-width="3"
              stroke-miterlimit="10"
              stroke-linecap="round"
            />
          </svg>
        </button>

        {/* PAGINATION */}
        <div
          className="
    hero-pagination
    absolute
    bottom-[12px]
  
    z-30
    flex
    w-auto
  

    items-center
    justify-center
    gap-[12px]
  "
        />
      </Swiper>
    </section>
  );
}
