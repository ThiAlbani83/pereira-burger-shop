import React, { useState } from "react";
import burger from "../../assets/burger.jpg";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import Button from "../Button";

const ItemCard = ({ onItemCountChange, title, img}) => {
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
    onItemCountChange(itemCount);
  };

  return (
    <div className="w-[250px] h-full bg-gradient-to-br from-primary to-orange-500 rounded-xl p-[2px] shadow-md shadow-primary/65">
      <div className="flex flex-col items-center gap-2 bg-white rounded-xl">
        <img
          src={img}
          alt={title}
          className="w-[250px] h-[250px] rounded-t-xl"
        />
        <span className="font-bungee">{title}</span>
        <span className="flex items-center justify-between w-full px-2 py-2 text-sm text-gray-800 border-t border-b select-none font-roboto border-primary">
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
          onClick={handleAddToCart}
        />
      </div>
    </div>
  );
};

export default ItemCard;
