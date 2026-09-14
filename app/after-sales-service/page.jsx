import React from 'react'
import Image from 'next/image'
const page = () => {
  return (
    <div>
           {/*  HERO  */}
                  <section className="relative h-[180px] w-full overflow-hidden sm:h-[220px] lg:h-[300px]">
                    <Image
                      src="/after-sales.png"
                      alt="EDYELL riders"
                      fill
                      priority
                      className="object-cover"
                    />
                  </section>
      
      
                    <section className="px-5 py-[28px] sm:pt-16">
              <h1 className="text-center font-inter text-[68px] font-semibold
       leading-none ">
            After-sales Service
              </h1>
            </section>




             <main className="w-full bg-white text-black">
      <section className="mx-auto w-full max-w-[1200px] px-[40px] py-[28px]">
        
        {/* TITLE */}
        <h2 className="font-roboto text-[36px] font-semibold leading-[36px]">
      EDYELL After-sales Service Policy Standard
        </h2>

        {/* INTRO */}
        <div className="mt-[10px]  font-roboto text-[20px] font-extralight  text-[#151515] leading-[36px]">
          <p>
         To guarantee your user experience, EDYELL provides standardized after-sales support for products under warranty. This policy applies to all EDYELL products sold through official channels (including but not limited to main units, microphones, speakers, bases and other components).
          </p>

      
        </div>

        {/* SECTION I */}
        <section className="mt-[14px]">
          <h2 className="font-roboto text-[26px] font-semibold leading-[36px]">
           I. Service Instructions
           
          </h2>

          <ul className="mt-[10px]   font-roboto text-[20px] font-extralight leading-[36px]">
            <li>
            EDYELL after-sales service follows the principle of **Inspection Confirmation & Standard Replacement**, and manual disassembly repair service is not available.
            </li>

            <li>
If EDYELL inspection confirms a non-artificial quality defect within the warranty period, EDYELL will offer replacement of corresponding functional components.            </li>

            <li>
           Replacement is limited to functional parts including but not limited to main units, microphones, speakers and bases. The final replaceable parts are subject to official inspection results.
            </li>


         
          </ul>
        </section>

        {/* SECTION II */}
        <section className="mt-[12px]">
          <h2 className="font-roboto text-[26px] font-semibold leading-[36px]">
        II. Warranty Period
          </h2>

          <ol className="mt-[10px] list-decimal pl-[16px] font-roboto text-[20px] font-extralight leading-[36px]">
            <li>EDYELL products come with a 2-year or 3-year warranty starting from the original purchase date (the exact term shall be subject to the product model manual, outer package or official webpage marking).</li>

            <li>
             Users must provide valid purchase proof and product SN code when submitting an after-sales application.
            </li>

            <li>
          Replaced components inherit the remaining warranty period of the original order; no separate warranty extension will be granted.
            </li>




           
          </ol>
          <p className="text-[20px] mt-10 font-light leading-[24px]">
  Warm Reminder: Please properly keep your purchase invoice, order screenshots and other purchase vouchers to fully enjoy all warranty benefits
</p>
        </section>

        {/* SECTION III */}
        <section className="mt-[12px]">
          <h2 className="font-roboto text-[26px] font-semibold leading-[36px]">
            III. Logistics Cost Regulations
          </h2>

          <ul className="mt-[10px]   font-roboto text-[20px] font-extralight leading-[36px]">
            <li>
             The after-sales service adopts the **Sender Bears Shipping Fee** rule:
            </li>

            <li>
           - Users shall cover all shipping fees when sending defective products back to EDYELL after-sales center.
            </li>

            <li>
            - EDYELL shall bear the return shipping fee only for products that pass inspection and qualify for free component replacement.
            </li>


<p className="text-[20px] mt-10 font-light leading-[24px]">
Note: If a product fails warranty inspection and is returned as original, the return freight shall still be borne by the user.
</p>
            
          </ul>
        </section>
      </section>
    </main>
      
    </div>
  )
}

export default page
