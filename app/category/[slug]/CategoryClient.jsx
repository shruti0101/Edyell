"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import {
  ChevronDown,
  ChevronUp,
  Grid3X3,
  List,
  ShoppingCart,
  Heart,
  SlidersHorizontal,
} from "lucide-react";

/* =========================================================
   PRODUCTS
========================================================= */

const products = [
  {
    id: 1,
    name: "Motorcycle Helmet Intercom Headset - A1",
    price: 899,
    oldPrice: 999,
    sale: true,
    image: "/products/intercom-a1.png",
  },
  {
    id: 2,
    name: "Motorcycle Helmet Intercom Headset - C6",
    price: 899,
    oldPrice: 999,
    sale: true,
    image: "/products/intercom-c6.png",
  },
  {
    id: 3,
    name: "Motorcycle Helmet Intercom Headset - C6",
    price: 899,
    oldPrice: 999,
    sale: false,
    image: "/products/intercom-c6-black.png",
  },
  {
    id: 4,
    name: "Motorcycle Helmet Intercom Headset - A1",
    price: 899,
    oldPrice: 999,
    sale: true,
    image: "/products/intercom-a1.png",
  },
  {
    id: 5,
    name: "Motorcycle Helmet Intercom Headset - C6",
    price: 899,
    oldPrice: 999,
    sale: true,
    image: "/products/intercom-c6.png",
  },
  {
    id: 6,
    name: "Motorcycle Helmet Intercom Headset - C6",
    price: 899,
    oldPrice: 999,
    sale: false,
    image: "/products/intercom-c6-black.png",
  },
];

/* =========================================================
   FILTERS
========================================================= */

const filterGroups = [
  {
    title: "All Motorcycle",
    options: [
      "All Helmet Headsets",
      "All Intercom Headsets",
      "All Bluetooth Earphones",
      "All Cycling Headsets",
      "All Accessories",
    ],
  },
  {
    title: "Communication Mode",
    options: [
      "Mesh Intercom",
      "Bluetooth Intercom",
      "Group Chat Mode",
    ],
  },
  {
    title: "Number of Users",
    options: ["Unlimited", "Up to 24", "1 : 1"],
  },
  {
    title: "Bluetooth Version",
    options: ["BT 6.0", "BT 5.4", "BT 5.3"],
  },
  {
    title: "Processor Chip",
    options: ["Single-core", "Dual-core"],
  },
  {
    title: "Battery Capacity",
    options: ["1500mAh", "1000mAh", "800mAh"],
  },
  {
    title: "Waterproof Rating",
    options: ["IPX5", "IPX6", "IPX7"],
  },
  {
    title: "Other Functions",
    options: [
      "Audio Mix Mode",
      "Radio Mode",
      "FM Radio",
      "Music Sharing",
      "Dual Phone Connection",
      "Noise Cancelling",
      "LED Light",
    ],
  },
];

/* =========================================================
   FILTER GROUP
========================================================= */

