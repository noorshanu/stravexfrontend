import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Aboutus from "./components/Aboutus";
import HowItWorks from "./components/HowItWorks";
import CoreProduct from "./components/CoreProduct";
import Thinker from "./components/Thinker";

export default function Home() {
  return (
  <>
            <Navbar />
            <Hero />
            <Aboutus />
            <HowItWorks />
            <CoreProduct />
            <Thinker />
            <Footer />
    </>
  );
}
