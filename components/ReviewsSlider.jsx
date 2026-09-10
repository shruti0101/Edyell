"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const reviews = [
  {
    name: "Michael:R",
    avatar: "/reviews/avatar-1.jpg",
    model: "C8Pro",
    text: "I've used this Bluetooth helmet intercom for some time and it's great overall. Well-made, premium-looking and simple to fit on helmets. I've ridden 100km with zero problems; it's light and comfy.",
  },
  {
    name: "Michael:R",
    avatar: "/reviews/avatar-2.jpg",
    model: "C5",
    text: "I'm writing this review after 9 months of use. For the price this comes at, this is an amazing product. It has seen heat, rain, cold and it works totally fine.",
  },
  {
    name: "BANDHAN PARMAR",
    avatar: "/reviews/avatar-3.jpg",
    model: "A1",
    text: "I've been using the EDYELL C5 Bluetooth earphones for a while now and overall I'm quite satisfied. The sound quality is clear with decent bass, making it good for music, calls and casual use.",
  },
  {
    name: "Michael:R",
    avatar: "/reviews/avatar-4.jpg",
    model: "C8Pro",
    text: "The product quality is really good and the fit is comfortable for long usage. Connectivity is stable with no major drops.",
  },
  {
    name: "Michael:R",
    avatar: "/reviews/avatar-5.jpg",
    model: "C5",
    text: "The sound is clear and the product feels premium. Setup was easy and it has worked reliably during my rides.",
  },
  {
    name: "Rahul K",
    avatar: "/reviews/avatar-6.jpg",
    model: "A1",
    text: "Really impressed with the quality and performance. Easy to use and comfortable even after long hours.",
  },

  {
    name: "BANDHAN PARMAR",
    avatar: "/reviews/avatar-3.jpg",
    model: "A1",
    text: "I've been using the EDYELL C5 Bluetooth earphones for a while now and overall I'm quite satisfied. The sound quality is clear with decent bass, making it good for music, calls and casual use.",
  },
  {
    name: "Michael:R",
    avatar: "/reviews/avatar-4.jpg",
    model: "C8Pro",
    text: "The product quality is really good and the fit is comfortable for long usage. Connectivity is stable with no major drops.",
  },
  {
    name: "Michael:R",
    avatar: "/reviews/avatar-5.jpg",
    model: "C5",
    text: "The sound is clear and the product feels premium. Setup was easy and it has worked reliably during my rides.",
  },
  {
    name: "Rahul K",
    avatar: "/reviews/avatar-6.jpg",
    model: "A1",
    text: "Really impressed with the quality and performance. Easy to use and comfortable even after long hours.",
  },
];

export default function ReviewsSlider() {
  return (
    <section className="w-full overflow-hidden bg-white py-12 md:py-16">

      {/* Slider */}
      <div className="w-full">
        <Swiper
          modules={[Autoplay]}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          centeredSlides={true}
          spaceBetween={30}
          slidesPerView={1.2}
          breakpoints={{
            640: {
              slidesPerView: 2.2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 24,
            },
          
          }}
          className="reviews-swiper"
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div
                className="
                  relative
                  h-[300px]
                  w-[467px]
              
                  border
                  border-gray-200
                  bg-[#EDEFF4]
                  p-5
                "
              >
                {/* User */}
                <div className="flex items-center gap-2">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="h-8 w-8 rounded-full object-cover"
                  />

                  <div className="flex items-center gap-1">
                    <span className="text-[16px] font-n ormal text-black">
                      {review.name}
                    </span>

                    <span
                      className="
                        flex h-3.5 w-3.5
                        items-center justify-center
                        rounded-full
                        bg-red-500
                        text-[8px]
                        text-white
                      "
                    >
                      ✓
                    </span>
                  </div>
                </div>

                {/* Rating */}
                <div className="mt-2 flex gap-[2px]">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      className="text-[13px] text-yellow-400"
                    >
                      ★
                    </span>
                  ))}
                </div>

                {/* Review */}
                <p className="mt-2 line-clamp-4 text-[12px] leading-[15px] font-normal text-#000000">
                  {review.text}
                </p>

                {/* Model */}
                <p className="absolute bottom-3 left-4 text-[11px] text-gray-400">
                  Model: {review.model}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Button */}
      <div className="mt-20 flex justify-center">
        <button
          className="
            bg-[#f32720]
            px-6
            py-2.5
            text-sm
            font-medium
            text-white
            transition
            hover:bg-[#d91e18]
          "
        >
          View real reviews »
        </button>
      </div>
    </section>
  );
}