import heriImage from "../../assets/img/heroVideo.svg";
import franceLogo from "../../assets/img/france.svg";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: `url(${heriImage})` }}
    >
      {/* Bloc central */}
      <div className="relative flex flex-col items-center text-center px-4 space-y-4 fontTartuffo pt-[54vh] md:pt-[58vh] lg:pt-[63vh]">
        {/* Texte haut */}
        <h2 className="text-base md:text-lg font-light text-neutral-800">
          the french tototte
        </h2>

        {/* Drapeau */}
        <div>
          <img src={franceLogo} alt="France" className="h-3 w-auto" />
        </div>

        {/* Texte principal */}
        <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-neutral-900 leading-snug">
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
    </section>
  );
}
