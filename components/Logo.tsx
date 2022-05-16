import React from "react";

const Logo = ({ width, opacity, absolute, center, z }) => {
  return (
    <img
      draggable={"false"}
      src="/img/logo/osmicka.svg"
      alt="eight"
      style={{ maxWidth: width }}
      className={`max-w-full max-h-full select-none opacity-${opacity} z-${z} ${
        absolute ? "absolute top-0 bottom-0 w-full" : ""
      } ${center ? "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" : ""}`}
    />
  );
};

Logo.defaultProps = {
  width: "300",
  opacity: "40",
  absolute: false,
  center: false,
  z: 20,
};

export default Logo;
