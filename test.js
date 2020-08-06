const numbers = [10, 20, 30, 40, 50, 60, 70];
const names = ["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"];

const numb = function (array) {
  for (let i = 0; i < array.length; i += 1) {
    console.log(`${i + 1} - ${array[i]}`);
  }
};

numb(names);

const roma2 = [
  [
    [1, 2, 3],
    [10, 20, 30],
    [100, 200, 300],
  ],
  [
    [1, 2, 3],
    [10, 20, 30],
    [100, 200, 300],
  ],
  [
    [1000, 2000, 3000],
    [10000, 20000, 30000],
    [100000, 200000, 300000],
  ],
];
console.log(roma2);

for (let i = 0; i < roma2.length; i += 1) {
  console.log(roma2[i]);
  for (let j = 0; j < roma2[i].length; j++) {
    console.log(roma2[i][j]);
    for (let k = 0; k < roma2[i][j].length; k++) {
      console.log(roma2[i][j][k]);
    }
  }
}

// const roma = function (a, b) {
//   console.log(a, b);

//   for (let i = 0; i < 10; i += 1) {
//     console.log(`${a[i]} - ${b[i]}`);
//   }
// };

// roma(numbers, names);
