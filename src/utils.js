/* eslint-disable spaced-comment */

export const defaultOperator = (a, b) => b;
export const plusOperator = (a, b) => a + b;
export const minusOperator = (a, b) => a - b;
export const multiplyOperator = (a, b) => a * b;
export const divideOperator = (a, b) => a / b;
export const percentOperator = (a, b) => (a * b) / 100;

export const normalizeInputtingNumber = (numberText, ratioSign) => {
  const normalizators = [
    [new RegExp('^0+(?=\\d)', 'g'), ''], //remove leading zeroes
    [new RegExp(`(?<=\\${ratioSign}.*)\\${ratioSign}`, 'g'), ''], //remove mistaken dot sign
  ];

  return normalizators.reduce((accum, [regexp, replacement]) => (
    accum.replace(regexp, replacement)
  ), numberText);
};

export const normalizeDisplayingNumber = (numberText, ratioSign) => {
  const normalizators = [
    [new RegExp('(?<=\\..*)0+$', 'g'), ''], //remove trailing zeroes of fractional number
    [new RegExp('\\.$', 'g'), ''], //remove trailing dot sign of integer
    [new RegExp('\\.', 'g'), ratioSign], //replace dot sign to ratio sign
  ];

  return normalizators.reduce((accum, [regexp, replacement]) => (
    accum.replace(regexp, replacement)
  ), numberText);
};

export const convertNumberToText = (number, maxCharacters, ratioSign) => {
  const integerPart = Math.trunc(number);

  if (integerPart.toString().length > maxCharacters) {
    return 'Error';
  }

  const numberText = number.toPrecision(maxCharacters - 1);

  return normalizeDisplayingNumber(numberText, ratioSign);
};

export const convertTextToNumber = (numberText, ratioSign) => (
  parseFloat(numberText.replace(ratioSign, '.'))
);
