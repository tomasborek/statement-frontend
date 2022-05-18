const marked = require("marked");
const DOMPurify = require("isomorphic-dompurify");
//Parse & Purify
export const pnp = (text) => {
  const parsed = marked.parse(text);
  return DOMPurify.sanitize(parsed);
};
