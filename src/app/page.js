"use client";

import { useState } from "react";
import AboutSection from "@/components/AboutSection";
import ContactFooter from "@/components/ContactFooter";
import FacilitiesSection from "@/components/FacilitiesSection";
import Footer from "@/components/CopyrightFooter";
import GallerySection from "@/components/GallerySection";
import HeroSection from "@/components/HeroSection";
import MapSection from "@/components/MapSection";
import RoomsSection from "@/components/RoomsSection";
import LoadingAnimation from "@/components/LoadingAnimation";

// import Slider from "react-slick";
// import { baseUrl } from "./config";

// function Fade() {
//   const settings = {
//     dots: true,
//     fade: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     waitForAnimate: false
//   };
//   return (
//     <div className="slider-container">
//       <Slider {...settings}>
//         <div>
//           <img src={baseUrl + "/abstract01.jpg"} />
//         </div>
//         <div>
//           <img src={baseUrl + "/abstract02.jpg"} />
//         </div>
//         <div>
//           <img src={baseUrl + "/abstract03.jpg"} />
//         </div>
//         <div>
//           <img src={baseUrl + "/abstract04.jpg"} />
//         </div>
//       </Slider>
//     </div>
//   );
// }

// export default Fade;

export default function Home() {
  const [showLoading, setShowLoading] = useState(true);

  const handleAnimationComplete = () => {
    setShowLoading(false);
  };

  return (
    <>
      {showLoading && <LoadingAnimation onAnimationComplete={handleAnimationComplete} />}
      <HeroSection />
      <AboutSection />
      <RoomsSection />
      <FacilitiesSection />
      <GallerySection />
      <MapSection />
      <ContactFooter />
      <Footer />
    </>
  );
}
