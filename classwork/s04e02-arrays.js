const arrayOfNumbers = [
  1,
  5,
  10,
];

console.log(ticTacToe);

// index starting from 0
console.log(arrayOfNumbers[1]);
console.log(arrayOfNumbers.length);

// object. Массивы это объекты со всеми последствиями. Ссылочный тип.
console.log(typeof arrayOfNumbers);
// Detect array
console.log(Array.isArray(arrayOfNumbers));

arrayOfNumbers[1] = 50;

// работает, но так делать не надо
// arrayOfNumbers.name = 'Sergey';

// классические методы для работы с массивом используются не
arrayOfNumbers.push(100);
arrayOfNumbers.pop();
arrayOfNumbers.unshift('first');


// Многоразмерные массивы перебираются с помощью вложенного цикла
const ticTacToe = [
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
];

for (let x = 0; x < 3; x = x + 1) {
  for (let y = 0; y < 3; y = y + 1) {
    ticTacToe[y][x] = x * y;
  }
}

