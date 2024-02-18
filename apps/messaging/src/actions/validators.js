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
  () => {
    return value.length === 0 ? `${formatString(name)} is required` : "";
  };

export const minLengthValidator =
  (element, minLength = 4) =>
  () => {
    if (element.value.length === 0 || element.value.length > minLength) {
      return "";
    }

    return `${formatString(element.name)} should be more than ${minLength} characters`;
  };

export const maxLengthValidator =
  (element, maxLength = 50) =>
  () => {
    if (element.value.length === 0 || element.value.length < maxLength) {
      return "";
    }

    return `${formatString(element.name)} should be less than ${maxLength} characters`;
  };

export const emailValidator =
  ({ value, name }) =>
  () => {
    if (value.length === 0) {
      return "";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value) ? "" : `${formatString(name)} should be a valid email address`;
  };
