import { useState } from "react";
import { NavLink } from "react-router-dom";

import "./header.component.css";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  return (
    <section className="relative py-2 bg-[#100D3F]">
      <div className="flex items-center justify-between h-20 px-8 mx-auto max-w-7xl">
        <NavLink to="/">
          <span className="sr-only">Workflow</span>
          <img
            className="h-20 w-auto"
            src={require("src/common/images/negative-horizontal.png")}
            alt=""
          />
        </NavLink>

        <nav className="items-center justify-center hidden space-x-8 text-gray-200 md:flex">
          <NavLink
            to="/"
            className="relative inline-block text-base font-bold text-gray-200 uppercase transition duration-150 ease hover:text-white"
          >
            <span className="block">Accueil</span>
            <span className="absolute bottom-0 left-0 inline-block w-full h-1 -mb-1 overflow-hidden">
              {/* <span className={`${isOpen &&'absolute inset-0 inline-block w-full h-full transform border-t-2 border-blue-600'}`}  */}
              {/* ></span> */}
            </span>
          </NavLink>
          <NavLink
            to="/about"
            x-data="{ hover: false }"
            className="relative inline-block text-base font-bold text-gray-200 uppercase transition duration-150 ease hover:text-white"
          >
            <span className="block">à propos</span>
            <span className="absolute bottom-0 left-0 inline-block w-full h-1 -mb-1 overflow-hidden">
              {/* <span className={`${isOpen &&'absolute inset-0 inline-block w-full h-full transform border-t-2 border-blue-600'}`}  */}
              {/* ></span> */}
            </span>
          </NavLink>
          <NavLink
            to="/contact"
            x-data="{ hover: false }"
            className="relative inline-block text-base font-bold text-gray-200 uppercase transition duration-150 ease hover:text-white"
          >
            <span className="block">Contacter</span>
            <span className="absolute bottom-0 left-0 inline-block w-full h-1 -mb-1 overflow-hidden">
              {/* <span className={`${isOpen &&'absolute inset-0 inline-block w-full h-full transform border-t-2 border-blue-600'}`}  */}
              {/* ></span> */}
            </span>
          </NavLink>
          <div className="w-0 h-5 border border-r border-gray-700"></div>
          <NavLink
            to="/login"
            x-data="{ hover: false }"
            className="relative inline-block ml-5 text-base font-bold text-gray-200 uppercase transition duration-150 ease hover:text-white"
          >
            <span className="block">Login</span>
            <span className="absolute bottom-0 left-0 inline-block w-full h-1 -mb-1 overflow-hidden">
              <span className="absolute inset-0 inline-block w-full h-full transform translate-x-0 border-t-2 border-gray-100"></span>
            </span>
            <span className="absolute bottom-0 left-0 inline-block w-full h-1 -mb-1 overflow-hidden">
              {/* <span className={`${isOpen &&'absolute inset-0 inline-block w-full h-full transform border-t-2 border-blue-600'}`}  */}
              {/* ></span> */}
            </span>
          </NavLink>
          <NavLink
            to="/register"
            className="relative px-5 py-2 font-medium text-white group"
          >
            <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-[#BA9672] group-hover:bg-[#977655] group-hover:skew-x-12"></span>
            <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-[#977655] group-hover:bg-[#BA9672] group-hover:-skew-x-12"></span>
            <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-[#a17d5a] -rotate-12"></span>
            <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-[#ddb790] -rotate-12"></span>
            <span className="relative">S'inscrire</span>
          </NavLink>
        </nav>

        {/* Mobile Button */}
        <div
          className="flex items-center justify-center h-full text-white cursor-pointer md:hidden"
          onClick={() => toggle()}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 8h16M4 16h16"
            ></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Header;
