import Link from "next/link";
import React from "react";
import SocialIcon from "./SocialIcon";

const Footer = () => {
  return (
    <footer className="relative py-8 mt-8 border-t-[1px] border-t-grayBg bg-bg z-40">
      <div className="main-container">
        <h2 className="text-2xl font-extralight text-center mb-4">STATEMENT</h2>

        <div className="flex">
          <div className="flex-1">
            <h3 className="font-bold mb-2">O statements</h3>
            <p className="text-sm text-proseText">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptatum rem sed suscipit voluptatem tenetur explicabo cum
              assumenda exercitationem repellendus non.
            </p>
          </div>
          <div className="flex flex-col items-center flex-1">
            <h3 className="font-bold mb-2">Navigace</h3>
            <ul className="">
              <li className="transition-all hover:text-lightGreen">
                <Link href="/o-nas">O nás</Link>
              </li>
              <li className="transition-all hover:text-lightGreen">
                <Link href="/team">Tým</Link>
              </li>
              <li className="transition-all hover:text-lightGreen">
                <Link href="/kontekt">Kontakt</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center space-y-2 flex-1">
            <h3 className="font-bold mb-2">Spojte se s námi</h3>
            <div className="flex items-center justify-center space-x-8">
              <SocialIcon type="facebook" size="xl" />
              <SocialIcon type="instagram" size="xl" />
              <SocialIcon type="linkedin" size="xl" />
            </div>
            <div className="flex items-center space-x-4 transition-all hover:text-lightGreen cursor-pointer">
              <i className="fas fa-phone"></i>
              <p>(+420) 737 951 560</p>
            </div>
            <div className="flex items-center space-x-4 transition-all hover:text-lightGreen cursor-pointer">
              <i className="fas fa-envelope"></i>
              <p>info@statements.cz</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <p className="text-sm text-proseText">
            Statements 2022 &copy; Všechna práva vyhrazena
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
