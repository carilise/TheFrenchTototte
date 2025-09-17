
import "../index.css";
import HeroSection from "./component/HeroSection";
import Navbar from "./component/Navbar";
import ProductSection from "./component/ProductSection";
import ViergeSection from "./component/ViergeSection";


export default function Home() {
  return (
    <>
     {/* section Navbar  */}
     <Navbar />

      {/* section HeroBanner  */}
     <HeroSection />

     <ViergeSection />
     <ProductSection />

     
    </>
  );
}
