import React from 'react'
import Image from 'next/image'
const page = () => {
  return (
    <div>
         {/*  HERO  */}
                  <section className="relative h-[180px] w-full overflow-hidden sm:h-[220px] lg:h-[300px]">
                    <Image
                      src="/contactbg.png"
                      alt="EDYELL riders"
                      fill
                      priority
                      className="object-cover"
                    />
                  </section>
      
      
                    <section className="px-5 py-[28px] sm:pt-16">
              <h1 className="text-center font-inter text-[68px] font-semibold
       leading-none ">
                Contact Us
              </h1>
            </section>
    </div>
  )
}

export default page
