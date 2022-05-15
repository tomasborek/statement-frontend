import Link from "next/link";
import React from "react";

const SocialIcon = ({ type, size, glowy, link }) => {
  return (
    <Link href={link} passHref>
      <a target={"_blank"}>
        <i
          className={`fab fa-${type} text-${size} cursor-pointer ${
            glowy
              ? "green-shadow text-lightGreen"
              : "hover:text-lightGreen transition-all"
          } `}
        ></i>
      </a>
    </Link>
  );
};

SocialIcon.defaultProps = {
  glowy: false,
  link: "https://instagram.com/statements.cz",
};

export default SocialIcon;
