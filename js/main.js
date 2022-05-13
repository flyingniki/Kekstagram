function getRandomInt(min, max) {
  if (min >= 0 && max >= 0) {
    if (max < min) {
      [min, max] = [max, min];
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return 'Введенные значения должны быть положительными';
}

function strMaxLenght(string, maxLength) {
  string.length <= maxLength ? true : false;
}
