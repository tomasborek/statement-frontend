import React, { useRef } from "react";
import Head from "next/head";
import Image from "next/image";
//Componets
import Header from "../components/Header";
import Banner from "../components/Banner";
import Services from "../components/Services";
import Footer from "../components/Footer";
import WhyUs from "../components/WhyUs";
import { useNav } from "../contexts/NavContext";

export default function Home() {
  const servicesRef = useRef(null);
  return (
    <>
      <Head>
        <title>Statement</title>
      </Head>
      <div className="bg-bg min-h-screen text-white ">
        <Header absolute />
        <Banner scrollToRef={servicesRef} />
        <Services servicesRef={servicesRef} />
        <div className="main-container">
          <WhyUs />
        </div>
        <Footer />
      </div>
    </>
  );
}
