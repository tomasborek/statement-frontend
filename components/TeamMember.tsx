import React from "react";

const TeamMember = ({ name, description, img, resize, active, off }) => {
  return (
    <div
      className={`group relative cursor-pointer flex flex-col justify-end w-[250px] min-w-[250px] transition-all duration-500 ${
        resize ? "hover:w-[300px] pt-[50px] hover:pt-0" : ""
      } ${
        active
          ? "opacity-100"
          : !off
          ? "opacity-50 hover:opacity-100"
          : "opacity-50 pointer-events-none"
      }`}
    >
      <div className="flex-1 mb-4">
        <div
          className={`transition-all duration-500 w-full pb-20 ${
            active
              ? "opacity-100"
              : !off
              ? "opacity-0 group-hover:opacity-100"
              : "opacity-0"
          }`}
        >
          <h3 className="font-bold text-2xl text-center">{name}</h3>
          <p className="text-center text-proseText">{description}</p>
        </div>
      </div>
      <div className="flex-1 flex justify-center px-4">
        <img
          draggable={"false"}
          src={`./img/team/${img}`}
          className={`select-none transition-all duration-500 w-full h-auto ${
            active
              ? "-translate-y-20"
              : !off
              ? "group-hover:-translate-y-20"
              : ""
          }`}
          alt={name}
        />
        <img
          draggable={"false"}
          src="./img/team/hologram.png"
          className={`select-none absolute w-full bottom-0 transition-all duration-1000 ${
            active
              ? "opacity-50"
              : !off
              ? "opacity-0 group-hover:opacity-50"
              : "opacity-0"
          }`}
          alt={"Hologram"}
        />
      </div>
    </div>
  );
};

TeamMember.defaultProps = {
  resize: false,
  active: false,
  off: false,
};

export default TeamMember;
