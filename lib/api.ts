const axios = require("axios");
export const getServices = async () => {
  const services = await axios.get(
    "https://cdn.contentful.com/spaces/g4u7tt791g23/entries?content_type=services&order=fields.order",
    {
      headers: {
        Authorization: `Bearer ${process.env.AUTH_KEY}`,
      },
    }
  );
  return services.data.items;
};

export const getPage = async (link) => {
  const pageData = await axios.get(
    `https://cdn.contentful.com/spaces/g4u7tt791g23/entries?content_type=pages&fields.link=${link}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.AUTH_KEY}`,
      },
    }
  );

  return pageData.data.items[0];
};
