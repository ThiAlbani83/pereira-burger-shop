import React from 'react'

const Button = ({title, style}) => {
  return (
    <button className={`${style == 'primary' ? 'bg-primary text-white rounded-lg px-4 py-1' : 'bg-transparent text-primary border-2 border-primary rounded-lg px-4 py-1'}`}>
        {title}
    </button>
  )
}

export default Button