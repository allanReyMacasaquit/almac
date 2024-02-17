function formatString(text) {
  const words = text.split(/\p{Z}+|[_-]+/gu);

  return words
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(" ");
}

export default formatString;
