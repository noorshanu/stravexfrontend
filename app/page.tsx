import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Aboutus from "./components/Aboutus";
import HowItWorks from "./components/HowItWorks";
import Hero2 from "./components/Hero2";
import Thinker from "./components/Thinker";
import ScrollCards from "./components/ScrollCards";
import Build from "./components/Build";
import CTA from "./components/CTA";
import BlinkingStars from "./components/BlinkingStars";
import WhatIsStravex from "./components/WhatIsStravex";

export default function Home() {
  return (
    <>
      <BlinkingStars />
      <div className="relative z-30 ">
           <img src='images/grid.png' alt='' className=' absolute top-0 ' />
      </div>
      <Navbar />
      {/* <Hero /> */}
        <Hero2/>
      <HowItWorks />

      <WhatIsStravex />
      <Aboutus />

      <ScrollCards />
      {/* <CoreProduct /> */}
      <Thinker />

      <Build />

      <CTA />

      <Footer />
    </>
  );
}
