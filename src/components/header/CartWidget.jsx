import React from 'react'
import { RiShoppingCartFill } from "react-icons/ri";

const CartWidget = () => {
  return (
    <div>
        <RiShoppingCartFill size={24} className='z-50 duration-150 cursor-pointer text-primary active:scale-95'/>
    </div>
  )
}

export default CartWidget