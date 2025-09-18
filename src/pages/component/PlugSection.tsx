import pods from "../../assets/img/Pods.svg";
import flou from "../../assets/img/flou.svg";

export default function () {
  return (
    <section className="relative  bg-[#faf6f3] z-10">
      <div className="absolute top-[43%] left-1/2 transform -translate-x-1/2 z-0">
        <img src={flou} alt="" />
      </div>
      <div className="px-120 relative z-10">
        <div className=" w-full max-w-5xl mb-8">
          <img
            src={pods}
            alt="Leg Covers Display"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Texte */}
        <div className="mt-25 grid grid-cols-4 gap-6 items-start px-12">
          <div className="col-span-1 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800">
              30
            </h2>
            <p className=" md:text-lg"> Saveurs disponibles</p>
          </div>

          <div className="col-span-1 space-y-4">
            <h3 className="text-xl md:text-4xl font-bold text-neutral-700">
              11
            </h3>
            <p className=" md:text-lg"> Vertus médicinales </p>
          </div>

          <div className="col-span-2 ">
            <p className="text-sm md:text-lg text-neutral-600 italic max-w-xl ">
              Laissez-vous tenter par les saveurs des différents plugs et
              <span className="font-bold text-neutral-800">
                {" "}
                découvrez un monde de délices
              </span>{" "}
              pour chaque envie.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
