import React from "react";
import { NavLink } from "react-router-dom";

const MenuDesktop = () => {
  return (
    <div>
      <ul className="flex items-center gap-10 text-sm font-medium text-red-600 font-roboto lg:text-base">
        <li className="duration-200 cursor-pointer select-none active:scale-95">
          <NavLink to={"/"}>Início</NavLink>
        </li>
        <li className="duration-200 cursor-pointer select-none active:scale-95">
          <NavLink to={"/hamburgers"}>Hamburgers</NavLink>
        </li>
        <li className="duration-200 cursor-pointer select-none active:scale-95">
          <NavLink to={"/porcoes"}>Porções</NavLink>
        </li>
        <li className="duration-200 cursor-pointer select-none active:scale-95">
          <NavLink to={"/bebidas"}>Bebidas</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default MenuDesktop;
