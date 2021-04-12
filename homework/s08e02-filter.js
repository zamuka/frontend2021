/**
 * Отфильтруйте массивы используя цикл for и метод push
 */

// 1. В массиве evenNumbers должны быть только четные числа
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 100, 151];
const evenNumbers = [];

for (let i = 0; i < numbers.length; i = i + 1) {
  if (Math.floor(numbers[i]) % 2 === 0) {
    evenNumbers.push(numbers[i]);
  }
}

// [ 2, 4, 6, 8, 100 ]
console.log(evenNumbers);

// 2. В новом массиве wordsWithO должны быть только слова, в которых есть буква 'o'
// используйте метод строки - .includes для поиска 'o'
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
const words = ['grocery', 'sister', 'dirt', 'history', 'opinion', 'payment',
  'movie', 'drawing', 'area', 'hair', 'selection', 'coffee',
];

const wordsWithO = [];
const nextWordsWithO = [];

for (let i = 0; i < words.length; i = i + 1) {
  if (words[i].toLowerCase().includes('o')) {
    wordsWithO.push(words[i]);
  }
}

words.map(function (elem) {
  const item = elem.includes('o');
  if (item) {
    nextWordsWithO.push(elem);
  }
});

// ['grocery', 'history', 'opinion', 'movie', 'selection', 'coffee']
console.log(wordsWithO);
console.log(nextWordsWithO);

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
console.log(numbers.filter((num) => num % 2 === 0));

// ['grocery', 'history', 'opinion', 'movie', 'selection', 'coffee']
console.log(words.filter((word) => word.includes('o')));
