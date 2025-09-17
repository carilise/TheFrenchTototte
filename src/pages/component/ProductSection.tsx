import transCote from "../../assets/img/transcote.svg";
import image from "../../assets/img/image.svg";
import frame from "../../assets/img/frame.svg";
import imageInovante from "../../assets/img/imageInovante.svg";
import lampes from "../../assets/img/lampes.svg";
import france from "../../assets/img/france.svg";

imageInovante;

export default function ProductSection() {
  return (

    // section md 
    <section className="fontTartuffo relative bg-[#faf6f3] overflow-hidden py-20 px-4 md:px-92">
      {/* Background vertical lines */}
      <div className="absolute inset-0 z-0 bg-lines pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto space-y-6">
        {/* en haut  */}
        <div className="grid grid-cols-13 gap-6">
          {/* Colonne gauche*/}
          <div className="col-span-13 md:col-span-5 rounded-xl shadow-lg overflow-hidden bg-card-gradient flex flex-col justify-between min-h-[320px]">
            <div>
              <img
                src={transCote}
                alt="Élégante et sophistiquée"
                className="w-52 h-72 object mt-12"
              />
            </div>

            <div className="p-6 ">
              <h3 className="text-lg font-bold text-neutral-800 mb-2">
                Élégante et sophistiquée
              </h3>
              <p className="text-sm text-neutral-600">
                Design raffiné et ornements exclusifs pour une expérience de
                vapotage distinguée et élégante.
              </p>
            </div>
          </div>

          {/* Colonne droite*/}
          <div className="col-span-13 md:col-span-8 grid grid-rows-2 gap-6">
            <div
              className="rounded-xl shadow-lg overflow-hidden flex items-center justify-between bg-cover bg-no-repeat bg-left p-6 min-h-[220px]"
              style={{ backgroundImage: `url(${image})` }}
            >
              {/* Texte à droite */}
              <div className="ml-auto max-w-md text-left">
                <h3 className="text-lg font-bold text-neutral-800 mb-2">
                  Personnalisable
                </h3>
                <p className="text-sm text-neutral-600 leading-snug">
                  Ornements et accessoires premium pour <br /> créer une
                  vapoteuse unique qui reflète votre <br /> style personnel.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="rounded-xl shadow-lg overflow-hidden bg-white flex flex-col min-h-[280px] w-full max-w-md">
                {/* Image en haut */}
                <div className="w-full h-[150px]">
                  <img
                    src={frame}
                    alt="Made in France"
                    className="w-full h-full object-container"
                  />
                </div>

                {/* Texte en bas */}
                <div className="px-6 text-start">
                  <h3 className="font-bold text-lg font-title text-neutral-800 mb-2 tracking-wide">
                    made in france
                  </h3>
                  <p className="text-sm font-body text-neutral-600 leading-snug">
                    Savoir-faire français pour une expérience de
                    <br />
                    suçotage authentique et exceptionnelle.
                  </p>
                </div>
              </div>
              <div className="rounded-xl shadow-lg overflow-hidden bg-white flex flex-col justify-between min-h-[280px] w-full max-w-md">
                <div className="p-6 text-start">
                  <h3 className="text-lg font-bold text-neutral-800 mb-2 uppercase tracking-wide">
                    innovante
                  </h3>
                  <p className="text-sm text-neutral-600 leading-snug">
                    Technologies de pointe offrant une expérience de suçotage
                    révolutionnaire et inégalée.
                  </p>
                </div>

                <div className="w-full h-[140px]">
                  <img
                    src={imageInovante}
                    alt="Innovante"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* en bas  */}
        <div className="grid grid-cols-13 gap-6 items-start ">
          <div className="h-full z-full col-span-13 md:col-span-9 rounded-lg shadow-lg bg-[#e3f0f9] flex items-start min-h-[260px] w-full max-w-3xl relative overflow-hidden">
            {/* Texte à gauche */}
            <div className="absolute max-w-md text-start z-10 pt-6 pl-6">
              <h3 className="text-lg font-bold text-neutral-800 mb-2 uppercase tracking-wide">
                savoureuse
              </h3>
              <p className="text-sm text-neutral-700 leading-snug">
                Palette de saveurs exquises pour <br />
                une expérience de suçotage
                <br />
                délicieusement satisfaisante <br /> et immersive.
              </p>
            </div>

            {/* Image à droite, collée au bord */}
            <div className="flex-grow h-full ">
              <img
                src={lampes}
                alt="Savoureuse"
                className="h-[300px] w-[800px] object-container object-right"
              />
            </div>
          </div>

          <div className="h-full z-fullcol-span-13 md:col-span-4 bg-[#ebe0d8] rounded-lg shadow p-6 flex top-0 relative  min-h-[220px] flex-col justify-center items-center text-center w-full max-w-md">
            {/* Icône drapeau en haut à gauche */}
            <div className="absolute top-4 left-4 w-6 h-6">
              <img
                src={france}
                alt="Drapeau français"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Texte principal */}
            <div className="text-start">
              <h3 className="mt-8 text-lg font-bold text-neutral-800 mb-2  tracking-wide">
                hébergement <br /> 100% français
              </h3>
              <p className="text-sm text-neutral-600 leading-snug max-w-xs">
                Notre site web est hébergé en France grâce à notre partenaire
                o2switch.
              </p>
            </div>
          </div>
        </div>
      </div>


      {/* section mobile */}
      
      <div className="relative z-10 max-w-xl mx-auto space-y-6">
        {/* en haut  */}
        <div className="grid grid-cols-1 gap-6">
          {/* Colonne gauche*/}
          <div className="rounded-xl shadow-lg overflow-hidden bg-card-gradient flex flex-col justify-between min-h-[300px]">
            <div>
              <img
                src={transCote}
                alt="Élégante et sophistiquée"
                className="w-52 h-72 object mt-12"
              />
            </div>

            <div className="p-6 ">
              <h3 className="text-xl font-bold text-neutral-800 mb-2">
                Élégante et sophistiquée
              </h3>
              <p className="text-lg text-neutral-600">
                Design raffiné et ornements exclusifs pour une expérience de
                vapotage distinguée et élégante.
              </p>
            </div>
          </div>

          {/* Colonne droite*/}
          <div className="col-span-13 md:col-span-8 grid grid-rows-2 gap-6">
            <div
              className="rounded-xl shadow-lg overflow-hidden flex items-center justify-between bg-cover bg-no-repeat bg-left p-6 min-h-[220px]"
              style={{ backgroundImage: `url(${image})` }}
            >
              {/* Texte à droite */}
              <div className="ml-auto max-w-md text-left">
                <h3 className="text-lg font-bold text-neutral-800 mb-2">
                  Personnalisable
                </h3>
                <p className="text-sm text-neutral-600 leading-snug">
                  Ornements et accessoires premium pour <br /> créer une
                  vapoteuse unique qui reflète votre <br /> style personnel.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="rounded-xl shadow-lg overflow-hidden bg-white flex flex-col min-h-[280px] w-full max-w-md">
                {/* Image en haut */}
                <div className="w-full h-[150px]">
                  <img
                    src={frame}
                    alt="Made in France"
                    className="w-full h-full object-container"
                  />
                </div>

                {/* Texte en bas */}
                <div className="px-6 text-start">
                  <h3 className="font-bold text-lg font-title text-neutral-800 mb-2 tracking-wide">
                    made in france
                  </h3>
                  <p className="text-sm font-body text-neutral-600 leading-snug">
                    Savoir-faire français pour une expérience de
                    <br />
                    suçotage authentique et exceptionnelle.
                  </p>
                </div>
              </div>
              <div className="rounded-xl shadow-lg overflow-hidden bg-white flex flex-col justify-between min-h-[280px] w-full max-w-md">
                <div className="p-6 text-start">
                  <h3 className="text-lg font-bold text-neutral-800 mb-2 uppercase tracking-wide">
                    innovante
                  </h3>
                  <p className="text-sm text-neutral-600 leading-snug">
                    Technologies de pointe offrant une expérience de suçotage
                    révolutionnaire et inégalée.
                  </p>
                </div>

                <div className="w-full h-[140px]">
                  <img
                    src={imageInovante}
                    alt="Innovante"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* en bas  */}
        <div className="grid grid-cols-13 gap-6 items-start ">
          <div className="h-full z-full col-span-13 md:col-span-9 rounded-lg shadow-lg bg-[#e3f0f9] flex items-start min-h-[260px] w-full max-w-3xl relative overflow-hidden">
            {/* Texte à gauche */}
            <div className="absolute max-w-md text-start z-10 pt-6 pl-6">
              <h3 className="text-lg font-bold text-neutral-800 mb-2 uppercase tracking-wide">
                savoureuse
              </h3>
              <p className="text-sm text-neutral-700 leading-snug">
                Palette de saveurs exquises pour <br />
                une expérience de suçotage
                <br />
                délicieusement satisfaisante <br /> et immersive.
              </p>
            </div>

            {/* Image à droite, collée au bord */}
            <div className="flex-grow h-full ">
              <img
                src={lampes}
                alt="Savoureuse"
                className="h-[300px] w-[800px] object-container object-right"
              />
            </div>
          </div>

          <div className="h-full z-fullcol-span-13 md:col-span-4 bg-[#ebe0d8] rounded-lg shadow p-6 flex top-0 relative  min-h-[220px] flex-col justify-center items-center text-center w-full max-w-md">
            {/* Icône drapeau en haut à gauche */}
            <div className="absolute top-4 left-4 w-6 h-6">
              <img
                src={france}
                alt="Drapeau français"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Texte principal */}
            <div className="text-start">
              <h3 className="mt-8 text-lg font-bold text-neutral-800 mb-2  tracking-wide">
                hébergement <br /> 100% français
              </h3>
              <p className="text-sm text-neutral-600 leading-snug max-w-xs">
                Notre site web est hébergé en France grâce à notre partenaire
                o2switch.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    // section mobile 
    
  );
}
