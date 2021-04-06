/**
 * Отфильтруйте массивы используя цикл for и метод push
 */

// 1. В массиве evenNumbers должны быть только четные числа
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 100, 151];
const evenNumbers = [];

// for (ВАШ) {
//      КОД
//      ТУТ
// }

// [ 2, 4, 6, 8, 100 ]
console.log(evenNumbers);

// 2. В новом массиве wordsWithO должны быть только слова, в которых есть буква 'o'
// используйте метод строки - .includes для поиска 'o'
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
const words = ['grocery', 'sister', 'dirt', 'history', 'opinion', 'payment',
  'movie', 'drawing', 'area', 'hair', 'selection', 'coffee'];

const wordsWithO = [];

// for (ВАШ) {
//      КОД
//      ТУТ
// }

// ['grocery', 'history', 'opinion', 'movie', 'selection', 'coffee']
console.log(wordsWithO);

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

// [ 2, 4, 6, 8, 100 ]
console.log(numbers.filter((num) => num/** ваш код тут */));

// ['grocery', 'history', 'opinion', 'movie', 'selection', 'coffee']
console.log(words.filter((word) => word/** ваш код тут */));
