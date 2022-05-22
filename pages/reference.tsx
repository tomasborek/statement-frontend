import React, { useState } from "react";
//Components
import Header from "../components/Header";
import Footer from "../components/Footer";
import LogoHeading from "../components/LogoHeading";
//Others
import { getReferences } from "../lib/api";
import Link from "next/link";
import Head from "next/head";

const References = ({ references }) => {
  return (
    <>
      <Head>
        <title>Reference | Statements</title>
      </Head>
      <div className="min-h-screen bg-bg text-white green-gradient">
        <Header />
        <LogoHeading>Reference</LogoHeading>
        <div className="min-h-screen main-container">
          <div className="sm:grid grid-cols-2 md:grid-cols-3">
            {references.map((reference, index) => (
              <Reference
                name={reference.fields.name}
                img={reference.fields.logo.fields.file.url}
                category={reference.fields.category}
                link={reference.fields.link}
                key={index}
              />
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default References;

const Reference = ({ name, img, category, link }) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="m-4 relative cursor-pointer group bg-bg rounded-lg overflow-hidden"
    >
      <Link href={link} passHref>
        <a target={"_blank"}>
          <img
            className="min-w-full min-h-full rounded-lg z-10"
            src={img}
            alt={name}
          />
          <div className="p-4 trasnition-all rounded-lg absolute bottom-0 z-30 right-2 text-right">
            <p className="text-proseText font-extralight text-sm">{name}</p>
            <h3 className="font-bold text-xl"> {category}</h3>
          </div>
          <div className="absolute transition-all duration-500 top-0 bottom-0 w-full z-20 black-gradient group-hover:opacity-60"></div>
        </a>
      </Link>
    </div>
  );
};

export async function getStaticProps() {
  const references = await getReferences();
  return {
    props: {
      references,
    },
  };
}
