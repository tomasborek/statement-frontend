import Link from "next/link";
import React from "react";
import SocialIcon from "./SocialIcon";

const Footer = () => {
  return (
    <footer className="relative py-8 mt-8 border-t-[1px] border-t-grayBg bg-bg z-40">
      <div className="main-container">
        <h2 className="text-2xl font-extralight text-center mb-4">
          STATEMENTS
        </h2>

        <div className="md:flex space-y-4 md:space-y-0">
          <div className="flex-1">
            <h3 className="font-bold mb-2">O statements</h3>
            <p className="text-sm text-proseText">
              Jsme mladý tým zabývající se (nejen) digitálním marketingem a
              vývojem webů. Vytváříme webové aplikace a projekty, které mají
              smysl. Na vše se díváme moderním a trendy stylem, z online světa
              nám nic neunikne. Vize jsou nekonečné, pojďte je s námi naplnit.
            </p>
          </div>
          <div className="flex flex-col md:items-center flex-1">
            <h3 className="font-bold mb-2">Navigace</h3>
            <ul className="md:text-center">
              <li className="transition-all hover:text-lightGreen">
                <Link href="/team">Tým</Link>
              </li>
              <li className="transition-all hover:text-lightGreen">
                <Link href="/kontakt">Kontakt</Link>
              </li>
              <li className="transition-all hover:text-lightGreen">
                <Link href="/portfolio">Naše projekty</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col md:items-center space-y-2 flex-1">
            <h3 className="font-bold mb-2">Spojte se s námi</h3>
            <div className="flex items-center md:justify-center space-x-8">
              <SocialIcon
                type="instagram"
                size="xl"
                link={"https://www.instagram.com/statements.cz/"}
              />
              <SocialIcon
                link={"https://www.linkedin.com/company/86135628"}
                type="linkedin"
                size="xl"
              />
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
          <p className="text-sm text-proseText text-center">
            Statements 2022 &copy; Všechna práva vyhrazena
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
