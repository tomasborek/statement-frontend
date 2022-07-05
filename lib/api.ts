const contentful = require("contentful");
const client = contentful.createClient({
  space: "g4u7tt791g23",
  accessToken: process.env.AUTH_KEY,
});
export const getServices = async () => {
  const services = await client.getEntries({
    content_type: "services",
    order: "fields.order",
  });
  return services.items;
};
export const getPage = async (link) => {
  const pageInfo = await client.getEntries({
    content_type: "pages",
    "fields.link": link,
  });
  return pageInfo.items[0];
};
export const getProjects = async () => {
  const projects = await client.getEntries({
    content_type: "project",
    order: "fields.order",
  });
  return projects.items;
};

export const getTeamMembers = async () => {
  const members = await client.getEntries({
    content_type: "teamMember",
    order: "fields.order",
  });
  return members.items;
};

export const getReferences = async () => {
  const references = await client.getEntries({
    content_type: "reference",
    order: "fields.order",
  });
  return references.items;
};

export const getTechnologies = async () => {
  const technologies = await client.getEntries({
    content_type: "technology",
    order: "fields.order",
  });
  return technologies.items;
};
