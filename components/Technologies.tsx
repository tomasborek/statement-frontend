import React, { useState } from "react";
import { getTechnologies } from "../lib/api";

const Technologies = ({ technologies }) => {
  const [view, setView] = useState<string>("dev");
  return (
    <div className="my-8">
      <h2 className="font-bold text-2xl mb-4 text-center">
        Technologie, které používáme
      </h2>
      <div className="flex justify-center items-stretch md:items-center py-4 space-x-2 md:space-x-4">
        <div
          className={`flex items-center text-center px-4 text-sm md:text-base py-2 border-2 rounded-lg cursor-pointer transition-all font-bold ${
            view === "dev"
              ? "border-lightGreen text-lightGreen"
              : "border-white"
          }`}
          onClick={() => setView("dev")}
        >
          Development
        </div>
        <div
          className={`flex items-center text-center px-4 text-sm md:text-base py-2 border-2 rounded-lg cursor-pointer transition-all font-bold ${
            view === "marketing"
              ? "border-lightGreen text-lightGreen"
              : "border-white"
          }`}
          onClick={() => setView("marketing")}
        >
          Marketing a design
        </div>
      </div>
      {view == "dev" && (
        <div className="mb-8">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-10">
            {technologies.map((technology, index) => (
              <>
                {technology.fields.category == "dev" && (
                  <Technology
                    title={technology.fields.title}
                    image={technology.fields.image.fields.file.url}
                  />
                )}
              </>
            ))}
          </div>
        </div>
      )}
      {view == "marketing" && (
        <div className="mb-8">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-10">
            {technologies.map((technology, index) => (
              <>
                {(technology.fields.category == "design" ||
                  technology.fields.category == "marketing") && (
                  <Technology
                    title={technology.fields.title}
                    image={technology.fields.image.fields.file.url}
                  />
                )}
              </>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Technologies;

const Technology = ({ image, title }) => (
  <div className="flex flex-col items-center">
    <img
      src={image}
      alt={title}
      className="brightness-0 invert-[1] p-8 aspect-square"
    />
    <p className="text-center">{title}</p>
  </div>
);
