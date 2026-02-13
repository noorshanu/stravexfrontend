/* eslint-disable @next/next/no-img-element */
import Navbar from "./components/Navbar";

import Footer from "./components/Footer";

import HowItWorks from "./components/HowItWorks";
import Hero2 from "./components/Hero2";
import ScrollCards from "./components/ScrollCards";
import CTA from "./components/CTA";
import BlinkingStars from "./components/BlinkingStars";
import WhatIsStravex from "./components/WhatIsStravex";
import BuiltForThinkers from "./components/BuiltForThinkers";

export default function Home() {
  return (
    <>
      <BlinkingStars />
      <div className="relative z-30 ">
        <img src='images/grid.png' alt='' className=' absolute top-0 ' />
      </div>
      <Navbar />
      {/* <Hero /> */}
      <Hero2 />


      <WhatIsStravex />

      <HowItWorks />

      {/* <Aboutus /> */}

      <ScrollCards />

      <BuiltForThinkers />


      <CTA />

      <Footer />
    </>
  );
}
