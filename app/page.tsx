import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Aboutus from "./components/Aboutus";
import HowItWorks from "./components/HowItWorks";
import CoreProduct from "./components/CoreProduct";
import Thinker from "./components/Thinker";
import ScrollCards from "./components/ScrollCards";

export default function Home() {
  return (
  <>
            <Navbar />
            <Hero />
              <HowItWorks />
            <Aboutus />
          
          <ScrollCards /> 
            {/* <CoreProduct /> */}
            <Thinker />
            <Footer />
    </>
  );
}
