import Link from "next/link";
import React from "react";

const SocialIcon = ({ type, size, glowy }) => {
  return (
    <Link href={"https://instagram.com"} passHref>
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
};

export default SocialIcon;
