import React, { useState, useEffect, useRef } from "react";
import Header from "../components/Header";
import WhyUs from "../components/WhyUs";
import Footer from "../components/Footer";
import SocialIcon from "../components/SocialIcon";
import { motion } from "framer-motion";
import TeamMember from "../components/TeamMember";
import Head from "next/head";
import { getTeamMembers } from "../lib/api";
import { pnp } from "../lib/inputs";
const Team = ({ members }) => {
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
        <div className="relative pt-8 flex flex-col justify-between min-h-[600px] mb-8 green-gradient">
          <header>
            <h1 className="relative px-4 mb-4 text-center text-5xl font-bold z-20">
              Tým Statement
            </h1>
            {vw < 700 && (
              <h3 className="text-xl opacity-40 text-proseText text-center mb-4">
                Klikněte na člena
              </h3>
            )}
          </header>
          {/* Team people */}
          <motion.div className="relative overflow-hidden main-container">
            {vw < 700 && (
              <div className="right-0 left-0 top-1/2 absolute flex justify-between text-lightGreen text-xl px-4 pointer-events-none">
                <i className="fa-solid fa-chevron-left"></i>
                <i className="fa-solid fa-chevron-right"></i>
              </div>
            )}

            <motion.div
              {...(vw < 700 ? { drag: "x" } : {})}
              dragConstraints={{ right: 0, left: -500 }}
              className={`flex relative z-20 ${
                vw >= 700 ? "justify-center" : ""
              }`}
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
                name={"Josef Hermoch"}
                img={"joe_team_holo.png"}
                description={"IT specialista"}
                resize
              />
            </motion.div>
          </motion.div>
        </div>
        {/* Banner end */}
        <main>
          <div className="main-container">
            <div>
              <h2 className="text-3xl text-center font-bold mb-4">Náš tým</h2>
              {members.map((member, index) => (
                <MemberInfo
                  key={index}
                  name={member.fields.name}
                  role={member.fields.role}
                  description={member.fields.description}
                />
              ))}
            </div>
            <div className="mt-8">
              <h2 className="text-3xl text-center font-bold">
                Sledujte nás na sociálních sítích
              </h2>
              <div className="flex justify-center space-x-8 mt-4 text-lightGreen">
                <SocialIcon type={"facebook"} size={"3xl"} glowy />
                <SocialIcon type={"instagram"} size={"3xl"} glowy />
                <SocialIcon type={"linkedin"} size={"3xl"} glowy />
              </div>
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

const MemberInfo = ({ name, role, description }) => {
  return (
    <div className="mb-4">
      <h3 className="font-bold text-xl border-l-2 border-lightGreen pl-4">
        {name}
      </h3>
      <p className="font-extralight mb-2 pl-5">{role}</p>
      <div
        className="text-proseText"
        dangerouslySetInnerHTML={{ __html: pnp(description) }}
      ></div>
    </div>
  );
};

export async function getStaticProps() {
  const members = await getTeamMembers();
  return {
    props: {
      members,
    },
  };
}
