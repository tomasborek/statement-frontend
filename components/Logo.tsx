import React, { useEffect, useRef, useState } from "react";

const Logo = ({
  width = "300",
  opacity = 40,
  absolute = false,
  center = false,
  z = 20,
  glowing = false,
}: {
  width?: string | number;
  opacity?: number;
  absolute?: boolean;
  center?: boolean;
  z?: number;
  glowing?: boolean;
}) => {
  const video = useRef(null);
  const [videoError, setVideoError] = useState(false);
  useEffect(() => {
    if (video.current && glowing) {
      video.current.play().catch((error) => {
        setVideoError(true);
      });
    }
  }, []);
  if (glowing && !videoError) {
    return (
      <video
        ref={video}
        autoPlay
        muted
        loop
        className={`w-full max-h-full mt-4 select-none opacity-${opacity} z-${z} ${
          absolute ? "absolute top-0 bottom-0 w-full" : ""
        } ${
          center ? "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" : ""
        }`}
      >
        <source src="/img/logo/osmicka.webm" type="video/webm" />
      </video>
    );
  } else {
    return (
      <img
        draggable={"false"}
        src="/img/logo/osmicka.svg"
        alt="eight"
        style={{ maxWidth: width }}
        className={`w-full max-h-full my-8 select-none opacity-${opacity} z-${z} ${
          absolute ? "absolute top-0 bottom-0 w-full" : ""
        } ${
          center ? "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" : ""
        }`}
      />
    );
  }
};

export default Logo;
