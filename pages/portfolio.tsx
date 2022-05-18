import React from "react";
//Next
import Head from "next/head";
import Link from "next/link";
//Components
import Footer from "../components/Footer";
import Header from "../components/Header";
import LogoHeading from "../components/LogoHeading";
import NormalButton from "../components/NormalButton";
import { getProjects } from "../lib/api";
//Help
import { pnp } from "../lib/inputs";
const Portfolio = ({ projects }) => {
  return (
    <>
      <Head>
        <title>Naše projekty | Statements</title>
      </Head>
      <div className="bg-bg min-h-screen text-white green-gradient">
        <Header />
        <LogoHeading>Naše projekty</LogoHeading>
        <div className="main-container min-h-screen">
          {projects.map((project, index) => (
            <Project
              name={project.fields.title}
              description={project.fields.description}
              img={project.fields.image.fields.file.url}
              key={index}
              alternative={index % 2}
              link={project.fields.link}
            />
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
};

const Project = ({ img, name, description, alternative, link }) => {
  return (
    <Link href={link ? link : "/"} passHref>
      <a target={"_blank"}>
        <div
          className={`flex flex-col justify-start md:justify-between mb-12 md:gap-8 items-center ${
            alternative ? "md:flex-row-reverse" : "md:flex-row"
          }`}
        >
          <div>
            <h2 className="font-bold text-2xl mb-4">{name}</h2>
            <div
              className="text-proseText mb-4"
              dangerouslySetInnerHTML={{
                __html: pnp(description),
              }}
            ></div>
            <NormalButton size="sm">Zobrazit projekt</NormalButton>
          </div>
          <div className="relative pb-4 w-full">
            <img
              src={img}
              className="min-w-full md:min-w-[500px] h-[300px] object-cover rounded-lg relative z-20 mt-4 md:mt-0"
              alt={name}
            />
            <div className="hidden md:block w-[500px] h-[300px] bg-grayBg rounded-lg absolute top-4 left-4 z-10"></div>
          </div>
        </div>
      </a>
    </Link>
  );
};
Project.defaultProps = {
  alternative: false,
};

export default Portfolio;

export async function getStaticProps() {
  const projects = await getProjects();
  return {
    props: {
      projects: projects,
    },
  };
}
