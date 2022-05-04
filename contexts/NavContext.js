import React, { useContext, createContext, useState } from "react";
const NavContext = createContext();
export const useNav = () => {
  return useContext(NavContext);
};
const NavProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  return (
    <NavContext.Provider value={[open, setOpen]}>
      {children}
    </NavContext.Provider>
  );
};

export default NavProvider;
