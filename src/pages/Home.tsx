
import "../index.css";
import HeroSection from "./component/HeroSection";
import Navbar from "./component/Navbar";


export default function Home() {
  return (
    <>
     {/* section Navbar  */}
     <Navbar />

      {/* section HeroBanner  */}
     <HeroSection />

     
    </>
  );
}
