const numbers = [10, 20, 30, 40, 50, 60, 70];
const names = ["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"];

const logItems = function (array) {
  for (let i = 0; i < array.length; i += 1) {
    console.log(`${i + 1} - ${array[i]}`);
  }
};

logItems(names);

logItems(numbers);
