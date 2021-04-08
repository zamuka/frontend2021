/**
 * Отфильтруйте массивы используя цикл for и метод push
 */

// 1. В массиве evenNumbers должны быть только четные числа
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 100, 151];
const evenNumbers = [];

function evenNumbersOfArray(inputArray) {
  for (let i = 0; i < inputArray.length; i = i + 1) {
    if (inputArray[i] % 2 === 0) {
      evenNumbers.push(inputArray[i]);
    }
  }
  return evenNumbers;
}
console.log(evenNumbersOfArray(numbers));

// 2. В новом массиве wordsWithO должны быть только слова, в которых есть буква 'o'
// используйте метод строки - .includes для поиска 'o'
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes

const words = ['grOcery', 'sister', 'dirt', 'history', 'opinion', 'payment',
  'movie', 'drawing', 'area', 'Hair', 'selection', 'cOffee'];

const wordsWithO = [];

function newArray(inputArray) {
  for (let i = 0; i < inputArray.length; i = i + 1) {
    if (inputArray[i].toLowerCase().includes('o')) {
      wordsWithO.push(inputArray[i]);
    }
  }
  return wordsWithO;
}
console.log(newArray(words));



// В.
/**
 * Читаем про метод массива .filter
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
 *
 * Повторяем предыдущие задания используя .filter
 * Функция, переданная в .filter не обязательно должна возвращать true или
 * false, но выражение все равно будет использовано как boolean, точно также,
 * как в конструкции if ()
 */

// Full record:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 100, 151];
const evenNumbers = numbers.filter(function(number) {
  return number % 2 === 0;
});

console.log(evenNumbers);

// Arrow function record:
console.log(numbers.filter((num) => num % 2 === 0));


const words = ['grOcery', 'sister', 'dirt', 'history', 'opinion', 'payment',
  'movie', 'drawing', 'area', 'Hair', 'selection', 'cOffee'];
let specificLetter = 'o';

// Full record:
const wordsWithLetter = words.filter(function(item) {
  return item.toLowerCase().includes(specificLetter);
});
console.log(wordsWithLetter);

// Arrow function record:
console.log(words.filter((word) => word.includes('o')));
