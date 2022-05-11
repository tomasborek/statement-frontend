import React from "react";
import InfoLayout from "../../layouts/InfoLayout";
import { getPage } from "../../lib/api";

const ItManagment = ({ content }) => {
  return <InfoLayout content={content} />;
};

export default ItManagment;

export async function getStaticProps() {
  const page = await getPage("/sprava-it");
  return {
    props: {
      content: page,
    },
  };
}
