"use client";

import {
  FileText,
  Play,
  Smartphone,
  Heart,
  ShieldCheck,
  CircleHelp,
} from "lucide-react";
import Image from "next/image";

const supportItems = [
  {
    title: "User Manual",
    description: "Download Product User Manual",
    icon: FileText,
    button: "Learn More",
    active: true,
  },
  {
    title: "Tutorial Video",
    description: "Watch Product Operation Tutorial Videos",
    icon: Play,
    button: "Learn More",
  },
  {
    title: "Sena Apps",
    description: "Download Application",
    icon: Smartphone,
    button: "Learn More",
  },
  {
    title: "After-sales Service",
    description: "Considerate Safeguard, Worry-Free Assurance",
    icon: Heart,
    button: "Learn More",
  },
  {
    title: "Warranty Terms",
    description: "Warranty-related rules",
    icon: ShieldCheck,
    button: "Learn More",
  },
  {
    title: "FAQs",
    description: "Find you the best solution",
    icon: CircleHelp,
    button: "Learn More",
  },
];

export default function SupportSection() {
  return (





<>


  <section className="relative h-[180px] w-full overflow-hidden sm:h-[220px] lg:h-[300px]">
                    <Image
                      src="/support.png"
                      alt="EDYELL riders"
                      fill
                      priority
                      className="object-cover"
                    />
                  </section>
      
      
              


    <section className="w-full bg-[#F4F4F4] px-5 py-[8px] sm:px-0">


            <section className="px-5 py-[28px] ">
              <h1 className="text-center font-inter text-[68px] font-semibold
       leading-none ">
               Support
              </h1>
            </section>
      <div className="mx-auto grid w-full max-w-[1100px] py-10 grid-cols-1 gap-[26px] sm:grid-cols-2">
        {supportItems.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="relative h-[289px] w-[537px] bg-white px-[29px] pt-[28px]"
            >
              {/* TEXT */}
              <div className="pr-[65px]">
                <h3 className="font-roboto text-[28px] font-semibold leading-[18px] text-black">
                  {item.title}
                </h3>

                <p className="mt-5 max-w-[283px] font-roboto text-[18px] font-normal leading-normal text-[#5C5C5C]">
                  {item.description}
                </p>
              </div>

              {/* ICON */}
              <div className="absolute right-[25px] top-[25px] flex h-[77px] w-[77px] items-center justify-center rounded-full bg-black">
                <Icon
                  size={19}
                  strokeWidth={1.5}
                  className="text-white"
                  width={40}
                  height={40}
                />
              </div>

              {/* BUTTON */}
    <button
  type="button"
  className={`absolute bottom-[29px] left-[29px] flex h-[37px] w-[135px] items-center justify-center gap-[8px] rounded-full border font-roboto text-[11px] font-normal transition ${
    item.active
      ? "border-[#DA291C] bg-[#DA291C] text-white"
      : "border-[#D8D8D8] bg-white text-black hover:border-black"
  }`}
>
  <span className="leading-none">{item.button}</span>

  <span className="flex items-center justify-center text-[17px] leading-none">
    ›
  </span>
</button>
            </div>
          );
        })}
      </div>
    </section>
</>



  );
}