function FilterGroup({ title, options }) {
  const [open, setOpen] = useState(true);

  return (
    <div className="border-b border-[#eeeeee] py-[7px]">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="flex h-[17px] w-full items-center justify-between text-left"
      >
        <span className="text-[10px] font-medium leading-[14px] text-[#333333]">
          {title}
        </span>

        {open ? (
          <ChevronUp className="h-[11px] w-[11px] text-[#333333]" />
        ) : (
          <ChevronDown className="h-[11px] w-[11px] text-[#333333]" />
        )}
      </button>

      {open && (
        <div className="mt-[5px] space-y-[4px] pb-[2px]">
          {options.map((option) => (
            <label
              key={option}
              className="flex h-[13px] cursor-pointer items-center gap-[7px]"
            >
              <input
                type="checkbox"
                className="
                  h-[9px]
                  w-[9px]
                  shrink-0
                  appearance-none
                  rounded-[1px]
                  border
                  border-[#d7d7d7]
                  bg-white
                  checked:border-[#e62b20]
                  checked:bg-[#e62b20]
                "
              />

              <span className="whitespace-nowrap text-[9px] leading-[12px] text-[#999999]">
                {option}
              </span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
}

/* =========================================================
   PRODUCT CARD
========================================================= */

function ProductCard({ product, listView }) {
  if (listView) {
    return (
      <article className="group flex gap-6 border-b border-[#eeeeee] py-5">
        <div className="relative h-[428px] w-[428px] shrink-0 overflow-hidden bg-[#f7f7f7]">
          {product.sale && <SaleRibbon />}

          <button
            type="button"
            className="
              absolute
              right-[14px]
              top-[14px]
              z-20
              flex
              h-[30px]
              w-[30px]
              items-center
              justify-center
              rounded-full
              bg-white
              opacity-0
              shadow-sm
              transition-opacity
              group-hover:opacity-100
            "
          >
            <Heart className="h-[14px] w-[14px] text-[#555]" />
          </button>

          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="428px"
            className="object-contain p-[50px]"
          />
        </div>

        <ProductInfo product={product} />
      </article>
    );
  }

  return (
    <article className="group relative w-[428px]">
      {/* =====================================================
          EXACT 428 x 428 PRODUCT IMAGE
      ===================================================== */}

      <div className="relative h-[428px] w-[428px] overflow-hidden bg-[#f7f7f7]">
        {product.sale && <SaleRibbon />}

        {/* HEART */}
        <button
          type="button"
          className="
            absolute
            right-[14px]
            top-[14px]
            z-20
            flex
            h-[30px]
            w-[30px]
            items-center
            justify-center
            rounded-full
            bg-white
            opacity-0
            shadow-sm
            transition-opacity
            duration-150
            group-hover:opacity-100
          "
        >
          <Heart className="h-[14px] w-[14px] text-[#555555]" />
        </button>

        {/* PRODUCT IMAGE */}

        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="428px"
          priority={product.id <= 2}
          className="
            object-contain
            p-[50px]
            transition-transform
            duration-300
            group-hover:scale-[1.015]
          "
        />
      </div>

      {/* =====================================================
          PRODUCT INFORMATION
      ===================================================== */}

      <ProductInfo product={product} />
    </article>
  );
}

/* =========================================================
   SALE RIBBON
========================================================= */

function SaleRibbon() {
  return (
    <div className="absolute left-0 top-0 z-30">
      {/* Main ribbon */}
      <div
        className="
          flex
          h-[52px]
          w-[80px]
          items-center
          bg-[#e62b20]
          pl-[13px]
          text-[11px]
          font-medium
          leading-none
          text-white
        "
      >
        Sale
      </div>

      {/* Triangle */}
      <div
        className="
          h-0
          w-0
          border-l-[40px]
          border-t-[17px]
          border-l-transparent
          border-t-[#e62b20]
        "
      />
    </div>
  );
}

/* =========================================================
   PRODUCT INFORMATION
========================================================= */

function ProductInfo({ product }) {
  return (
    <div className="w-[428px]">
      {/* HOT */}
      <div className="mt-[7px] text-[8px] font-normal leading-[11px] text-[#e62b20]">
        HOT
      </div>

      {/* NAME */}
      <h3 className="mt-[2px] min-h-[13px] text-[9px] font-medium leading-[13px] text-[#222222]">
        {product.name}
      </h3>

      {/* COLORS */}
      <div className="mt-[7px] flex h-[10px] items-center gap-[7px]">
        <span
          className="
            h-[9px]
            w-[9px]
            rounded-full
            border
            border-[#222]
            bg-[#111]
          "
        />

        <span
          className="
            h-[9px]
            w-[9px]
            rounded-full
            border
            border-[#e62b20]
            bg-white
          "
        />

        <span
          className="
            h-[9px]
            w-[9px]
            rounded-full
            border
            border-[#477cff]
            bg-white
          "
        />
      </div>

      {/* PRICE / CART */}
      <div className="relative mt-[7px] h-[26px]">
        {/* Normal price */}
        <div
          className="
            absolute
            inset-0
            flex
            items-center
            gap-[5px]
            opacity-100
            transition-opacity
            duration-150
            group-hover:opacity-0
          "
        >
          <span className="text-[10px] font-medium leading-none text-[#222222]">
            ${product.price.toFixed(2)}
          </span>

          {product.oldPrice && (
            <span className="text-[7px] leading-none text-[#999999] line-through">
              ${product.oldPrice.toFixed(2)}
            </span>
          )}
        </div>

        {/* Hover cart button */}
        <button
          type="button"
          className="
            absolute
            inset-0
            flex
            h-[26px]
            w-full
            items-center
            justify-center
            gap-[16px]
            bg-[#e62b20]
            text-[9px]
            font-medium
            leading-none
            text-white
            opacity-0
            transition-opacity
            duration-150
            group-hover:opacity-100
          "
        >
          <ShoppingCart className="h-[11px] w-[11px]" />

          <span>${product.price.toFixed(2)}</span>
        </button>
      </div>
    </div>
  );
}

/* =========================================================
   MAIN CATEGORY CLIENT
========================================================= */

export default function CategoryClient({ slug }) {
  const categoryName = decodeURIComponent(slug || "all-motorcycle")
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());

  const [listView, setListView] = useState(false);
  const [sort, setSort] = useState("Date, new to old");
  const [mobileFilters, setMobileFilters] = useState(false);

  /* =======================================================
     SORT PRODUCTS
  ======================================================= */

  const sortedProducts = useMemo(() => {
    const items = [...products];

    if (sort === "Price: low to high") {
      return items.sort((a, b) => a.price - b.price);
    }

    if (sort === "Price: high to low") {
      return items.sort((a, b) => b.price - a.price);
    }

    return items;
  }, [sort]);

  return (
    <main className="min-h-screen bg-white pt-8">
      {/* ===================================================
          HERO
      =================================================== */}

      <section className="mx-auto w-full max-w-[1130px]">
        <div className="relative h-[378px] w-full overflow-hidden">
          <Image
            src="/prodbg.png"
            alt={categoryName}
            fill
            priority
            sizes="1130px"
            className="object-cover"
          />
        </div>
      </section>

      {/* ===================================================
          TOOLBAR
      =================================================== */}

      <section className="mx-auto mt-[9px] w-full max-w-[1130px]">
        <div className="flex h-[32px] items-center border border-[#eeeeee]">
          {/* FILTER */}

          <button
            type="button"
            onClick={() => setMobileFilters((value) => !value)}
            className="
              flex
              h-full
              w-[72px]
              items-center
              gap-[7px]
              border-r
              border-[#eeeeee]
              px-[12px]
              text-[9px]
              text-[#777]
              lg:cursor-default
            "
          >
            <span>Filter</span>

            <ChevronDown className="h-[10px] w-[10px]" />
          </button>

          {/* SORT */}

          <div className="ml-auto flex h-full items-center">
            <select
              value={sort}
              onChange={(event) => setSort(event.target.value)}
              className="
                h-full
                w-[135px]
                appearance-none
                border-0
                bg-white
                px-[8px]
                text-[9px]
                text-[#777]
                outline-none
              "
            >
              <option>Date, new to old</option>
              <option>Price: low to high</option>
              <option>Price: high to low</option>
            </select>

            {/* GRID / LIST */}

            <div className="mr-[7px] flex items-center border-l border-[#eeeeee]">
              <button
                type="button"
                onClick={() => setListView(false)}
                className={`
                  flex
                  h-[30px]
                  w-[27px]
                  items-center
                  justify-center
                  ${
                    !listView
                      ? "text-[#222222]"
                      : "text-[#cccccc]"
                  }
                `}
              >
                <Grid3X3 className="h-[11px] w-[11px]" />
              </button>

              <button
                type="button"
                onClick={() => setListView(true)}
                className={`
                  flex
                  h-[30px]
                  w-[27px]
                  items-center
                  justify-center
                  ${
                    listView
                      ? "text-[#222222]"
                      : "text-[#cccccc]"
                  }
                `}
              >
                <List className="h-[11px] w-[11px]" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          PRODUCTS SECTION
      =================================================== */}

      <section className="mx-auto w-full max-w-[1130px]">
        <div className="flex gap-[24px]">
          {/* =================================================
              SIDEBAR
          ================================================= */}

          <aside
            className={`
              w-[228px]
              shrink-0
              ${
                mobileFilters
                  ? "block"
                  : "hidden lg:block"
              }
            `}
          >
            <div className="w-[228px]">
              {filterGroups.map((group) => (
                <FilterGroup
                  key={group.title}
                  title={group.title}
                  options={group.options}
                />
              ))}
            </div>
          </aside>

          {/* =================================================
              PRODUCT AREA
          ================================================= */}

          <div className="min-w-0 flex-1">
            {/* MOBILE VIEW CONTROLS */}

            <div className="mb-3 flex justify-end gap-1 lg:hidden">
              <button
                type="button"
                onClick={() => setListView(false)}
                className={`p-2 ${
                  !listView ? "bg-gray-100" : ""
                }`}
              >
                <Grid3X3 className="h-4 w-4" />
              </button>

              <button
                type="button"
                onClick={() => setListView(true)}
                className={`p-2 ${
                  listView ? "bg-gray-100" : ""
                }`}
              >
                <List className="h-4 w-4" />
              </button>
            </div>

            {/* =================================================
                DESKTOP PRODUCT GRID

                EXACT:
                428px card
                8px gap
                428px card
            ================================================= */}

            {listView ? (
              <div className="grid grid-cols-1">
                {sortedProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    listView
                  />
                ))}
              </div>
            ) : (
              <div
                className="
                  grid
                  grid-cols-2
                  gap-x-[8px]
                  gap-y-[18px]
                "
              >
                {sortedProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    listView={false}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}