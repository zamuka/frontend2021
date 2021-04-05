/**
 * Отфильтруйте массивы используя цикл for и метод push
 */

// 1. В массиве evenNumbers должны быть только четные числа
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 100, 151];
const evenNumbers = [];

for (const number of numbers) {
  if( number % 2 === 0) {
    evenNumbers.push(number);
  }
}

// 2. В новом массиве wordsWithO должны быть только слова, в которых есть буква 'o'
// используйте метод строки - .includes для поиска 'o'
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
const words = ['grocery', 'sister', 'dirt', 'history', 'opinion', 'payment',
  'movie', 'drawing', 'area', 'hair', 'selection', 'coffee'];

const wordsWithO = [];

for (const item of words) {
  if( item.includes('o')) {
    wordsWithO.push(item);
  }
}

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

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 100, 151];

console.log(numbers.filter((num) => num % 2 === 0));

const words = ['grocery', 'sister', 'dirt', 'history', 'opinion', 'payment',
  'movie', 'drawing', 'area', 'hair', 'selection', 'coffee'];

console.log(words.filter((word) => word.includes('o')));
