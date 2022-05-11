import React from "react";
//next
import Link from "next/link";

const Services = ({ services }) => {
  return (
    <div className="mt-8">
      <div className="main-container text-white">
        <h3 className="text-2xl font-bold">Co vám můžeme nabídnout</h3>
        <div className="flex flex-col items-stretch md:grid md:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-4 mt-8">
          {services.map((service, index) => (
            <Service
              icon={service.fields.icon}
              name={service.fields.title}
              description={service.fields.description}
              link={service.fields.link}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;

const Service = ({
  icon,
  name,
  description,
  link,
}: {
  icon: string;
  name: string;
  description: string;
  link: string;
}) => {
  return (
    <Link href={link}>
      <div className="group flex flex-col items-center text-white bg-grayBg rounded-lg py-4 px-8 cursor-pointer">
        <i
          className={`${icon} text-5xl text-lightGreen mb-4 transition-all
           green-shadow`}
        ></i>
        <p
          className={`font-bold text-center mb-2 transition-all group-hover:text-lightGreen`}
        >
          {name}
        </p>
        <p className="text-sm text-center text-proseText">{description}</p>
      </div>
    </Link>
  );
};
