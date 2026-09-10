"use client";

import Image from "next/image";

const products = [
  {
    name: "EDYELL C5S Bluetooth Dual Earphone for Helmet",
    image: "/prod1.png",
    price: "₹1,749.00",
    oldPrice: "₹2499.00",
    reviews: "1403 reviews",
    rating: 5,
    hot: true,
  },
  {
    name: "EDYELL C5S Bluetooth Dual Earphone for Helmet",
   image: "/prod1.png",
    price: "₹1,749.00",
    oldPrice: "₹2499.00",
    reviews: "532 reviews",
    rating: 4,
  },
  {
    name: "EDYELL C5S Bluetooth Dual Earphone for Helmet",
   image: "/prod1.png",
    price: "₹1,749.00",
    oldPrice: "₹2499.00",
    reviews: "468 reviews",
    rating: 4,
    hot: true,
    active: true,
  },
  {
    name: "EDYELL C5S Bluetooth Dual Earphone for Helmet",
    image: "/prod1.png",
    price: "₹1,749.00",
    oldPrice: "₹2499.00",
    reviews: "120 reviews",
    rating: 4,
    newRelease: true,
  },
];

export default function RidingBluetoothHeadset() {
  return (
    <section className="w-full bg-[#EDEFF4] py-[100px] pb-59">

      {/* Heading */}
      <div className="mb-[58px] text-center">
        <h2 className="heading-size">
          Riding Bluetooth Headset
        </h2>

        <p className="mt-[10px] text-[24px] font-medium text-black">
          Clear sound, stable connection
        </p>
      </div>

      {/* Cards */}
      <div className="mx-auto flex w-fit gap-[17px]">

        {products.map((product, index) => (
          <ProductCard
            key={index}
            product={product}
          />
        ))}

      </div>
    </section>
  );
}


/* Product Card */

function ProductCard({ product }) {
  return (
    <div
      className={`
        relative
        h-[521px]
        w-[310px]
        flex-shrink-0
        bg-white
      
      `}
    >

      {/* HOT Ribbon */}
      {product.hot && (
      <div className="absolute left-0 top-0 z-20 h-[64px] w-[62px] overflow-hidden">
  {/* SVG Ribbon */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="62"
    height="64"
    viewBox="0 0 62 64"
    fill="none"
    className="absolute left-0 top-0"
  >
    <path
      d="M62.0001 6.26644e-05L38 2.45637e-05L6.93385e-05 38L3.5621e-05 64L62.0001 6.26644e-05Z"
      fill="#DA291C"
    />
  </svg>

  {/* HOT Text */}
  <span
    className="
      absolute
      left-[16px]
      top-[16px]
      z-10
     
      -rotate-45
      text-[12px]
      font-normal
      text-white
    "
  >
    HOT
  </span>
</div>
      )}

      {/* Image */}
      <div className="relative h-[310px] pt-15 w-[310px] bg-[#E5E5E5]">

        <Image
          src={product.image}
          alt={product.name}
          width={300}
          height={170}
         
          className="object-contain p-[22px]"
        />

      </div>


  
 {/* Content */}
<div className="relative px-[12px] pt-[5px]">

  {/* New Release */}
  {product.newRelease && (
    <p className=" text-[14px] text-[#DA291C]">
      New Release
    </p>
  )}

  {/* Product Name */}
  <h3 className="min-h-[40px] text-[18px] leading-normal font-roboto text-black">
    {product.name}
  </h3>

  {/* Tags */}
  <div className="mt-[3px] flex flex-wrap gap-[4px]">
    <span className="width-[89px] height-[18px] rounded-[21px] border border-[#B4B4B4] px-2 text-[10px] text-[#979797]">
      IP65 waterproof
    </span>

    <span className="width-[89px] height-[18px] rounded-[21px] border border-[#B4B4B4] px-2 text-[10px] text-[#979797]">
      auto-answer calls
    </span>

    <span className="width-[89px] height-[18px] rounded-[21px] border border-[#B4B4B4] px-2 text-[10px] text-[#979797]">
      Bluetooth 5.6
    </span>
  </div>

  {/* Rating */}
  <div className="mt-[8px] flex items-center gap-[5px]">
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`
            text-[13px]
            width-[14px]
            height-[14px]
            leading-none
            ${
              star <= product.rating
                ? "text-[#FFC23D]"
                : "text-gray-300"
            }
          `}
        >
          ★
        </span>
      ))}
    </div>

    <span className="text-[12px] text-black">
      {product.reviews}
    </span>
  </div>

  {/* Price */}
  <div className="mt-[10px] flex items-center gap-[8px]">
    <span className="text-[16px] font-medium text-black">
      {product.price}
    </span>

    <span className="text-[12px] text-gray-400 line-through">
      {product.oldPrice}
    </span>
  </div>

