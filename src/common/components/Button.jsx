import React from 'react'

const Button = ({ type, onClick, className, children }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`border border-rose-400 bg-rose-400 text-white rounded-md hover:bg-rose-500 duration-100 ${className}`}
    >
      {children}
    </button>
  )
}

export default Button
