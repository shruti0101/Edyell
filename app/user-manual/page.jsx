"use client";

import { useState } from "react";
import Image from "next/image";
import { Search, Download, FileText } from "lucide-react";

const categories = [
  "All",
  "Helmet Headsets",
  "Intercom Headsets",
  "Bluetooth Earphones",
];

const manuals = [
  {
    id: 1,
    category: "Helmet Headsets",
    title: "Motorcycle Helmet Bluetooth Headset - A1PRO - Electronic manual",
    date: "2026-07-15",
    size: "0.8MB",
    image: "/usermanual/1.png",
    downloadUrl: "#",
    viewUrl: "#",
  },
  {
    id: 2,
    category: "Helmet Headsets",
    title: "Motorcycle Helmet Bluetooth Headset - C1 - Electronic manual",
    date: "2026-07-15",
    size: "0.8MB",
    image: "/usermanual/2.png",
    downloadUrl: "#",
    viewUrl: "#",
  },
];


export default function ManualsSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filteredManuals = manuals.filter((manual) => {
    const categoryMatch =
      activeCategory === "All" || manual.category === activeCategory;

    const searchMatch = manual.title
      .toLowerCase()
      .includes(search.toLowerCase());

    return categoryMatch && searchMatch;
  });

  return (
    <>
      <section className="relative h-[180px] w-full overflow-hidden sm:h-[220px] lg:h-[300px]">
        <Image
          src="/user-manual.png"
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
          User Manual
        </h2>
      </section>




      <main className="min-h-screen w-full bg-white text-black">
        <section className="mx-auto w-full max-w-[1000px] px-4 pb-[80px] pt-[20px]">
          {/* TOP FILTER BAR */}
          <div className="flex items-center justify-between gap-[20px]">
            {/* CATEGORIES */}
            <div className="flex items-center gap-[16px]">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`whitespace-nowrap font-roboto text-[14px] font-normal leading-[20px] transition ${
                    activeCategory === category
                      ? "text-black"
                      : "text-[#B5B5B5]"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>


            {/* SEARCH */}
            <div className="relative h-[50px] w-[355px] shrink-0">
              <input
                type="text"
                placeholder="Search Model Name"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="h-full w-full rounded-[25px] border border-[#D9D9D9] bg-white px-[30px] pr-[55px] font-roboto text-[14px] text-black outline-none placeholder:text-[#B5B5B5]"
              />

              <Search

                size={22}
                strokeWidth={1.5}
                className="absolute right-[20px] top-1/2 -translate-y-1/2 text-[#888888]"
              />
            </div>
          </div>

          {/* MANUAL LIST */}
          <div className="mt-[30px] space-y-[20px]">
            {filteredManuals.length === 0 ? (
              <div className="py-[50px] text-center font-roboto text-[14px] text-[#888888]">
                No manuals found.
              </div>
            ) : (
              filteredManuals.map((manual) => (
                <div
                  key={manual.id}
                  className="flex h-[174px] w-full  bg-[#F8F8F8]"
                >
                  {/* IMAGE */}
                  <div className="flex h-full w-[172px] shrink-0 items-center justify-center  bg-[#F8F8F8]">
                    <div className="relative h-[196px] w-[196px]">
                      <Image
                        src={manual.image}
                        alt={manual.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="flex flex-1 flex-col justify-center px-[23px]">
                    {/* TITLE */}
                    <h2 className="font-roboto text-[20px] font-normal leading-normal text-black">
                      {manual.title}
                    </h2>

                    {/* DATE + SIZE */}
                    <p className="mt-[3px] font-roboto text-[14px] font-normal leading-normal text-[#5C5C5C]">
                      Updated on: {manual.date} | File size: {manual.size}
                    </p>

                    {/* BUTTONS */}
                    <div className="mt-[18px] flex items-center gap-[20px]">
                      {/* DOWNLOAD */}
                      <a
                        href={manual.downloadUrl}
                        className="flex h-[42px] w-[137px] items-center justify-center gap-[7px] rounded-[8px] bg-[#DA291C] font-roboto text-[10px] font-normal text-white transition hover:bg-[#c92118]"
                      >
                        <Download size={20} strokeWidth={2} />

                        <span>Download Now</span>
                      </a>

                      {/* VIEW ONLINE */}
                      <a
                        href={manual.viewUrl}
                        className="flex h-[42px] w-[137px] items-center justify-center gap-[7px] rounded-[8px] bg-[#DA291C] font-roboto text-[10px] font-normal text-white transition hover:bg-[#c92118]"
                      >
                        <FileText size={20} strokeWidth={2} />

                        <span>View Online</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </section>
      </main>
    </>
  );
}
