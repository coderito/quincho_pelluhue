import React from "react";

const GalleryFoot = () => {
  return (
    <div className="container grid max-w-screen-xl mx-auto mt-14 md:mt-10">
      <div className="flex flex-col gap-3 md:gap-1 pt-3 p-3 md:p-0">
        <h2 className="text-5xl text-orange-500 font-semibold tracking-wide">
          Delicias Gastronómicas
        </h2>
        <div className="flex items-center">
          <svg
            aria-hidden="true"
            className="w-6 h-6 text-yellow-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <p className="tracking-widest uppercase text-xs">
            Exquisiteses "El Quincho" - Un Festín para los Sentidos".
          </p>
        </div>

        <p className="mb-6 font-medium tracking-wider [word-spacing:0.1rem] text-md md:text-lg text-slate-800">
          En "El Quincho", nuestra pasión por la buena comida se refleja en cada
          plato que servimos. Nuestro menú, cuidadosamente elaborado por
          nuestros talentosos chefs, es un verdadero banquete para los sentidos,
          donde se fusionan sabores auténticos, ingredientes frescos y técnicas
          culinarias excepcionales.
        </p>
      </div>

      <div className="flex items-center justify-center">
        <div className="mt-8 grid grid-cols-2 gap-2 rounded-xl p-2 lg:grid-cols-4 w-full">
          <div className="group relative overflow-hidden rounded-sm ">
            <div className="img-container">
              <img
                src="img/comida/comida1.jpeg"
                className="object-cover object-center w-full h-full cursor-pointer"
                alt="Nasi lemak cover"
                style={{ width: "100%", height: "100%" }}
              />
              <p className="flex justify-center items-center text-md p-2">
                "Deléitate con sabores cautivadores"
              </p>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-sm aspect-w-1 aspect-h-1">
            <div className="img-container">
              <img
                src="img/comida/comida2.jpeg"
                className="object-cover object-center w-full h-full cursor-pointer"
                alt="Nasi lemak cover"
                style={{ width: "100%", height: "100%" }}
              />
              <p className="flex justify-center items-center text-md p-2">
                "Sensaciones culinarias que te envolverán"
              </p>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-sm">
            <div className="img-container">
              <img
                src="img/comida/comida3.jpeg"
                className="object-cover object-center w-full h-full cursor-pointer"
                alt="Nasi lemak cover"
                style={{ width: "100%", height: "100%" }}
              />
              <p className="flex justify-center items-center text-md p-2">
                "Experiencia gastronómica inolvidable"
              </p>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-sm">
            <div className="img-container">
              <img
                src="img/comida/comida4.jpeg"
                className="object-cover object-center w-full h-full cursor-pointer"
                alt="Nasi lemak cover"
                style={{ width: "100%", height: "100%" }}
              />
              <p className="flex justify-center items-center text-md p-2">
                "Saborea la excelencia en cada plato"
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryFoot;
