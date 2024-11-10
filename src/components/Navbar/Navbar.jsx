import React from "react";
import Logo from "../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import { CiLogin } from "react-icons/ci";
import "./Nav.css";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Ferramentas",
    link: "/#services",
  },
  {
    id: 3,
    name: "Viagens",
    link: "/#",
  },
  {
    id: 3,
    name: "Esportes",
    link: "/#",
  },
  {
    id: 3,
    name: "Roupas",
    link: "/#",
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: "Melhores notas",
    link: "/#",
  },
  {
    id: 2,
    name: "Mais procurados",
    link: "/#",
  },
];

const Navbar = ({ handleLoginPopup }, {handleSigninPopup}) => {
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      {/* upper Navbar */}
      <div className="white py-2">
        <div className="container flex justify-between items-center">
          <div className="logo-principal">
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img src={Logo} alt="Logo" />
            </a>
          </div>

          {/* search bar */}
          <div className="flex justify-between items-center gap-4">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="Pesquisa"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-green_soft dark:border-gray-500 dark:bg-gray-800  "
              />
              <IoMdSearch className="text-gray-500 group-hover:text-green_soft absolute top-1/2 -translate-y-1/2 right-3" />
            </div>

            {/* login button */}
            <button
              onClick={() => handleLoginPopup()}
              className="bg-gradient-to-r from-green_soft to-dark_green transition-all duration-200 text-white  py-1 px-4 rounded-full flex items-center gap-3 group"
            >
              <span className="group-hover:block hidden transition-all duration-200">
                Entrar
              </span>
              <CiLogin className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>

          </div>
        </div>
      </div>
      {/* lower Navbar */}
      <div data-aos="zoom-in" className="opa">
        <ul className="sm:flex justify-center hidden items-center gap-20">
          {Menu.map((data) => (
            <li key={data.id}>
              <a
                href={data.link}
                className="text-white inline-block px-4 hover:text-dark_green duration-300"
              >
                {data.name}
              </a>
            </li>
          ))}
          {/* Simple Dropdown and Links */}
          <li className="group relative cursor-pointer">
            <a href="#" className="text-white flex items-center gap-[2px] py-2">
              Filtro
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </a>
            <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
              <ul>
                {DropdownLinks.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      className="inline-block w-full rounded-md p-2 hover:bg-green_soft/20 "
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
