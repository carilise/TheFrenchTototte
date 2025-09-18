
import "../index.css";
import HeroSection from "./component/HeroSection";
import Mask from "./component/Mask";
import Navbar from "./component/Navbar";
import PlugSection from "./component/PlugSection";
import ProductSection from "./component/ProductSection";
// import ViergeSection from "./component/ViergeSection";


export default function Home() {
  return (
    <>
     {/* section Navbar  */}
     <Navbar />

      {/* section HeroBanner  */}
     <HeroSection />

     {/* <ViergeSection /> */}

     <ProductSection />

     <Mask />

     <PlugSection />
    </>
  );
}
