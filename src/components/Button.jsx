import React from 'react'

const Button = ({ bgColor, color, size, text, borderRadius, padding}) => {
  return (
    <button
    type="button"
    style={{ backgroundColor: bgColor, color, borderRadius}}
    className={`text-${size}, p-${padding}`}
    >
      {text}
    </button>
  )
}

export default Button