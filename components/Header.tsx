import React, { useState } from "react";
// import Hamburger from "./Hamburger";
import Link from "next/link";
import { Sling as Hamburger } from "hamburger-react";
import { useNav } from "../contexts/NavContext";

const Header = ({ absolute }) => {
  const [navOpen, setNavOpen] = useNav();
  return (
    <header
      className={`${
        absolute ? "absolute" : "relative"
      } top-0 w-full z-40 border-b-[1px] text-white border-gray-700`}
    >
      <div className="main-container items-center flex justify-center py-4 ">
        <div className="absolute left-0">
          <Hamburger toggled={navOpen} toggle={setNavOpen} rounded />
        </div>
        <Link href="/">
          <h2
            onClick={() => setNavOpen(false)}
            className="text-3xl font-extralight cursor-pointer"
          >
            statement
          </h2>
        </Link>
      </div>
    </header>
  );
};

Header.defaultProps = {
  absolute: false,
};

export default Header;
