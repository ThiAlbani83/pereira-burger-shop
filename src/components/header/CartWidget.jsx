import React, { useEffect } from "react";
import { RiShoppingCartFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const CartWidget = () => {  

  return (
    <div>
      <NavLink to={"/cart"}>
        <RiShoppingCartFill
          size={24}
          className="z-50 duration-150 cursor-pointer text-primary active:scale-95"
        />
      </NavLink>
    </div>
  );
};

export default CartWidget;
