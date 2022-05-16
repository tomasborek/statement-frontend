import React from "react";

const TeamMember = ({ name, description, img, resize }) => {
  console.log(resize);
  return (
    <div
      className={`group cursor-pointer flex flex-col justify-end opacity-50 hover:opacity-100 relative w-[250px] min-w-[250px] ${
        resize ? "hover:w-[300px]" : ""
      } transition-all duration-500 ${resize ? "pt-[50px] hover:pt-0" : ""}`}
    >
      <div className="flex-1">
        <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 w-full pb-20">
          <h3 className="font-bold text-2xl text-center">{name}</h3>
          <p className="text-center text-proseText">{description}</p>
        </div>
      </div>
      <div className="flex-1 flex justify-center px-4">
        <img
          draggable={"false"}
          src={`./img/team/${img}`}
          className="group-hover:-translate-y-20 select-none  transition-all duration-500 w-full h-auto"
          alt={name}
        />
        <img
          draggable={"false"}
          src="./img/team/hologram.png"
          className="opacity-0 select-none group-hover:opacity-50 absolute w-full bottom-0  transition-all duration-1000 "
          alt=""
        />
      </div>
    </div>
  );
};

TeamMember.defaultProps = {
  resize: false,
};

export default TeamMember;
