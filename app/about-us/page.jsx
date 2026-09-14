"use client";

import Image from "next/image";

const mainSections = [
  {
    number: "01",
    title: "EDYELL’s Story",
    text: `EDYELL is an Indian brand specializing in audio and electronic  products, including helmet headsets, earphones, speakers,  smartwatches, and hubs. It is recognized as the leading brand  for helmet wireless earbuds in India and ranks among the top 20  earwear brands on Amazon.`,
    image: "/about/img2.png",
  },
  {
    number: "02",
    title: (
      <>
        Created by Riders, <br></br> for Riders
        
      
      </>
    ),
    text: `Our products are thoughtfully designed for optimal performance,  durability, and comfort, helping you stay connected and  energized. Committed to quality and customer satisfaction, we  offer innovative solutions tailored for fitness enthusiasts, tech  lovers, and busy professionals`,
    image: "/about/img3.png",
  },
  {
    number: "03",
    title: "EDYELL’s Goal",
    text: `At EDYELL, we create convenience and safety while you ride. We aim to make every journey more enjoyable by combining reliable technology with sleek design, easy-to-use features, and innovative products.`,
 
  },
];

const productSections = [
  {
    label: "BLUETOOTH HEADPHONES",
    title: "All Bluetooth headphones",
    text: `This is a Bluetooth headset engineered for daily motorcycle commuting. Centered on three core strengths — steady signal connection, user-friendly controls, and lightweight comfortable wear — it enables riders to play audio and receive various voice alerts while riding, with no extra strain at all.`,
    image: "/about/img4.png",
    reverse: false,
  },
  {
    label: "INTERCOM HEADPHONES",
    title: "All Intercom Headsets",
    text: `A helmet intercom headset engineered for long-distance rides and team fleet coordination. We prioritize steady signal linkage, user-friendly operation, and extended battery endurance, delivering crisp, uninterrupted calls with hands-free, distraction-free control. Whether for city daily commutes, cross-country touring or group formation rides, EDYELL stands as your dependable riding partner on every mile.`,
    image: "/about/img5.png",
    reverse: true,
  },
  {
    label: "SPORTS HEADPHONES",
    title: "All Cycling Headphones",
    text: `A communication device engineered for riding and outdoor sports. We prioritize lightweight fit, intuitive operation and instant connection — enabling natural communication while you’re on the move. Whether for motorcycling, skiing or other outdoor activities, EDYELL keeps you freely mobile and connected at all times.`,
    image: "/about/img6.png",
    reverse: false,
  },
];

export default function AboutPage() {
  return (

    <main className="w-full bg-white text-black">

      {/*  HERO  */}
      <section className="relative h-[180px] w-full overflow-hidden sm:h-[220px] lg:h-[300px]">
        <Image
          src="/about/img1.png"
          alt="EDYELL riders"
          fill
          priority
          className="object-cover"
        />
      </section>

   
      <section className="px-5 pt-[28px] sm:pt-20">
        <h1 className="text-center font-inter text-[68px] font-semibold
 leading-none ">
          About Us
        </h1>
      </section>


   <section className="mx-auto w-full max-w-[1298px] pt-[60px]">

  {mainSections.map((section, index) => (
    <div
      key={section.number}
      className={`${index !== 0 ? "mt-[65px]" : ""}`}
    >

      {/* NUMBER + TITLE + DESCRIPTION */}
      <div
        className="
          grid
          grid-cols-1
          items-center
       
          sm:grid-cols-[110px_450px_1fr]
     
        "
      >

        {/* NUMBER */}
        <div className="font-roboto text-[30px] font-normal leading-normal text-[#777]">
          {section.number}
        </div>

        {/* TITLE */}
        <h2 className="font-roboto text-[44px] font-semibold leading-normal text-black">
          {section.title}
        </h2>

        {/* DESCRIPTION */}
        <p className="max-w-[735px] gap-40 font-roboto text-[20px] font-normal leading-[44px] text-black">
          {section.text}
        </p>

      </div>

      {/* IMAGE */}
 {/* IMAGE */}
{section.image && (
  <div className="relative my-25 h-full w-[1300px] overflow-hidden">
    <Image
      src={section.image}
      alt={
        typeof section.title === "string"
          ? section.title
          : "EDYELL riders"
      }
      width={1300}
      height={1600}
      priority
      className="object-cover"
    />
  </div>
)}

    </div>
  ))}












  

</section>


{/* PRODUCT SECTIONS */}
<section className="mx-auto w-full my-30 max-w-[1298px] ">
  {productSections.map((section, index) => (
    <div
      key={section.title}
      className={`
        grid grid-cols-1 items-center gap-[40px]
        sm:grid-cols-2 sm:gap-[55px]
        ${index !== 0 ? "mt-[70px]" : ""}
      `}
    >
      {/* TEXT */}
      <div
        className={`${
          section.reverse ? "sm:order-2" : "sm:order-1 "
        }`}
      >




        <p className="font-roboto text-[20px] font-normal leading-[32px] text-uppercase text-[#999]">
          {section.label}
        </p>

        <h2 className="mt-[20px] font-roboto text-[44px] font-semibold leading-[32px] text-black">
          {section.title}
        </h2>
<p className="mt-[23px] font-roboto text-[18px] font-[200] leading-[32px] text-[#000]">
  {section.text}
</p>
      </div>

      {/* IMAGE */}
      <div
        className={`${
          section.reverse ? "sm:order-1" : "sm:order-2"
        }`}
      >
        <Image
          src={section.image}
          alt={section.title}
          width={600}
          height={338}
          className="h-[338px] w-full object-cover"
        />
      </div>
    </div>
  ))}
</section>
















    </main>
  );
}