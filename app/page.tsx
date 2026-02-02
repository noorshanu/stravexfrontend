import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Aboutus from "./components/Aboutus";
import HowItWorks from "./components/HowItWorks";

import Thinker from "./components/Thinker";
import ScrollCards from "./components/ScrollCards";
import Build from "./components/Build";
import CTA from "./components/CTA";
import BlinkingStars from "./components/BlinkingStars";

export default function Home() {
  return (
    <>
      <BlinkingStars />
      <Navbar />
      <Hero />
      <HowItWorks />
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
