import formatString from "$components/utils/format/formatString.js";

export const compareWithValidator = (element, compareToFieldName) => (form) => {
  if (element.value.length === 0) {
    return "";
  }

  const compareToValue = form[compareToFieldName];

  return element.value === compareToValue
    ? ""
    : `${formatString(element.name)} should be same as ${formatString(compareToFieldName)}`;
};

export const requiredValidator =
  ({ name, value }) =>
  (form) => {
    console.log(form);
    return value.length === 0 ? `${formatString(name)} is required` : "";
  };

export const minLengthValidator =
  (element, minLength = 7) =>
  () => {
    if (element.value.length === 0 || element.value.length > minLength) {
      return "";
    }

    return `${formatString(element.name)} should be more than ${minLength} characters`;
  };

export const maxLengthValidator =
  (element, maxLength = 20) =>
  () => {
    if (element.value.length === 0 || element.value.length < maxLength) {
      return "";
    }

    return `${formatString(element.name)} should be less than ${maxLength} characters`;
  };

export const firstUppercaseLetter =
  ({ value, name }) =>
  () => {
    if (value.length === 0) {
      return "";
    }

    return value[0] === value[0].toUpperCase()
      ? ""
      : `${formatString(name)} first letter should be uppercased`;
  };
