import { getEventListeners } from "events";
import React, { useEffect, useRef } from "react";
//Components
import GlowingButton from "./GlowingButton";
import Logo from "./Logo";

const Banner = ({ scrollToRef }) => {
  const bannerContentRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.pageYOffset;
      const bannerContent = bannerContentRef.current;

      bannerContent
        ? (bannerContent.style.transform = `translateY(${offset * 0.5}px)`)
        : "";
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      console.log("Removing event listener");
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden">
      <div className="relative z-20 w-full flex flex-col items-center justify-center flex-1">
        <div className="relative w-full px-4 mb-8 flex justify-center">
          {/* <img
            src="/img/logo/osmicka.svg"
            alt="eight"
            className="max-w-[400px] w-full px-4 opacity-50 mb-8"
          /> */}
          <Logo width={400} />
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
      <div className="w-full absolute top-0 left-0 bottom-0 z-10 green-gradient"></div>
      <div className="black-gradient absolute top-0 bottom-0 left-0 right-0"></div>
      <video
        playsInline
        webkit-playsInline
        ref={bannerContentRef}
        src="/video/planeta.mp4"
        autoPlay
        loop
        muted
        className="w-full select-none object-cover h-full absolute  opacity-10 z-10"
      ></video>
      {/*Triangle*/}
      {/* <div className=" w-0 h-0 border-b-[100px] border-r-[50vw] border-l-[50vw] border-t-0 border-r-transparent border-l-transparent border-bg z-20"></div> */}
    </div>
  );
};

export default Banner;
