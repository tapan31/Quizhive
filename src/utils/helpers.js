// Function to decode html entities
export const decodeHtmlEntities = (str) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(str, "text/html");

  return doc.documentElement.textContent;
};
