import React from "react";

const NormalButton = ({ children, handleClick, size }) => {
  if (handleClick) {
    return (
      <button
        onClick={handleClick}
        className={`border-2 text-${size} border-lightGreen rounded-md py-2 px-4 text-lightGreen hover:bg-lightGreen hover:text-bg transition-all font-bold`}
      >
        {children}
      </button>
    );
  } else {
    return (
      <button
        className={`border-2 text-${size} border-lightGreen rounded-md py-2 px-4 text-lightGreen hover:bg-lightGreen hover:text-bg transition-all font-bold`}
      >
        {children}
      </button>
    );
  }
};

NormalButton.defaultProps = {
  handleClick: false,
  size: "base",
};

export default NormalButton;
