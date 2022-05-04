import "../styles/globals.css";
import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import NavOverlay from "../components/NavOverlay";
import LayoutWrapper from "../layouts/LayoutWrapper";
//Providers
import NavProvider from "../contexts/NavContext";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
          integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      <NavProvider>
        <LayoutWrapper>
          <NavOverlay />
          <Component {...pageProps} />
        </LayoutWrapper>
      </NavProvider>
    </>
  );
}

export default MyApp;
