import React from "react";

// eslint-disable-next-line react/prop-types
const Button = ({ innerText, style }) => {
  return (
    <button
      className={`
    w-[150px]
    font-Poppins
    text-[18px]
    font-semibold
    p-2
    bg-red-600
    text-white
    ease-in-out
    duration-300
    hover:bg-red-400
    rounded-[8px]
    ${style}
    `}
    >
      {innerText}
    </button>
  );
};

export default Button;
