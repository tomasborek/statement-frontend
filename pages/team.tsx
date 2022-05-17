import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import WhyUs from "../components/WhyUs";
import Footer from "../components/Footer";
import SocialIcon from "../components/SocialIcon";
import { motion } from "framer-motion";
import TeamMember from "../components/TeamMember";
import Head from "next/head";
const Team = () => {
  const [vw, setVw] = useState(0);
  useEffect(() => {
    setVw(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleResize = () => {
    setVw(window.innerWidth);
  };

  return (
    <>
      <Head>
        <title>Team | Statements</title>
      </Head>
      <div className="bg-bg min-h-screen text-white">
        <Header />
        {/* Bannner */}
        <div className="relative pt-8 flex flex-col justify-between min-h-[600px] mb-8">
          <header>
            <h1 className="relative px-4 text-center text-5xl z-20">
              Tým Statement
            </h1>
          </header>
          {/* Team people */}
          <div className="overflow-hidden main-container">
            <motion.div
              {...(vw < 700 ? { drag: "x" } : {})}
              dragConstraints={{ right: -250, left: 250 }}
              className="flex relative z-20 justify-center"
            >
              <TeamMember
                name={"Pavel Hašek"}
                img={"pavel_team_holo.png"}
                description={"Marketing manager"}
                resize
              />
              <TeamMember
                name={"Tomáš Bořek"}
                img={"tomas_team_holo.png"}
                description={"Developer"}
                resize
              />
              <TeamMember
                name={"Josef Hemroch"}
                img={"joe_team_holo.png"}
                description={"IT specialista"}
                resize
              />
            </motion.div>
          </div>

          <div className="green-gradient absolute bottom-0 top-0 w-full z-10"></div>
        </div>
        {/* Banner end */}
        <main>
          <div className="main-container">
            <h2 className="text-3xl text-center">
              Sledujte nás na sociálních sítích
            </h2>
            <div className="flex justify-center space-x-8 mt-4 text-lightGreen">
              <SocialIcon type={"facebook"} size={"3xl"} glowy />
              <SocialIcon type={"instagram"} size={"3xl"} glowy />
              <SocialIcon type={"linkedin"} size={"3xl"} glowy />
            </div>
            <WhyUs />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Team;
