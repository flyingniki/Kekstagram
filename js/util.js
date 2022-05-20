function getRandomInt(min, max) {
  if (min >= 0 && max >= 0) {
    if (max < min) {
      [min, max] = [max, min];
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return null;
}

function strMaxLength(string, maxLength) {
  return string.length <= maxLength;
}

strMaxLength('Test string', 140);

function getRandomElement(array) {
  let index = getRandomInt(0, array.length - 1);
  return array[index];
}

export { getRandomInt, getRandomElement };
