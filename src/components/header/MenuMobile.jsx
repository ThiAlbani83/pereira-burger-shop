import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Button from "../Button";
import { NavLink } from "react-router-dom";

const MenuMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="z-10">
      <GiHamburgerMenu
        size={24}
        className="z-20 text-primary"
        onClick={handleOpen}
      />
      <div
        className={
          isOpen
            ? "fixed text-gray-300 right-0 top-0 w-1/2 h-screen bg-black/90 backdrop-blur-md px-4 py-7 flex flex-col -z-10 ease-in duration-700 shadow-xl rounded-ss-2xl"
            : "absolute translate-x-40 transform-gpu w-0 overflow-hidden"
        }
      >
        <ul className="flex flex-col items-center justify-between h-full py-32 text-base font-medium text-primary gap-14 font-roboto">
          <div className="flex flex-col gap-10">
            <li className="duration-200 cursor-pointer select-none active:scale-95">
              <NavLink to={"/"}>Início</NavLink>
            </li>
            <li className="duration-200 cursor-pointer select-none active:scale-95">
              <NavLink to={"/category/hamburgers"}>Hamburgers</NavLink>
            </li>
            <li className="duration-200 cursor-pointer select-none active:scale-95">
              <NavLink to={"/category/Porções"}>Porções</NavLink>
            </li>
            <li className="duration-200 cursor-pointer select-none active:scale-95">
              <NavLink to={"/category/Bebidas"}>Bebidas</NavLink>
            </li>
            {/*  <li className="duration-200 cursor-pointer select-none active:scale-95">
              Contato
            </li> */}
          </div>

          {/* <li className="flex flex-col gap-2">
            <Button title="Entrar" style="secondary" />
            <a href="#" className="text-[14px] text-primary underline">
              Cadastre-se
            </a>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default MenuMobile;
