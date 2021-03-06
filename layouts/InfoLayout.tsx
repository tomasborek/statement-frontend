import React, { useState } from "react";
//Components
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhyUs from "../components/WhyUs";
import { motion } from "framer-motion";
import Head from "next/head";
import TeamMember from "../components/TeamMember";
import Link from "next/link";

const InfoLayout = ({ content }) => {
  const {
    title,
    description,
    title2,
    description2,
    expert,
    checkListTitle,
    checkListDescription,
    checkList,
    bannerItems,
  } = content.fields;
  return (
    <>
      <Head>
        <title>{title} | Statement</title>
      </Head>
      <div className="bg-bg min-h-screen relative text-white green-gradient">
        <Header />
        <div className="main-container">
          <section className="mt-8 mb-12 text-">
            <h1 className="text-5xl font-bold text-center mb-8">{title}</h1>
            <p className="text-proseText text-center">{description}</p>
          </section>

          <section className="my-12 relative">
            <h2 className="relative z-20 text-3xl font-bold text-center mb-4">
              {title2}
            </h2>
            <p className="relative z-20 text-center mb-8 text-proseText">
              {description2}
            </p>
            <div className="md:flex items-center justify-center md:divide-x-[1px] md:divide-lightGreenLowOpacity">
              {bannerItems.items.map((item, index) => (
                <BannerItem
                  svg={item.icon == "svg" ? "img/code-circle.svg" : null}
                  icon={item.icon ? item.icon : null}
                  heading={item.heading}
                  description={item.description}
                  key={index}
                />
              ))}
            </div>
          </section>
          {checkList && (
            <section className="my-12 ">
              <h2 className="font-bold text-3xl text-center mb-4">
                {checkListTitle}
              </h2>
              <ul className="flex flex-col items-center space-y-4 list-none p-0">
                {checkList.map((item, index) => (
                  <Step key={index}>{item}</Step>
                ))}
              </ul>
              {checkListDescription && (
                <p className="font-extralight text-proseText text-center mt-4">
                  {checkListDescription}
                </p>
              )}
            </section>
          )}
        </div>
        <div className="main-container">
          {expert === "Pavel Ha??ek" && (
            <Expert
              name="Pavel Ha??ek"
              description={"Marketing specialista"}
              img="pavel_team_holo.png"
            />
          )}
          {expert === "Tom???? Bo??ek" && (
            <Expert
              name="Tom???? Bo??ek"
              description={"V??voj????"}
              img="tomas_team_holo.png"
            />
          )}
          {expert === "Adriana" && (
            <Expert
              name="Adriana haha"
              description={"Design??rka"}
              img="adri_team_holo.png"
            />
          )}
          <WhyUs />
        </div>
        <Footer />
      </div>
    </>
  );
};

const Expert = ({ name, description, img }) => {
  return (
    <Link href="/team">
      <section className=" p-4 rounded-lg  flex flex-col justify-between relative ">
        <h2 className="text-3xl text-center font-bold mb-4">
          Kdo v??s projektem provede?
        </h2>
        <p className="text-center text-proseText mb-4">
          Klikn??te na avatara ??lena t??mu a dozv??te se v??ce.
        </p>

        <div className="flex justify-center">
          <TeamMember name={name} description={description} img={img} active />
        </div>
      </section>
    </Link>
  );
};

const BannerItem = ({ icon, heading, description, svg }) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="p-8 flex flex-col items-center hover:bg-grayBg transition-all cursor-pointer"
    >
      {icon && (
        <motion.i
          initial={{ y: 0 }}
          animate={{ y: hover ? "-5px" : 0 }}
          transition={{ duartion: 1 }}
          className={`${icon} text-lightGreen green-shadow text-7xl mb-4`}
        ></motion.i>
      )}
      {svg && (
        <motion.img
          initial={{ y: 0 }}
          animate={{ y: hover ? "-5px" : 0 }}
          transition={{ duartion: 1 }}
          className="w-[72px] green-shadow mb-4"
          src={svg}
          alt="code"
        />
      )}
      <p className="text-center text-lightGreen font-bold mb-2">{heading}</p>
      <p className="text-center font-extralight text-sm text-proseText">
        {description}
      </p>
    </div>
  );
};

const Step = ({ children }) => {
  return (
    <li className="flex items-center">
      <i className="fas fa-angles-right green-shadow text-lightGreen mr-2"></i>
      <p className="">{children}</p>
    </li>
  );
};

BannerItem.defaultProps = {
  icon: null,
  svg: null,
};

export default InfoLayout;
