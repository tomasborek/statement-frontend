import React, { useEffect, useRef, useState } from "react";
//Components
import GlowingButton from "./GlowingButton";
import Logo from "./Logo";

const Banner = ({ scrollToRef }) => {
  const bannerContentRef = useRef(null);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      console.log("Removing event listener");
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const offset = window.pageYOffset;
    const bannerContent = bannerContentRef.current;

    bannerContent
      ? (bannerContent.style.transform = `translateY(${offset * 0.5}px)`)
      : "";
  };

  return (
    <div className="green-gradient relative w-full h-screen flex flex-col justify-center items-center overflow-hidden bg-black">
      <div className="relative z-20 w-full flex flex-col items-center justify-center flex-1">
        <div className="relative w-5/6 max-w-[400px] px-4 my-8 flex justify-center">
          <Logo width={"100%"} />
        </div>
        <h1 className="text-5xl text-center mb-4">Vize jsou nekonečné</h1>
        <h3 className="text-2xl text-center mb-8 font-extralight">
          Pomůžeme vám je naplnit
        </h3>
        <GlowingButton
          handleClick={() => {
            scrollToRef.current.scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          Služby
        </GlowingButton>
      </div>
      <img
        ref={bannerContentRef}
        className="w-full h-full md:h-full select-none object-cover absolute opacity-10 z-10"
        src="/video/planeta.gif"
        alt=""
      />
    </div>
  );
};

export default Banner;
