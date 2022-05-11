import React from "react";
import InfoLayout from "../layouts/InfoLayout";
import { getPage } from "../lib/api";

const SocialniSite = ({ content }) => {
  return <InfoLayout content={content} />;
};

export default SocialniSite;

export async function getStaticProps() {
  const page = await getPage("/socialni-site");
  return {
    props: {
      content: page,
    },
  };
}