</div>

{/* Bottom Buttons */}
<div className="absolute bottom-[6px] left-[12px] flex h-[30px] w-[270px]">
  <button
    className="
      flex-1
      bg-[#f32720]
      text-[12px]
      font-normal
      text-white
      hover:bg-[#dc211b]
    "
  >
    Buy Now
  </button>

  <button
    className="
      flex
      w-[67px]
      items-center
      justify-center
      border
      border-[#f32720]
      bg-white
      text-[#f32720]
    "
  >
   <svg xmlns="http://www.w3.org/2000/svg" width="22" height="18" viewBox="0 0 22 18" fill="none">
  <path d="M21.617 0H18.6312C18.4201 0 18.1967 0.168506 18.1328 0.369708L14.3516 12.2984C14.2877 12.5022 14.0618 12.6682 13.8531 12.6682H3.42277C3.21161 12.6682 3.03973 12.8442 3.03973 13.0605V13.5333C3.03973 13.7496 3.21161 13.9257 3.42277 13.9257H14.7395C14.9507 13.9257 15.1741 13.7572 15.2379 13.556L19.0217 1.6247C19.0855 1.42099 19.3114 1.25499 19.5201 1.25499H21.617C21.8281 1.25499 22 1.07894 22 0.862652V0.389828C22 0.176051 21.8281 0 21.617 0ZM5.45826 14.3985C4.48594 14.3985 3.70022 15.2058 3.70022 16.1992C3.70022 17.1952 4.48839 18 5.45826 18C6.42812 18 7.21629 17.1927 7.21629 16.1992C7.21875 15.2058 6.43058 14.3985 5.45826 14.3985ZM12.8096 14.3985C11.8373 14.3985 11.0516 15.2058 11.0516 16.1992C11.0516 17.1952 11.8397 18 12.8096 18C13.7819 18 14.5676 17.1927 14.5676 16.1992C14.5701 15.2058 13.7819 14.3985 12.8096 14.3985ZM15.2723 4.0693C15.2723 4.28559 15.1004 4.46165 14.8893 4.46165H0.383036C0.171875 4.46165 0 4.28559 0 4.0693V3.59648C0 3.38019 0.171875 3.20414 0.383036 3.20414H14.8917C15.1029 3.20414 15.2748 3.38019 15.2748 3.59648L15.2723 4.0693ZM14.6094 6.27749C14.6094 6.49378 14.4375 6.66983 14.2263 6.66983H1.16875C0.957589 6.66983 0.785714 6.49378 0.785714 6.27749V5.80467C0.785714 5.58838 0.957589 5.41232 1.16875 5.41232H14.2288C14.44 5.41232 14.6118 5.58838 14.6118 5.80467L14.6094 6.27749ZM13.858 8.65419C13.858 8.87048 13.6862 9.04653 13.475 9.04653H2.00848C1.79732 9.04653 1.62545 8.87048 1.62545 8.65419V8.18136C1.62545 7.96507 1.79732 7.78902 2.00848 7.78902H13.475C13.6862 7.78902 13.858 7.96507 13.858 8.18136V8.65419ZM13.2 10.8775C13.2 11.0938 13.0281 11.2698 12.817 11.2698H2.64196C2.4308 11.2698 2.25893 11.0938 2.25893 10.8775V10.4046C2.25893 10.1883 2.4308 10.0123 2.64196 10.0123H12.817C13.0281 10.0123 13.2 10.1883 13.2 10.4046V10.8775Z" fill="#DA291C"/>
</svg>
  </button>
</div>
    </div>
  );
}