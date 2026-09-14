"use client";

import Image from "next/image";
import { Search } from "lucide-react";

const categories = [
  "All",
  "Helmet Headsets",
  "Intercom Headsets",
  "Bluetooth Earphones",
];

export default function SenaApps() {
  return (



<>
    <section className="relative h-[180px] w-full overflow-hidden sm:h-[220px] lg:h-[300px]">
                          <Image
                            src="/app/1.png"
                            alt="EDYELL riders"
                            fill
                            priority
                            className="object-cover"
                          />
                        </section>

            
            
                          <section className="px-5 py-[28px] sm:pt-16">
                    <h1 className="text-center font-inter text-[68px] font-semibold
             leading-none ">
                 Sena Apps
                    </h1>
                  </section>


    <main className="min-h-screen w-full bg-white text-black">
      <section className="mx-auto w-full max-w-[1300px] px-4 pb-[80px] pt-[35px]">

        {/* TOP BAR */}
        <div className="flex items-center justify-between">

          {/* CATEGORIES */}
          <div className="flex items-center gap-[16px]">
            {categories.map((category, index) => (
                
              <button
                key={category}
                className={`font-roboto text-[14px] leading-[20px] transition ${
                  index === 0
                    ? "font-medium text-black"
                    : "font-normal text-[#B7B7B7]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>


          {/* SEARCH */}
          <div className="relative h-[45px] w-[205px]">
            <input
              type="text"
              placeholder="Search Model Name"
              className="h-full w-full rounded-[23px] border border-[#D9D9D9] bg-white px-[18px] pr-[42px] font-roboto text-[11px] outline-none placeholder:text-[#B8B8B8]"
            />

            <Search
              size={17}
              strokeWidth={1.5}
              className="absolute right-[14px] top-1/2 -translate-y-1/2 text-[#777]"
            />
          </div>
        </div>

        {/* MAIN APP SECTION */}
        <section className="mt-[25px] flex items-center gap-[45px]">

          {/* LEFT IMAGE */}
          <div className="relative h-[361px] w-[631px] shrink-0">

            {/* BACKGROUND IMAGE */}
            <div className="relative h-full w-full overflow-hidden">
              <Image
                src="/app/2.png"
                alt="Sena App"
                fill
                priority
                className="object-cover"
              />
            </div>

            {/* PHONE */}
            <div className="absolute -right-[27px] bottom-[-20px] h-[255px] w-[122px]">
              <Image
                src="/app/6.png"
                alt="Sena mobile application"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex min-w-0 flex-1 flex-col">

            {/* APP ICON */}
            <div className="relative mb-8 h-[60px] w-[60px]">
              <Image
                src="/app/5.png"
                alt="C8 Max application"
                fill
                className="object-contain"
              />
            </div>

            {/* TITLE */}
            <h2 className="font-roboto text-[24px] font-semibold leading-[18px] text-black">
              C8 Max Motorcycle App
            </h2>

            {/* DESCRIPTION */}
            <p className="my-3 max-w-[391px] font-roboto text-[18px] font-normal leading-[26px] text-[#4E4E4E]">
              C8 Max mobile app wirelessly connects to Bluetooth earphone
              devices, provides videos in real-time, watches online,
              downloads videos and photos, and more.
            </p>

            {/* QR CODES */}
            <div className="mt-[9px] flex items-center gap-[12px]">

              <div className="relative h-[96px] w-[92px]">
                <Image
                  src="/app/3.png"
                  alt="Download app QR code"
                  fill
                  className="object-contain"
                />
              </div>

              <div className="relative h-[96px] w-[92px]">
                <Image
                  src="/app/4.png"
                  alt="Download app QR code"
                  fill
                  className="object-contain"
                />
              </div>

            </div>
          </div>
        </section>
      </section>
    </main>
</>


  );
}