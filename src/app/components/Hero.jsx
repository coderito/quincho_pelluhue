import React from "react";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "800"],
});

export default function Hero() {
  return (
    <div className="pt-28  lg:pt-32  flex items-center justify-center h-full bg-[url('/img/inicio/bg.jpg')]">
      <section>
        <div className="grid max-w-screen-lg mx-auto lg:grid-cols-12">
          <div className="mr-auto place-self-center flex flex-col gap-4 lg:col-span-7">
            <div className="flex items-center px-2 md:px-0 mt-12">
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
              <p className="tracking-widest uppercase text-sm text-gray-800">
                Nuestro restaurant
              </p>
            </div>

            <div className={playfair.className}>
              <div className="flex flex-col">
                <h1 className="max-w-2xl px-4 text-orange-600 md:px-0 font-extrabold tracking-wider leading-none text-5xl xl:text-6xl">
                  EL QUINCHO
                </h1>
              </div>
            </div>

            <div>
              <p className="mb-6 font-medium pt-5 tracking-wider [word-spacing:0.2rem] text-sm px-4 md:px-0 md:pr-24">
                Años de dedicación en la búsqueda de una identidad propia nos
                permiten compartir nuestra exquisita variedad gastronómica y
                compartir la experiencia de nuestro aprendizaje. En nuestro
                Restorán podrá degustar de la mas fresca y sabrosa cocina de
                nuestro mar en sus recorridos por nuestro litoral. Esta tierra
                es tierra que encanta especialmente por la acogida de su gente.
                Queremos que tu estadía sea una hermosa experiencia de descanso
                y un buen recuerdo que te invite siempre a volver.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <img
              src="img/inicio/hero.jpg"
              alt="mockup"
              className="rounded-sm object-cover h-96 shadow-xl"
            />
          </div>
        </div>
        <div className="lg:text-center flex items-center justify-center">
          <button className="bg-yellow-500  hover:bg-yellow-400 transition duration-300 ease-in-out md:w-7/12 py-4 my-12 w-3/4 rounded-sm shadow-md uppercase text-sm shadow-gray-900">
            Ver Carta
          </button>
        </div>
      </section>
    </div>
  );
}
