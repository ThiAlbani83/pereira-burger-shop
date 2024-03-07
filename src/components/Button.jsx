import React from 'react'

const Button = ({title, style, border, onClick}) => {
  return (
    <button onClick={onClick} className={`${style == 'primary' ? `bg-gradient-to-tr from-primary to-orange-400 text-white ${border}  px-4 py-1 w-full` : 'bg-transparent text-primary border-2 border-primary rounded-lg px-4 py-1 w-full'}`}>
        {title}
    </button>
  )
}

export default Button