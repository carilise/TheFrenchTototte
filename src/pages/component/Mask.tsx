import mask from "../../assets/img/mask.svg";
export default function () {
  return (
    <section className="relative ">
      <div className="absolute top-[0%] left-1/2 transform -translate-x-1/2 z-10">
        <img
          src={mask}
          alt="Technologie Plug'n'Tote"
          className="w-[600px] md:w-[800px] h-auto"
        />
      </div>
      <div className="absolute top-[13%] left-1/2 transform -translate-x-1/2 z-0 w-[620px] h-[620px] rounded-full bg-[#eee7e2] blur-2xl"></div>


      <div className=" w-full h-[480px] bg-[#faf6f3] flex justify-center "></div>

      {/* Partie droite - 65% */}
      <div className="w-full  h-[1000px] bg-card-gris flex flex-col  px-136 py-10 relative">
        <div className="mt-35">
          <h3 className="text-xl md:text-5xl font-bold text-neutral-800 mb-6 tracking-wide">
            technologie <br /> plug’n’tote
          </h3>
        </div>

        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <p className="text-sm text-neutral-700 leading-relaxed">
              La tototte est équipée de la{" "}
              <span className="text-[#30171B] font-bold">technologie</span>{" "}
              <br />
              <span className="text-[#30171B] font-bold">plug'n'tote</span> ,
              permettant de changer de <br /> plug à volonté, offrant ainsi un
              accès à <br />
              <span className="text-[#30171B] font-bold">
                une gamme infinie de saveurs de
              </span>
              <br /> <span className="text-[#30171B] font-bold">suçotage</span>{" "}
              pour satisfaire tous les goûts.
            </p>
            <p className="text-sm text-neutral-700 leading-relaxed">
              Cette technologie vous permet de <br /> changer votre outil de
              travail pour <br />{" "}
              <span className="text-[#30171B] font-bold">
                {" "}
                voyager du cloud des tiers.
              </span>
            </p>
          </div>
        </div>

        {/* Lien en bas */}
        <a
          href="#"
          className="mt-18 text-lg text-center  hover:text-primary underline-none hover:text-accent transition duration-200"
        >
          → découvrir les saveurs
        </a>
      </div>
    </section>
  );
}
