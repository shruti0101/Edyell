import React from 'react'
import Image from 'next/image'
const page = () => {
  return (
    <div>
           {/*  HERO  */}
                  <section className="relative h-[180px] w-full overflow-hidden sm:h-[220px] lg:h-[300px]">
                    <Image
                      src="/warranty.png"
                      alt="EDYELL riders"
                      fill
                      priority
                      className="object-cover"
                    />
                  </section>
      
      
                    <section className="px-5 py-[28px] sm:pt-16">
              <h1 className="text-center font-inter text-[68px] font-semibold
       leading-none ">
              Warranty Terms
              </h1>
            </section>




             <main className="w-full bg-white text-black">
      <section className="mx-auto w-full max-w-[1200px] px-[40px] py-[28px]">
        
        {/* TITLE */}
        <h2 className="font-roboto text-[36px] font-semibold leading-[36px]">
          EDYELL Product Warranty Service Policy
        </h2>

        {/* INTRO */}
        <div className="mt-[10px] space-y-[20px] font-roboto text-[20px] font-extralight  text-[#151515] leading-[36px]">
          <p>
           Within the three guarantees validity period, consumers are entitled to repair, replacement and return services in accordance with relevant regulations. Repair, exchange and return shall be processed with the purchase invoice, three guarantees certificate or other valid certificates recognized by EDYELL.
          </p>

          <p>
         If consumers lose the invoice and three guarantees certificate, but can provide valid evidence such as invoice stub or copy of invoice stub to prove that the product is still within the three guarantees validity period, EDYELL will provide corresponding after-sales services.
          </p>

          <p>
          Other terminal products shall be covered by corresponding warranty policies in accordance with relevant national laws. For specific policies, please refer to the warranty information of corresponding products or call EDYELL official service hotline for further details.
          </p>
        </div>

        {/* SECTION I */}
        <section className="mt-[14px]">
          <h2 className="font-roboto text-[26px] font-semibold leading-[36px]">
            I. Warranty Service Terms
          </h2>

          <ol className="mt-[10px] list-decimal pl-[16px] font-roboto text-[20px] font-extralight leading-[36px]">
            <li>
              This service policy only applies to EDYELL products sold through official channels in Chinese Mainland. For products sold by EDYELL authorized third-party distributors, only in-warranty repair service is provided. Please contact the distributor for return and exchange services.
            </li>

            <li>
              For non-artificial damage from the original purchase date, warranty or replacement service is available with valid warranty code and purchase certificate.
            </li>

            <li>
              Within 7 days after purchase, if the product has performance
              failure caused by non-artificial damage, consumers may choose
              return, exchange or free repair.
            </li>

            <li>
              Within 30 days after purchase, if the product has performance
              failure caused by non-artificial damage, consumers may choose
              exchange or free repair.
            </li>

            <li>
              Within 5 years after purchase, if the product has performance
              failure caused by non-artificial damage: the mainboard of the
              main unit enjoys 5-year free repair; accessories (battery,
              housing, headset, base, wiring harness, etc.) enjoy 1-year free
              repair.
            </li>
          </ol>
        </section>

        {/* SECTION II */}
        <section className="mt-[12px]">
          <h2 className="font-roboto text-[26px] font-semibold leading-[36px]">
            II. Circumstances Excluded from Free Return, Exchange and Warranty
            Coverage
          </h2>

          <ol className="mt-[10px] list-decimal pl-[16px] font-roboto text-[20px] font-extralight leading-[36px]">
            <li>The product has exceeded the warranty period.</li>

            <li>
              Damage caused by transportation and loading/unloading during
              return, exchange or repair delivery.
            </li>

            <li>
              The purchase certificate and warranty certificate do not match
              the product, or have been altered.
            </li>

            <li>
              The product nameplate, SN barcode, QR code or anti-disassembly
              label is torn off, damaged or illegible.
            </li>

            <li>
              Product failure or damage caused by failure to install, use,
              maintain and store the product in accordance with the requirements
              of the user manual.
            </li>

            <li>
              Damage caused by external factors or human operation errors,
              including liquid ingress, drop impact, improper input voltage,
              extrusion, mainboard deformation, etc. Obvious physical scratches,
              cracks, broken pins, severe deformation of accessories, broken
              wiring harness, exposed wire cores and other conditions fall
              under this category.
            </li>

            <li>
              Damage caused by unauthorized modification, disassembly or
              maintenance without EDYELL official authorization.
            </li>

            <li>
              Failure or damage caused by force majeure factors (lightning
              strike, flood, fire, earthquake, etc.).
            </li>

            <li>
              Natural wear and tear of the product from normal use.
            </li>

            <li>
              Other circumstances stipulated by relevant laws and regulations.
            </li>
          </ol>
        </section>

        {/* SECTION III */}
        <section className="mt-[12px]">
          <h2 className="font-roboto text-[26px] font-semibold leading-[36px]">
            III. Special Statements
          </h2>

          <ol className="mt-[10px] list-decimal pl-[16px] font-roboto text-[20px] font-extralight leading-[36px]">
            <li>
              All the above warranty terms are only applicable to EDYELL
              products sold in Chinese Mainland (excluding Hong Kong, Macao and
              Taiwan regions of China).
            </li>

            <li>
              EDYELL shall not be liable for any extra commitments made by
              distributors beyond the official warranty terms of EDYELL.
            </li>

            <li>
              EDYELL reserves the right to adjust the service policy within the
              scope permitted by applicable laws.
            </li>
          </ol>
        </section>
      </section>
    </main>
      
    </div>
  )
}

export default page
