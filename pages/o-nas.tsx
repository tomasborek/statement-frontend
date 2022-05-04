import React from "react";
//components
import Header from "../components/Header";
const About = () => {
  return (
    <div className="min-h-screen bg-bg text-white">
      <Header />
      <div className="main-container">
        <div className="flex">
          <div>
            <h1 className="text-3xl">O statementu</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              blanditiis molestiae soluta amet culpa accusamus corrupti repellat
              iusto in porro?
            </p>
          </div>
          <div className="relative flex justify-center py-12">
            <img
              className="rotate-[-10deg] max-w-[50%] "
              src="./img/art/web-layout.png"
              alt="Web"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
