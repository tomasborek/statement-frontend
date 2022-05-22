import React, { useEffect, useRef, useState } from "react";
//Components
import GlowingButton from "./GlowingButton";
import Logo from "./Logo";

const Banner = ({ scrollToRef }) => {
  const video = useRef(null);
  const [videoError, setVideoError] = useState(false);
  useEffect(() => {
    if (video.current) {
      video.current
        .play()
        .then((response) => {
          //Success
        })
        .catch((error) => {
          setVideoError(true);
        });
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      console.log("Removing event listener");
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const offset = window.pageYOffset;
    const videoRef = video.current;

    videoRef
      ? (videoRef.style.transform = `translateY(${offset * 0.5}px)`)
      : "";
  };

  return (
    <div className="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden bg-black">
      <div className="relative z-30 w-full flex flex-col items-center justify-center flex-1">
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
      <div className="absolute w-full top-0 bottom-0 transparent-responsive-green-gradient z-20 md:z-10"></div>
      {videoError ? (
        <img
          ref={video}
          src="/img/planeta_placeholder.png"
          className="w-full h-2/3 md:h-full select-none object-cover opacity-30 md:opacity-10 z-10 absolute"
          alt="Planeta"
        />
      ) : (
        <video
          autoPlay
          muted
          playsInline
          ref={video}
          className="w-full h-2/3 md:h-full select-none object-cover opacity-30 md:opacity-10 z-10 md:z-20 absolute"
          src="/video/planeta.mp4"
        />
      )}
    </div>
  );
};

export default Banner;
