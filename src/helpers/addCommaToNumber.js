export const addCommaToNumber = (number) => {
  const numberArray = number.toString().split('');
  const modified =
    numberArray.length > 4
      ? numberArray.splice(2, 0, ',')
      : numberArray.splice(1, 0, ',');
  return numberArray.join('');
};
