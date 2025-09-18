// import heriImage from "../../assets/img/heroVideo.svg";
import heriVideo from "../../assets/img/heriVideo.mp4";
import franceLogo from "../../assets/img/france.svg";

export default function HeroSection() {
  return (
    <section>
      <div className="relative min-h-screen bg-cover bg-center flex items-center justify-center text-white">
        {/* Vidéo en background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src={heriVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Bloc central */}
        <div className="relative flex flex-col items-center text-center px-4 space-y-4 fontTartuffo pt-[54vh] md:pt-[58vh] lg:pt-[63vh]">
          {/* Texte haut */}
          <h2 className="text-base md:text-xl font-light text-neutral-800">
            the french tototte
          </h2>

          {/* Drapeau */}
          <div>
            <img src={franceLogo} alt="France" className="h-3 w-auto" />
          </div>

          {/* Texte principal */}
          <h1 className="text-xl md:text-5xl lg:text-4xl font-bold text-neutral-900 leading-snug">
            pour ceux qui osent <br /> être différents
          </h1>

          {/* Lien découvrir */}
          <a
            href="#"
            className="text-neutral-800 text-sm underline-none hover:text-blue-500 transition mt-4"
          >
            découvrir
          </a>
        </div>
      </div>
      <div className="absolute top-190 left-0 w-full h-[220px] z-10 pointer-events-none">
        {/* Dégradé transparent vers blanc */}
        <div className="w-full h-full bg-gradient-to-b from-transparent via-[#faf6f3]/60 to-[#faf6f3]"></div>

        {/* Halo lumineux subtil */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[600px] h-[200px] rounded-full bg-white/40 blur-3xl opacity-30"></div>
      </div>
      <div className="relative h-[200px] bg-[#faf6f3]"></div>
    </section>
  );
}
