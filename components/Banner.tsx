import { getEventListeners } from "events";
import React, { useEffect, useRef, useState } from "react";
//Components
import GlowingButton from "./GlowingButton";
import Logo from "./Logo";

const Banner = ({ scrollToRef }) => {
  const bannerContentRef = useRef(null);
  const [suspended, setSuspended] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    bannerContentRef.current.addEventListener("suspend", handleSuspend);
    return () => {
      console.log("Removing event listener");
      window.removeEventListener("scroll", handleScroll);
      bannerContentRef.current.removeEventListener("suspend", handleSuspend);
    };
  }, []);

  const handleScroll = () => {
    const offset = window.pageYOffset;
    const bannerContent = bannerContentRef.current;

    bannerContent
      ? (bannerContent.style.transform = `translateY(${offset * 0.5}px)`)
      : "";
  };

  const handleSuspend = () => {
    setSuspended(true);
  };

  return (
    <div className="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden bg-black">
      <div className="relative z-20 w-full flex flex-col items-center justify-center flex-1">
        <div className="relative w-full px-4 my-8 flex justify-center">
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
      <div className="w-full absolute top-0 left-0 bottom-0 z-20 md:z-10 transparent-responsive-green-gradient"></div>
      <img
        ref={bannerContentRef}
        className="w-full h-full md:h-full select-none object-cover absolute opacity-30 md:opacity-10 z-10"
        src="/video/planeta.webp"
        alt=""
      />
    </div>
  );
};

export default Banner;
