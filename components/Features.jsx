// "use client";

// import React from "react";

// const features = [
//   {
//     icon: "/icons/1.svg",
//     title: "12 Months",
//     subtitle: "Warranty",
//   },
//   {
//     icon: "/icons/2.svg",
//     title: "Free Express",
//     subtitle: "Delivery",
//   },
//   {
//     icon: "/icons/3.svg",
//     title: "7-day",
//     subtitle: "Replacement",
//   },
//   {
//     icon: "/icons/4.svg",
//     title: "ToP",
//     subtitle: "Top Brand",
//   },
//   {
//     icon: "/icons/5.svg",
//     title: "Cash/Pay on",
//     subtitle: "Delivery",
//   },
// ];

// export default function Features() {
//   return (
//     <section className="w-full bg-white my-30">
//       <div className="mx-auto w-[1160px]">

//         {/* FEATURES */}

//         <div
//           className="
//             flex
//             h-[100px]
//             items-center
//             justify-between
//           "
//         >
//           {features.map((feature, index) => (
//             <div
//               key={index}
//               className="
//                 flex
//                 items-center
//                 gap-[18px]
//               "
//             >
//               {/* ICON */}

//               <img
//                 src={feature.icon}
//                 alt={feature.title}
//                 className="
//                   h-[54px]
//                   w-[54px]
//                   shrink-0
//                   object-contain
//                 "
//               />

//               {/* TEXT */}

//               <div
//                 className="
//                   flex
//                   flex-col
//                   font-roboto
//                   leading-[1.2]
//                 "
//               >
//                 <span
//                   className="
//                     text-[16px]
//                     font-bold
//                     text-[#000000]
//                   "
//                 >
//                   {feature.title}
//                 </span>

//                 <span
//                   className="
//                     text-[16px]
//                     font-normal
//                     text-[#000000]
//                   "
//                 >
//                   {feature.subtitle}
//                 </span>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* DIVIDER */}

//         <div className="h-px w-full bg-[#D9D9D9]" />

//       </div>
//     </section>
//   );
// }















"use client";

import React from "react";

const features = [
  {
    icon: "/icons/1.svg",
    title: "12 Months",
    subtitle: "Warranty",
    inner: "12",
    innerClass: "left-[12px] top-[15px] text-[20px]",
  },
  {
    icon: "/icons/5.svg",
    title: "Free Express",
    subtitle: "Delivery",
    inner: "FREE",
    innerClass: "left-[24px] top-[13px] text-[10px]",
  },
  {
    icon: "/icons/4.svg",
    title: "7-day",
    subtitle: "Replacement",
  },
  {
    icon: "/icons/3.svg",
    title: "ToP",
    subtitle: "Top Brand",
  },
  {
    icon: "/icons/2.svg",
    title: "Cash/Pay on",
    subtitle: "Delivery",
    inner: "$",
    innerClass: "left-[20px] top-[22px] text-[16px] rotate-[20deg]",
  },
];

export default function Features() {
  return (
    <section className="mt-32 mb-27 w-full bg-white">
      <div className="mx-auto w-[1105px]">

        {/* FEATURES */}

        <div className="flex h-[100px] items-center justify-between">

          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-[18px]"
            >

              {/* ICON */}

              <div className="relative h-[50px] w-[50px] shrink-0">

                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="h-full w-full object-contain"
                />

                {/* INNER CONTENT */}

                {feature.inner && (
                  <span
                    className={`
                      absolute
                      z-10
                      font-roboto
                      font-bold
                      leading-none
                      text-white
                      ${feature.innerClass}
                    `}
                  >
                    {feature.inner}
                  </span>
                )}

              </div>

              {/* TEXT */}

              <div
                className="
                  flex
                  flex-col
                  font-roboto
                  leading-[1.2]
                "
              >
                <span
                  className="
                    text-[16px]
                    font-bold
                    text-black
                  "
                >
                  {feature.title}
                </span>

                <span
                  className="
                    text-[16px]
                    font-normal
                    text-black
                  "
                >
                  {feature.subtitle}
                </span>
              </div>

            </div>
          ))}

        </div>

        {/* DIVIDER */}

        <div className="h-px w-[1100px] bg-[#D9D9D9]" />

      </div>
    </section>
  );
}