import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Logo from "./Logo";

const Navbar = ({ toggle }: { toggle: () => void }) => {
  const pathname = usePathname();
  
  return (
    <>
      <div className="w-full h-20 bg-white sticky top-0 z-10 block">
        <div className="container mx-auto px-12 h-full">
          <div className="flex justify-between items-center h-full">
            <Logo path="pathname"/>
              <div className={pathname == "/" ? "block" : "hidden"}>
                <button
                  type="button"
                  className="inline-flex items-center md:hidden"
                  onClick={toggle}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#000"
                      d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"
                    />
                  </svg>
                </button>
              <ul className="hidden md:flex gap-x-6 text-black dark:text-black">
                <li>
                  <Link href="#descargas">
                    <p>Descargas</p>
                  </Link>
                </li>
                <li>
                  <Link href="#tutoriales">
                    <p>Tutoriales</p>
                  </Link>
                </li>
                <li>
                  <Link href="#publicaciones">
                    <p>Publicaciones</p>
                  </Link>
                </li>
                <li>
                  <Link href="#contacto">
                    <p>Contacto</p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;