import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Service = ({
  icon,
  name,
  description,
  link,
}: {
  icon: string;
  name: string;
  description: string;
  link: string;
}) => {
  const [hover, setHover] = useState(false);
  return (
    <Link href={link}>
      <div
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className="flex flex-col items-center text-white bg-grayBg rounded-lg py-4 px-8 cursor-pointer"
      >
        <i
          className={`${icon} text-5xl text-lightGreen mb-4 transition-all
           green-shadow`}
        ></i>
        <p
          className={`font-bold text-center mb-2 transition-all ${
            hover ? "text-lightGreen" : ""
          }`}
        >
          {name}
        </p>
        <p className="text-sm text-center text-proseText">{description}</p>
      </div>
    </Link>
  );
};

export default Service;
