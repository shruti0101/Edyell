import Image from "next/image";
import Navbar from "@/components/layout/Navbar"
import Hero from "@/components/Herosection";
import Features from "@/components/Features";
import PerfectRide from "@/components/Perfect-ride";
import HotPicks from "@/components/Hotpicks";
import PerfectSound from "@/components/PerfectSound";
import AuthenticReviews from "@/components/AuthenticReviews";
import ReviewsSlider from "@/components/ReviewsSlider";
import Products from "@/components/Products";
import Footer from "@/components/layout/Footer";
export default function Home() {
  return (
   <>
   
   <Navbar></Navbar>
   
   
   <Hero></Hero>

   <Features></Features>
   
<PerfectRide>  </PerfectRide>

<HotPicks></HotPicks>
<PerfectSound></PerfectSound>
<AuthenticReviews></AuthenticReviews>
<ReviewsSlider></ReviewsSlider>
   <Products></Products>
   <Footer></Footer>
   </>
  );
}
