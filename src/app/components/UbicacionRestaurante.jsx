export default function UbicacionRestaurante() {
  return (
    <div className="container  max-w-screen-lg mx-auto mt-14 md:mt-28">
      <div className="flex flex-col gap-3 md:gap-1 pt-3 p-3 md:p-0">
        <h2 className="text-5xl font-semibold text-orange-500 tracking-wide">Dónde ubicarnos?</h2>
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
            Ven a disfrutar con nosotros, "te esperamos todo el año".
          </p>
        </div>

        <p className="mb-6 font-medium tracking-wider [word-spacing:0.1rem] text-sm text-slate-800">
          Somos el Quincho de Pelluhue, un remanso de paz en plena costa Maulina
          con un entorno rural y a cinco minutos de la playa y de la
          desembocadura del rio Mariscadero.
        </p>
      </div>
      <div className="">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1679178.110221818!2d-72.71136390292385!3d-34.71413929233333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96663128e93f55a5%3A0x24bd0a8ae7fa39cb!2sEl%20Quincho!5e0!3m2!1ses!2scl!4v1685930050939!5m2!1ses!2scl"
          width="800"
          height="900"
          className="w-full h-96 max-w-full"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
