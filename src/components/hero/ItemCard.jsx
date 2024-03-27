import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import Button from "../Button";
import { Link, NavLink } from "react-router-dom";

const ItemCard = ({ title, img, link }) => {

  return (
    <div className="w-[250px] h-full bg-gradient-to-br from-primary to-orange-500 rounded-xl p-[2px] shadow-md shadow-primary/65">
      <div className="flex flex-col items-center gap-2 bg-white rounded-xl">
        <img
          src={img}
          alt={title}
          className="w-[250px] h-[250px] rounded-t-xl"
        />

        <span className="font-bungee">{title}</span>
        <NavLink to={link} className="w-full">
          <Button
            title="Comprar Agora"
            style="primary"
            border="rounded-b-lg"
            paddingY="py-2"
          />
        </NavLink>
      </div>
    </div>
  );
};

export default ItemCard;
