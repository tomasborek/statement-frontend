import React, { useRef } from "react";
import Head from "next/head";
import Image from "next/image";
//Componets
import Header from "../components/Header";
import Banner from "../components/Banner";
import Services from "../components/Services";
import Footer from "../components/Footer";
import WhyUs from "../components/WhyUs";
import { getServices } from "../lib/api";

export default function Home({ services }) {
  const servicesRef = useRef(null);
  return (
    <>
      <Head>
        <title>Statement</title>
      </Head>
      <div className="bg-bg min-h-screen text-white ">
        <Header absolute />
        <Banner scrollToRef={servicesRef} />
        <Services services={services} />
        <div className="main-container">
          <WhyUs />
        </div>
        <Footer />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const services = await getServices();

  return {
    props: {
      services,
    },
  };
}
