import React from "react";
import { useNav } from "../contexts/NavContext";

const LayoutWrapper = ({ children }) => {
  const [open, setOpen] = useNav();
  return (
    <div
      className={`max-h-screen transition-all  ${
        open ? "overflow-hidden" : ""
      }`}
    >
      {children}
    </div>
  );
};

export default LayoutWrapper;
