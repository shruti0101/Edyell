"use client";

import Image from "next/image";


const navItems = [
  "Intercom Headsets",
  "Helmet Bluetooth",
  "Riding Headsets",
  "Accessories",
  "New Arrivals",
  "Bestsellers",
];

export default function Navbar() {
  return (
    <header className="w-full bg-white">
      {/* Offer Bar */}
      <div className="h-[40px] w-full bg-[#DA291C] flex items-center justify-center">
        <p className="text-[14px] font-normal leading-none text-white text-center font-roboto font-weight-400 ">
          Welcome Offer - Rs.100/- Off On Every Purchase !! Use Coupon
          "Welcome"
        </p>
      </div>

      {/* Main Navbar */}
      <nav className="h-[80px] w-full border-b border-[#eeeeee] bg-white">
             <div className="justify-center items-center flex h-full w-full max-w-[1555px] px-[20px] mx-auto gap-[30px]">
          
          {/* Logo */}
          <div className="flex h-full w-[355px]  gap-2 shrink-0 items-center">
            <Image
              src="/navbar/logo.png"
              alt="EDYELL"
              width={52}
              height={53}
              priority
              className=" "
            />

            <svg xmlns="http://www.w3.org/2000/svg" width="229.2049" height="32.7394" viewBox="0 0 230 33" fill="none">
  <path d="M0 0H34.1914V6.92825H8.57276V13.2791H32.6297V19.4942H8.57276V25.913H34.1914V32.7394H0V0Z" fill="black"/>
  <path d="M46.2197 7.47164V25.3017H65.0931C68.881 25.3017 69.6453 22.7885 69.6453 19.5621V14.6716C69.6453 13.1093 69.612 11.8867 69.5124 11.0377C69.2798 8.62635 67.3526 7.43768 65.1263 7.43768H46.2529L46.2197 7.47164ZM37.6802 0H67.7845C73.832 0 78.8826 3.6679 78.8826 10.2565V21.0564C78.8826 28.7319 75.5266 32.7394 67.9507 32.7394H37.6802V0Z" fill="black"/>
  <path d="M79.3813 0H90.0807L101.544 14.1961L112.709 0H123.375L105.664 21.7017V32.7394H97.0585V21.7017L79.3813 0Z" fill="black"/>
  <path d="M126.199 0H160.39V6.92825H134.771V13.2791H158.828V19.4942H134.771V25.913H160.39V32.7394H126.199V0Z" fill="black"/>
  <path d="M164.079 0H172.784V25.3017H194.715V32.6375H164.079V0Z" fill="black"/>
  <path d="M198.569 0H207.275V25.3017H229.205V32.6375H198.569V0Z" fill="black"/>
</svg>
          </div>

          {/* Navigation Links */}
          <div className="flex h-full flex-1 items-center justify-between">
            {navItems.map((item) => (
       <a
  key={item}
  href="#"
  className="
    whitespace-nowrap
    text-[16px]
    font-medium
    font-roboto
    text-black
  "
>
 


                {item}
              </a>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex h-full w-[260px] shrink-0 items-center justify-end gap-[40px]">
            
            {/* Search */}
         <button
  type="button"
  aria-label="Search"
  className="flex  items-center justify-center "
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="21"
    height="21"
    viewBox="0 0 18 18"
    fill="none"
    aria-hidden="true"
  >
    <circle
      cx="8"
      cy="8"
      r="6.5"
      stroke="#000"
      strokeWidth="2px"
    />
    <path
      d="M13 13L17 17"
      stroke="#000"
      strokeWidth="2px"
      strokeLinecap="round"
    />
  </svg>
</button>


            {/* Account */}
            <button
              type="button"
              aria-label="Account"
              className="flex h-[7px] w-[18px] items-center justify-center text-black"
            >

              <div className="flex flex-col items-center justify-center gap-[2px]">
           <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
  <circle cx="5" cy="5" r="4" stroke="black" stroke-width="2"/>
</svg>
             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="9" viewBox="0 0 20 9" fill="none">
  <path d="M19 8V5C19 2.79086 17.2091 1 15 1H5C2.79086 1 1 2.79086 1 5V8" stroke="black" stroke-width="2" stroke-linecap="round"/>
</svg>

              </div>
   
            </button>

            {/* Cart */}
            <button
              type="button"
              aria-label="Cart"
              className="
                flex
                h-[28px]
                w-[56px]
                items-center
                justify-center
                bg-[#DA291C]
                text-white
              "
            >
              <Image src="/navbar/shop.png" alt="Cart" width={22} height={18} />
               
             
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}