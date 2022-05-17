import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Logo from "../components/Logo";
import LogoHeading from "../components/LogoHeading";
const Portfolio = () => {
  return (
    <div className="bg-bg min-h-screen text-white green-gradient">
      <Header />
      <LogoHeading>Portfolio</LogoHeading>
      <div className="main-container">
        <Project
          name={"Roomie"}
          description={
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Vivamus luctus egestas leo. Aliquam erat volutpat. In sem justo, commodo ut, suscipit at, pharetra vitae, orci. Nam quis nulla. Curabitur bibendum justo non orci. Nullam at arcu a est sollicitudin euismod. Vestibulum fermentum tortor id mi. Maecenas ipsum velit, consectetuer eu lobortis ut, dictum at dui. Mauris metus. Aliquam in lorem sit amet leo accumsan lacinia. Etiam ligula pede, sagittis quis, interdum ultricies, scelerisque eu. Phasellus enim erat, vestibulum vel,"
          }
          img={"roomie.png"}
        />
      </div>
      <Footer />
    </div>
  );
};

const Project = ({ img, name, description, alternative }) => {
  return (
    <div
      className={`flex items-center ${alternative ? "flex-row-reverse" : ""}`}
    >
      <div>
        <h2 className="font-bold text-2xl">{name}</h2>
        <p className="text-proseText">{description}</p>
      </div>
      <div>
        <img
          src={`img/projects/${img}`}
          className="max-w-[500px] w-[500px] h-[500px] object-cover"
          alt={name}
        />
        <div></div>
      </div>
    </div>
  );
};
Project.defaultProps = {
  alternative: false,
};

export default Portfolio;
