import { Alfa_Slab_One } from "next/font/google";

const alfa_slab_one = Alfa_Slab_One({
  weight: "400",
  subsets: ["latin"],
});

export default function Galeria() {
    return (
      <div className="pt-28  lg:pt-32  h-full  bg-[url('/img/inicio/bg.jpg')]">
      <div className="max-w-screen-xl h-screen mx-auto px-5 xl:px-0">
        <h2
          className={`${alfa_slab_one.className} text-6xl tracking-wider mb-12 text-orange-600`}
        >
          Galeria del restaurant
        </h2>
        <article>
          

        </article>
      </div>
    </div>
    )
}