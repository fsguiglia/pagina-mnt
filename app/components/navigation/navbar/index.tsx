import React from "react";
import { usePathname } from "next/navigation";
import { useScrollDirection } from "./scroll";
import Link from "next/link";
import Logo from "./Logo";

const Navbar = ({ toggle }: { toggle: () => void }) => {
  const pathname = usePathname();
  const scrollDirection = useScrollDirection();
  
  return (
    <div className={`w-full h-20 2xl:h-28 bg-white sticky z-10 block ${ scrollDirection === "hide" ? "-top-20 opacity-20" : "top-0 opacity-100"} transition-all duration-500`}>
      <div className="px-12 h-full">
        <div className="flex items-center w-full h-full columns-2">
          <div className="w-full">
            <Logo path="pathname"/>
          </div>
          <div className="w-full float-right">
            <ul className="hidden md:flex gap-x-6 text-black text-l 2xl:text-2xl float-right">
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
            <div className={pathname == "/" ? "block" : "hidden"}>
              <button
                type="button"
                className="inline-flex items-center float-right md:hidden"
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;