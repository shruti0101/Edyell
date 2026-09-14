"use client";

import { useState } from "react";
import Image from "next/image";
import { Search, Play } from "lucide-react";

const categories = [
  "All",
  "Helmet Headsets",
  "Intercom Headsets",
  "Bluetooth Earphones",
];

const products = [
  {
    id: 1,
    category: "Helmet Headsets",
    title: "EDYELL Motorcycle Helmet Bluetooth Headset - A1PRO",
    date: "2026-07-10",
    image: "/tutorial-video/4.png",
    video: "/videos/a1pro.mp4",
  },
  {
    id: 2,
    category: "Helmet Headsets",
    title: "EDYELL Motorcycle Helmet Bluetooth Headset - C1",
    date: "2026-07-10",
    image: "/tutorial-video/2.png",
    video: "/videos/c1.mp4",
  },
  {
    id: 3,
    category: "Helmet Headsets",
    title: "EDYELL Motorcycle Helmet Bluetooth Headset - C2",
    date: "2026-07-10",
    image: "/tutorial-video/3.png",
    video: "/videos/c2.mp4",
  },
];

export default function ProductVideos() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [activeVideo, setActiveVideo] = useState(null);

  const filteredProducts = products.filter((product) => {
    const categoryMatch =
      activeCategory === "All" ||
      product.category === activeCategory;

    const searchMatch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());

    return categoryMatch && searchMatch;
  });

  return (


    <>


          <section className="relative h-[180px] w-full overflow-hidden sm:h-[220px] lg:h-[300px]">
        <Image
          src="/tutorial-video/1.png"
          alt="EDYELL riders"
          fill
          priority
          className="object-cover"
        />
      </section>

      <section className="px-5 py-[28px] sm:pt-16">
        <h2
          className="text-center font-inter text-[68px] font-semibold
       leading-none "
        >
        Tutorial Video
        </h2>
      </section>
    
    
    
    <main className="min-h-screen w-full bg-white text-black">
      <section className="mx-auto w-full max-w-[1100px] px-4 pb-[80px] pt-[35px]">

        {/* TOP BAR */}
        <div className="flex items-center justify-between">

          {/* CATEGORIES */}
          <div className="flex items-center gap-[16px]">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`font-roboto text-[14px] leading-[20px] transition ${
                  activeCategory === category
                    ? "font-medium text-black"
                    : "font-normal text-[#B7B7B7]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* SEARCH */}
          <div className="relative h-[45px] w-[310px]">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search Model Name"
              className="h-full w-full rounded-[23px] border border-[#D9D9D9] bg-white px-[25px] pr-[50px] font-roboto text-[12px] outline-none placeholder:text-[#B8B8B8]"
            />

            <Search
              size={20}
              strokeWidth={1.5}
              className="absolute right-[17px] top-1/2 -translate-y-1/2 text-[#777]"
            />
          </div>
        </div>

        

        {/* PRODUCT GRID */}
        <div className="mt-[25px] grid grid-cols-1 gap-[15px] sm:grid-cols-2 lg:grid-cols-3">

          {filteredProducts.map((product, index) => {
            const isPlaying = activeVideo === product.id;

            return (
            <div
  key={product.id}
  className="h-[344px] w-[361px] overflow-hidden border border-[#E1E1E1] bg-white"
>
  {/* IMAGE / VIDEO */}
  <div className="relative h-[180px] w-full shrink-0">
    {isPlaying ? (
      <video
        src={product.video}
        autoPlay
        controls
        className="block h-full w-full object-contain"
      />
    ) : (
      <>
        <div className="relative mx-auto mt-10 h-[140px] w-[248px]">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover"
          />
        </div>

        {/* PLAY BUTTON */}
        <button
          type="button"
          onClick={() => setActiveVideo(product.id)}
          className="absolute bottom-[10px] right-[10px] flex h-[43px] w-[43px] items-center justify-center rounded-full bg-[#DA291C] transition hover:bg-[#DA291C]"
        >
          <Play
            size={16}
            fill="white"
            strokeWidth={1.5}
            className="ml-[2px] text-white"
          />
        </button>
      </>
    )}
  </div>

  {/* CONTENT */}
  <div className="h-[164px] border-t border-[#E1E1E1] bg-[#F8F8F8] px-[20px] pb-[22px] pt-[18px]">
    {/* TITLE */}
    <h3 className="min-h-[40px] font-roboto text-[18px] font-semibold leading-normal text-black">
      {product.title}
    </h3>

    {/* DATE */}
    <p className="mt-[8px] font-roboto text-[16px] font-normal leading-[16px] text-[#999999]">
      {product.date}
    </p>
  </div>
</div>
            );
          })}
        </div>

        {/* EMPTY STATE */}
        {filteredProducts.length === 0 && (
          <div className="py-[50px] text-center font-roboto text-[14px] text-[#888888]">
            No products found.
          </div>
        )}
      </section>
    </main>
    </>
  );
}