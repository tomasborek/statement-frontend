import React from "react";
import Logo from "./Logo";

const LogoHeading = ({ children }) => {
  return (
    <div className="relative py-14 my-8">
      <img
        src="/img/logo/osmicka.svg"
        alt="eight"
        className="max-w-[300px] w-full opacity-40 mb-8 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
      />
      <h1 className="relative text-5xl text-center z-20">{children}</h1>
    </div>
  );
};

export default LogoHeading;
