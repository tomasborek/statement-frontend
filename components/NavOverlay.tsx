import React, { useState } from "react";
import Link from "next/link";
import { useNav } from "../contexts/NavContext";
const NavOverlay = () => {
  const [open, setOpen] = useNav();
  return (
    <div
      className={`fixed ${
        open
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      } top-0 bottom-0 w-full text-white z-30 transition-all overflow-hidden`}
    >
      <div className="green-gradient absolute top-0 bottom-0 w-full z-10"></div>
      <div className="flex justify-center items-center relative h-screen z-20">
        <ul className="text-4xl font-extralight flex flex-col space-y-8">
          <NavItem
            icon={"magnifying-glass"}
            content={"O nás"}
            link="/portfolio"
          />
          <NavItem icon={"users"} content={"Tým"} link="/team" />
          <NavItem icon={"book"} content={"Naše projekty"} link="/portfolio" />
          <NavItem icon={"globe"} content={"Chci web"} link="/web" />
        </ul>
      </div>
    </div>
  );
};

const NavItem = ({ icon, content, link }) => {
  const [open, setOpen] = useNav();
  return (
    <li
      onClick={() => setOpen(false)}
      className="group hover:text-white text-gray-100 transition-all cursor-pointer"
    >
      <Link href={link}>
        <div className="flex">
          <div className="w-[60px] mr-4">
            <i
              className={`text-gray-400 group-hover:text-white fas fa-${icon}`}
            ></i>
          </div>
          <p className="text-gray-400 group-hover:text-white">{content}</p>
        </div>
      </Link>
    </li>
  );
};

export default NavOverlay;
