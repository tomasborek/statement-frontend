import React, { useRef } from "react";
import Head from "next/head";
import Image from "next/image";
//Componets
import Header from "../components/Header";
import Banner from "../components/Banner";
import Services from "../components/Services";
import Footer from "../components/Footer";
import WhyUs from "../components/WhyUs";
import { getServices, getTechnologies } from "../lib/api";
import Technologies from "../components/Technologies";

export default function Home({ services, technologies }) {
  const servicesRef = useRef(null);
  return (
    <>
      <Head>
        <title>Statements</title>
      </Head>
      <div className="bg-bg min-h-screen text-white ">
        <Header absolute />
        <Banner scrollToRef={servicesRef} />
        <Services services={services} scrollToRef={servicesRef} />
        <div className="main-container">
          <Technologies technologies={technologies} />
          <WhyUs />
        </div>
        <Footer />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const services = await getServices();
  const technologies = await getTechnologies();

  return {
    props: {
      services,
      technologies,
    },
  };
}
