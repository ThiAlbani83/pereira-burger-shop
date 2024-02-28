import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const MenuMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  return (
    <div className="z-10">
      <GiHamburgerMenu
        size={24}
        className="z-20 text-red-600"
        onClick={handleOpen}
      />
      <div
        className={
          isOpen
            ? "fixed text-gray-300 right-0 top-0 w-full h-screen bg-red-400/10 backdrop-blur-md px-4 py-7 flex flex-col -z-10 ease-in duration-300"
            : "hidden"
        }
      >
        <ul className="flex flex-col items-center justify-center h-full text-base font-medium text-red-600 gap-14 font-roboto">
          <li>Home</li>
          <li>Produtos</li>
          <li>Assinaturas</li>
          <li>Sobre Nós</li>
          <li>Contato</li>
        </ul>
      </div>
    </div>
  );
};

export default MenuMobile;
