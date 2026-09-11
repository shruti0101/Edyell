
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
        <br className="hidden sm:block" />
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
        <br className="hidden sm:block" />
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
        <br className="hidden sm:block" />
        wherever you go.
      </>
    ),
  },
  {
    image: "/hero/hero4.webp",
    
    
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
    <section className="relative w-full overflow-hidden bg-white">
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
        className="
          relative
          h-[650px]
          w-full
          sm:h-[700px]
          lg:h-[800px]
        "
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="
                relative
                h-full
                w-full
                bg-cover
                bg-center
                bg-no-repeat

                max-sm:bg-[center_center]
              "
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              {/* DARK OVERLAY */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-r
                  from-black/35
                  via-black/25
                  to-transparent

                  max-sm:from-black/45
                  max-sm:via-black/25
                  max-sm:to-transparent
                "
              />

              {/*  CONTENT  */}
              <div
                className="
                  absolute
                  z-10
                  text-[#FFFFFF]

                  /* DESKTOP - ORIGINAL FIGMA POSITION */
                  left-[17.4%]
                  top-[31.5%]

                  /* TABLET */
                  max-lg:left-[10%]
                  max-lg:top-[30%]

                  /* MOBILE */
                  max-sm:left-[6%]
                  max-sm:right-[6%]
                  max-sm:top-1/2
                  max-sm:-translate-y-1/2
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

                    /* TABLET */
                    max-lg:text-[52px]

                    /* MOBILE */
                    max-sm:text-[38px]
                    max-[400px]:text-[34px]
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

                    /* TABLET */
                    max-lg:text-[27px]

                    /* MOBILE */
                    max-sm:text-[22px]
                    max-[400px]:text-[20px]
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

                    /* TABLET */
                    max-lg:text-[20px]

                    /* MOBILE */
                    max-sm:max-w-[420px]
                    max-sm:text-[17px]
                    max-sm:leading-[1.5]
                    max-[400px]:text-[16px]
                  "
                >
                  {slide.description}
                </p>

                {/* BUY BUTTON */}
          {/* BUY BUTTON - HIDE ON LAST SLIDE */}
{index !== slides.length - 1 && (
  <button
    className="
      mt-10
      flex
      h-[44px]
      min-w-[171px]
      cursor-pointer
      items-center
      justify-center
      gap-3
      bg-[#DA291C]
      font-roboto
      text-[24px]
      font-normal
      text-white
      transition
      hover:bg-[#b92117]

      max-lg:mt-8
      max-lg:text-[21px]

      max-sm:mt-7
      max-sm:h-[42px]
      max-sm:min-w-[145px]
      max-sm:text-[19px]
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
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
    </svg>
  </button>
)}


              </div>
            </div>
          </SwiperSlide>
        ))}

        {/*  LEFT ARROW  */}
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
            bg-black/40
            text-white
            transition
            hover:bg-black/35

            /* TABLET */
            max-lg:left-[3%]
            max-lg:h-[60px]
            max-lg:w-[60px]

            /* MOBILE */
            max-sm:left-[3%]
            max-sm:h-[42px]
            max-sm:w-[42px]
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="75"
            height="75"
            viewBox="0 0 75 75"
            fill="none"
            className="max-sm:h-[42px] max-sm:w-[42px] max-lg:h-[60px] max-lg:w-[60px]"
          >
            <circle
              cx="37.5"
              cy="37.5"
              r="37.5"
              fill="black"
              fillOpacity="0.5"
            />
            <path
              d="M45 22L30.7071 36.2929C30.3166 36.6834 30.3166 37.3166 30.7071 37.7071L45 52"
              stroke="white"
              strokeWidth="3"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
          </svg>
        </button>

        {/*  RIGHT ARROW  */}
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
            bg-black/40
            text-white
            transition
            hover:bg-black/35

            /* TABLET */
            max-lg:right-[3%]
            max-lg:h-[60px]
            max-lg:w-[60px]

            /* MOBILE */
            max-sm:right-[3%]
            max-sm:h-[42px]
            max-sm:w-[42px]
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="75"
            height="75"
            viewBox="0 0 75 75"
            fill="none"
            className="max-sm:h-[42px] max-sm:w-[42px] max-lg:h-[60px] max-lg:w-[60px]"
          >
            <circle
              cx="37.5"
              cy="37.5"
              r="37.5"
              fill="black"
              fillOpacity="0.5"
            />
            <path
              d="M30 52L44.2929 37.7071C44.6834 37.3166 44.6834 36.6834 44.2929 36.2929L30 22"
              stroke="white"
              strokeWidth="3"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
          </svg>
        </button>

        {/*  PAGINATION  */}
        <div
          className="
            hero-pagination
            absolute
            bottom-[12px]
            left-1/2
            z-30
            flex
            w-auto
        
            items-center
            justify-center
            gap-[12px]

            max-sm:bottom-[10px]
            max-sm:gap-[8px]
          "
        />
      </Swiper>
    </section>
  );
}

