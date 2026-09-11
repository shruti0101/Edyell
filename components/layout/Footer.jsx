"use client";

import Image from "next/image";

export default function Footer() {
  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="w-full bg-black text-white">
      {/* Main Footer */}
      <div className="mx-auto flex min-h-[560px] max-w-[1400px] flex-col justify-between px-6 py-[45px] lg:px-[40px]">
        
        {/* Footer Content */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          
          {/* Logo + Information */}
          <div>
            <Image
              src="/edyell-logoo.png"
              alt="Edyell"
              width={105}
              height={105}
              className="mb-[18px] object-contain"
            />

            <h3 className="mb-[12px] text-[16px] font-normal">
              INFORMATION
            </h3>

            <div className="flex flex-col gap-[9px] text-[13px] text-white">
              <a href="#">Privacy policy</a>
              <a href="#">About Us</a>
              <a href="#">Faq</a>
            </div>

            {/* Social Icons */}
            <div className="mt-[16px] flex items-center gap-[15px]">
              <a href="#" aria-label="Facebook">
                <Image
                  src="/fb.png"
                  alt="Facebook"
                  width={26}
                  height={26}
                />
              </a>

              <a href="#" aria-label="Instagram">
                <Image
                  src="/insta.png"
                  alt="Instagram"
                  width={26}
                  height={26}
                />
              </a>

              <a href="#" aria-label="YouTube">
             <Image
                  src="/yt.png"
                  alt="Instagram"
                  width={35}
                  height={35}
                />
              </a>
            </div>
          </div>

          {/* Why Buy From Us */}
          <div>
            <h3 className="mb-[18px] text-[16px] font-normal uppercase">
              WHY BUY FROM US
            </h3>

            <div className="flex flex-col gap-[10px] text-[13px]">
              <a href="#">Shipping Policy</a>
              <a href="#">Refund Policy</a>
              <a href="#">Terms and Conditions</a>
              <a href="#">E-Waste</a>
              <a href="#">Our Dealers</a>
            </div>
          </div>

          {/* My Account */}
          <div>
            <h3 className="mb-[18px] text-[16px] font-normal uppercase">
              MY ACCOUNT
            </h3>

            <div className="flex flex-col gap-[10px] text-[13px]">
              <a href="#">My Account</a>
              <a href="#">Cart</a>
              <a href="#">Shop</a>
              <a href="#">Warranty Registration</a>
              <a href="#">Become A Edyell Dealer</a>
            </div>
          </div>

          {/* Company Details */}
          <div className="text-[13px] leading-normal">
            <h3 className="mb-[5px] uppercase">
              FENMAN TECHNOLOGIES INDIA
              <br />
              PRIVATE LIMITED
            </h3>

            <a
              href="mailto:support@fenman.in"
              className="underline"
            >
              support@fenman.in
            </a>

            <a
              href="tel:+91888726235"
              className="mt-[8px] block underline"
            >
              +91 888726235
            </a>

            <p className="mt-[8px] max-w-[180px]">
              7th Floor, Unit C7-14, B-8 Noida One,
              <br />
              Sector-62, Gautam Buddha Nagar,
              <br />
              Uttar Pradesh, 201309
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-auto pt-[80px]">
          <div className="flex flex-col items-start justify-between gap-5 lg:flex-row lg:items-center">
            
            {/* Copyright */}
            <div className="flex items-center gap-[18px] text-[10px] text-white">
              <span>
                © {new Date().getFullYear()} EDYELL BY FENMAN TECHNOLOGIES PVT. LTD.
              </span>

              <a href="#" className="underline">
                PRIVACY POLICY
              </a>

              <span>|</span>

              <a href="#" className="underline">
                TERMS OF USE
              </a>
            </div>

            {/* Payment Methods */}
            <div className="">
              <Image
                src="/payment.png"
                alt="Payment Methods"
            
                width={400}
                height={106}
                className="h-auto w-full"
              />

         

             

              
            </div>

         
          </div>
        </div>
      </div>
    </footer>
  );
}