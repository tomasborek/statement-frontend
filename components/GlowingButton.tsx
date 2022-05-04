import Link from "next/link";
import React from "react";

const GlowingButton = ({ children, link, handleClick }) => {
  if (link) {
    return (
      <Link href={link}>
        <button
          className={`group relative bg-lightGreen text-white w-[200px] py-2 rounded-xl hover:shadow-[0_4px_35px_0_rgba(20,117,54)] shadow-[0_4px_35px_0_rgba(19,169,72)] transition-all  overflow-hidden`}
        >
          <div className="absolute group-hover:w-[120%] duration-500 top-0 left-[-5px] bg-darkGreen h-full w-0 z-10 -skew-x-12"></div>
          <p className="relative z-20">{children}</p>
        </button>
      </Link>
    );
  } else if (handleClick) {
    return (
      <button
        onClick={handleClick}
        className={`group relative bg-lightGreen text-white w-[200px] py-2 rounded-xl hover:shadow-[0_4px_35px_0_rgba(20,117,54)] shadow-[0_4px_35px_0_rgba(19,169,72)] transition-all  overflow-hidden`}
      >
        <div className="absolute group-hover:w-[120%] duration-500 top-0 left-[-5px] bg-darkGreen h-full w-0 z-10 -skew-x-12"></div>
        <p className="relative z-20">{children}</p>
      </button>
    );
  }
};

GlowingButton.defaultProps = {
  link: false,
  handleClick: false,
};

export default GlowingButton;
