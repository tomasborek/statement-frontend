import React from "react";
import Header from "../components/Header";
import Logo from "../components/Logo";

const Wip = () => {
  return (
    <div className="min-h-screen bg-bg text-white">
      <Header />
      <div className="main-container">
        <div className="w-full flex justify-center mt-12">
          <Logo width={400} />
        </div>
        <h2 className="font-bold mt-8 text-3xl text-center">Připravuje se</h2>
      </div>
    </div>
  );
};

export default Wip;
