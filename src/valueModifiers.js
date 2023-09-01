function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function addZeroes(number) {
  while (number.toString().length < 4) {
    number = "0" + number;
  }
  return number;
}

export { randomNumber, capitalizeFirstLetter, addZeroes };