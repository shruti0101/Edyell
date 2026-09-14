"use client";

import { useState } from "react";
import Image from "next/image";
const categories = [
  "All",
  "Helmet Headsets",
  "Intercom Headsets",
  "Bluetooth Earphones",
];

const faqs = [
  {
    category: "Helmet Headsets",
    question: "Can't pair the Bluetooth headset with my phone?",
    answer:
      "Answer: Turn off the headset Bluetooth and phone Bluetooth, restart both devices, clear old connection records on the phone, then re-enter pairing mode to connect.",
  },
  {
    category: "Intercom Headsets",
    question:
      "Intercom communication between two headsets has constant static noise?",
    answer:
      "Please make sure both headsets are fully charged and within the recommended communication range. Restart both devices and pair them again.",
  },
  {
    category: "Intercom Headsets",
    question: "Other people can't hear my voice during group intercom?",
    answer:
      "Check that the microphone is properly connected and make sure the microphone opening is not blocked. You can also restart and reconnect the intercom.",
  },
  {
    category: "Helmet Headsets",
    question: "The headset automatically disconnects during riding?",
    answer:
      "Make sure the headset has sufficient battery and that your phone remains within Bluetooth range. Remove unnecessary Bluetooth connections and pair the headset again.",
  },
  {
    category: "Helmet Headsets",
    question: "Music volume suddenly becomes small while talking on intercom?",
    answer:
      "The music volume may automatically decrease when the intercom is active. Check the device volume settings and adjust the intercom and music volume accordingly.",
  },
  {
    category: "Helmet Headsets",
    question: "Headset battery drains extremely fast after full charge?",
    answer:
      "Check whether Bluetooth, intercom, or other functions are continuously active. Fully charge the headset and restart it before using it again.",
  },
  {
    category: "Bluetooth Earphones",
    question: "No sound when receiving incoming phone calls?",
    answer:
      "Check your phone's Bluetooth call audio settings and make sure the headset is selected as the audio output device.",
  },
  {
    category: "Intercom Headsets",
    question: "Unable to connect three or more headsets for group talk?",
    answer:
      "Make sure all headsets support group intercom and follow the recommended pairing sequence from the product manual.",
  },
  {
    category: "Helmet Headsets",
    question: "The headset restarts randomly during use?",
    answer:
      "Check the battery level and make sure the charging connection is working correctly. If the problem continues, reset the headset and pair it again.",
  },
  {
    category: "Helmet Headsets",
    question: "How to switch the voice broadcast of the device?",
    answer:
      "Open the device settings and select the preferred voice broadcast option. The available options may vary depending on the headset model.",
  },
  {
    category: "Bluetooth Earphones",
    question: "Can't pair the Bluetooth headset with my phone?",
    answer:
      "Turn off Bluetooth on both devices, restart them, remove the previous pairing record, and then put the headset into pairing mode again.",
  },
];

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeIndex, setActiveIndex] = useState(0);
  const [search, setSearch] = useState("");

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory =
      activeCategory === "All" || faq.category === activeCategory;

    const matchesSearch = faq.question
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setActiveIndex(null);
  };

  return (


<>

     <section className="relative h-[180px] w-full overflow-hidden sm:h-[220px] lg:h-[300px]">
                          <Image
                            src="/faq.png"
                            alt="EDYELL riders"
                            fill
                            priority
                            className="object-cover"
                          />
                        </section>
            
            
                          <section className="px-5 py-[28px] sm:pt-16">
                    <h1 className="text-center font-inter text-[68px] font-semibold
             leading-none ">
                FAQs
                    </h1>
                  </section>


{/* faq questions  */}


    <main className="min-h-screen w-full bg-white text-black ">
      <section className="mx-auto w-full max-w-[1000px] px-0 pt-10 pb-50">

        {/* TOP BAR */}
        <div className="flex items-start justify-between gap-[12px]">

          {/* CATEGORIES */}
          <div className="flex flex-wrap items-center gap-[10px] pt-[2px]">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`font-roboto text-[15px] font-semibold leading-normal transition ${
                  activeCategory === category
                    ? "text-black"
                    : "text-[#999999] underline"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* SEARCH */}
          <div className="relative h-[42px] w-[230px] shrink-0">
            <input
              type="text"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setActiveIndex(null);
              }}
              placeholder="Search"
              className="h-full w-full border-1 border-[#D2D2D2] bg-white px-[10px] pr-[30px] font-roboto text-[13px] font-normal rounded-[51px] text-black outline-none placeholder:text-[#999999]"
            />

            {/* SEARCH ICON */}
            <svg
              className="absolute right-[8px] top-1/2 h-[20px] w-[20px] -translate-y-1/2 text-[#777777]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-4-4" />
            </svg>
          </div>
        </div>

        {/* FAQ LIST */}
        <div className="mt-8 border-t  border-[#E5E5E5]">
          {filteredFaqs.length === 0 ? (
            <div className="py-[30px] text-center font-roboto text-[10px] text-[#888888]">
              No questions found.
            </div>
          ) : (
            filteredFaqs.map((faq, index) => {
              const isOpen = activeIndex === index;

              return (
                <div
                  key={`${faq.question}-${index}`}
                  className="border-b border-[#E5E5E5]"
                >
                  {/* QUESTION */}
                  <button
                    type="button"
                    onClick={() =>
                      setActiveIndex(isOpen ? null : index)
                    }
                    className="flex min-h-[48px] w-full items-center justify-between gap-[10px] text-left"
                  >
                    <span className="font-roboto text-[20px] font-medium leading-[13px] text-black">
                      {faq.question}
                    </span>

                    {/* PLUS / CLOSE */}
                    <span className="flex h-[18px] w-[18px] shrink-0 items-center justify-center  font-roboto text-[20px] font-light leading-none text-black">
                      {isOpen ? "×" : "+"}
                    </span>
                  </button>

                  {/* ANSWER */}
                  {isOpen && (
                    <div className="pb-[8px] pr-[25px]">
                      <p className="font-roboto text-[20px] font-normal py-3 text-[#5C5C5C]">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </section>
    </main>



</>

  );
}