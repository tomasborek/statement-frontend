const marked = require("marked");
const DOMPuirfy = require("dompurify");
//Parse & Purify
export const pnp = (text) => {
  return DOMPuirfy.sanitize(marked.parse(text));
};
