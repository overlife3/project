export const cropText = (text, count) => {
  return text.slice(0, text.lastIndexOf(" ", count)) + " ";
};
