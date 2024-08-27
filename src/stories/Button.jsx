import React from 'react'

const Button = ({
  className,
  primary,
  backgroundColor,
  size,
  label,
  padding,
  margin,
  width,
  height,
  onClick,
  ...props
}) => {
  const baseStyle = 'py-1 bg-rose-400 font-bold border rounded-md text-white duration-100 focus:outline-none focus:ring'

  const sizeStyle = {
    small: 'text-sm py-2 px-4',
    medium: 'text-md py-3 px-6',
    large: 'text-lg py-4 px-8'
  }

  const customStyle = {
    padding: padding ? padding : '',
    margin: margin ? margin : '',
    width: width ? width : '',
    height: height ? height : ''
  }

  return (
    <button
      type="button"
      className={`${baseStyle} ${sizeStyle[size]} ${className}`}
      style={customStyle}
      onClick={onClick}
      {...props}
    >
      {label}
    </button>
  )
}

export default Button
