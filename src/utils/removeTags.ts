export const removeTags = (text: string | null) => {
  if (text === null) return "";
  return text.replace(/(<([^>]+)>)/gi, "");
};
