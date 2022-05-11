import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Logo from "../components/Logo";
const Portfolio = () => {
  return (
    <div className="bg-bg min-h-screen text-white green-gradient">
      <Header />

      <div className="main-container min-h-screen">
        <div className="relative py-14 my-8">
          <Logo absolute center z={10} />
          <h2 className="text-3xl relative w-fu text-center z-20">
            Naše projekty
          </h2>
        </div>
        <h2 className="text-3xl font-bold mb-4">Naše projekty</h2>
        <div className="grid grid-cols-3 gap-4 mb-8">
          <Project
            img={"/img/roomie-project.png"}
            projectName={"Roomie"}
            description={"Moderní sociální síť pro hledání spolubydlení"}
          />
          <Project
            img={"/img/roomie-project.png"}
            projectName={"Athenio"}
            description={"Learningový portál"}
          />
          <Project
            img={"/img/roomie-project.png"}
            projectName={"Athenio"}
            description={"Learningový portál"}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

const Project = ({ img, projectName, description }) => {
  return (
    <div className="cursor-pointer shadow-lg rounded-lg overflow-hidden bg-grayBg">
      <img src={img} alt="" className="opacity-70" />
      <div className="p-4 bg-grayBg text-white">
        <h3 className="font-bold ">{projectName}</h3>
        <p className="text-sm text-proseText">{description}</p>
      </div>
    </div>
  );
};

export default Portfolio;
