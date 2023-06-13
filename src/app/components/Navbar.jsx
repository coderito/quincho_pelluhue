"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";

// fuente
import { Tinos } from "next/font/google";
import Link from "next/link";

const lobster = Tinos({
    subsets: ['latin'],
    weight: ['400'],
  });

export default function Navbar() {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    console.log(menu);
    setMenu(!menu);
  };

  // navigation next router
  const router = useRouter();
  const pathname = usePathname();

  const estilosNavegacion =
    "block hover:underline transition duration-150 ease-in-out cursor-pointer py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent hover:text-orange-400 md:p-0";

  return (
    <>
      <nav className="bg-black border-gray-200 fixed w-full z-50">
        <div className="max-w-screen-lg flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="https://flowbite.com/" className="flex items-center">
            <img
              src="img/icon/logo.png"
              className="h-12 w-12 mr-3 bg-white rounded-full"
              alt="Flowbite Logo"
            />
            <span className={`${lobster.className} self-center hover:text-orange-200
             tracking-wide md:tracking-widest text-sm md:text-lg uppercase whitespace-nowrap text-white`}>
              El Quincho Pelluhue
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            onClick={handleMenu}
            className="inline-flex items-center p-2 ml-3 text-md text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div
            className={`${
              menu ? "" : "hidden"
            } w-full md:block md:w-auto text-center`}
            id="navbar-default"
          >
            <ul className="font-medium text-xs uppercase flex flex-col p-4 md:p-0 mt-4 md:gap-2 gap-3 tracking-wider border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
              <li>
                <Link
                  className={
                    pathname === "/"
                      ? "text-orange-600 cursor-pointer"
                      : estilosNavegacion
                  }
                  aria-current="page"
                  href="/"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  className={
                    pathname === "/menu"
                    ? "text-orange-600 cursor-pointer"
                    : estilosNavegacion
                  }
                  href="/menu"
                >
                  Menú 
                </Link>
              </li>
              <li>
                <Link
                  className={
                    pathname === "/galeria"
                    ? "text-orange-600 cursor-pointer"
                    : estilosNavegacion
                  }
                  href="/galeria"
                >
                  Galería
                </Link>
              </li>
              <li>
                <Link
                  className={
                    pathname === "/casas"
                    ? "text-orange-600 cursor-pointer"
                    : estilosNavegacion
                  }
                  href="/casas"
                >
                  Cabañas
                </Link>
              </li><li>
                <Link
                  className={
                    pathname === "/contacto"
                     ? "text-orange-600 cursor-pointer"
                      : estilosNavegacion
                  }
                  href="/contacto"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
