import React, { useState } from "react";
import burger from "../../assets/burger.jpg";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import Button from "../Button";

const ItemCard = ({ onItemCountChange }) => {
  const [itemCount, setItemCount] = useState(1);

  const increaseCount = (e) => {
    e.preventDefault();
    setItemCount(itemCount + 1);
  };

  const decreaseCount = (e) => {
    e.preventDefault();
    if (itemCount === 0) {
      return;
    }
    setItemCount(itemCount - 1);
  };

  const handleAddToCart = () => {
    // Call the function to send itemCount to the parent component (Navbar)
    onItemCountChange(itemCount);
  };

  return (
    <div className="w-[250px] h-full bg-gradient-to-br from-primary to-orange-500 rounded-xl p-[2px]">
      <div className="flex flex-col items-center gap-2 bg-white rounded-xl">
        <img
          src={burger}
          alt="burger"
          className="w-[250px] h-[250px] rounded-t-xl"
        />
        <span className="font-bungee">Fraldinha e Costela</span>
        <span className="flex items-center justify-between w-full px-2 text-sm text-gray-800 select-none font-roboto">
          <FaChevronLeft
            className="text-orange-500 cursor-pointer"
            onClick={decreaseCount}
          />
          Quantidade{" "}
          <FaChevronRight
            className="text-orange-500 cursor-pointer"
            onClick={increaseCount}
          />
        </span>
        <span className="text-gray-800 font-bungee">{itemCount}</span>
        <Button
          title="Adicionar ao Carrinho"
          style="primary"
          border="rounded-b-lg"
          onClick={handleAddToCart} // Call handleAddToCart function on button click
        />
      </div>
    </div>
  );
};

export default ItemCard;
