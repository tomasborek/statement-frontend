import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GlowingButton from "../components/GlowingButton";
import InfoLayout from "../layouts/InfoLayout";
import { getPage } from "../lib/api";

const Web = ({ content }) => {
  return <InfoLayout content={content} />;
};

export default Web;

export async function getStaticProps() {
  const page = await getPage("/web");
  return {
    props: {
      content: page,
    },
  };
}
