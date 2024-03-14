import React from 'react'
import { Link } from 'react-router-dom'

const MenuDesktop = () => {
  return (
    <div>
      <ul className='flex items-center gap-6 text-sm font-medium text-red-600 font-roboto lg:text-base'>
        <Link to={'/'}><li className='duration-200 cursor-pointer select-none active:scale-95'>Home</li></Link>
        <li className='duration-200 cursor-pointer select-none active:scale-95'>Produtos</li>
        <li className='duration-200 cursor-pointer select-none active:scale-95'>Assinaturas</li>
        <li className='duration-200 cursor-pointer select-none active:scale-95'>Sobre</li>
      </ul>
    </div>
  )
}

export default MenuDesktop