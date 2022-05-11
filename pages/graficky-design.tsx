import React from "react";
import InfoLayout from "../layouts/InfoLayout";
import { getPage } from "../lib/api";

const Design = ({ content }) => {
  return <InfoLayout content={content} />;
};

export default Design;

export async function getStaticProps() {
  const page = await getPage("/graficky-design");
  return {
    props: {
      content: page,
    },
  };
}
