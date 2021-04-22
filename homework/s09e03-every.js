/**
 * Реализуйте функцию every, которая проверяет, ВСЕ ли элементы
 * массива соответствуют какому-либо критерию.
 * Функция аналогична встроенному методу массива every, но
 * первым параметром пусть функция принимает массив с данными, а
 * вторым параметром - функцию-валидатор.
 * Применяйте функцию-валидатор последовательно к элементам
 * массива.
 * Функция должна вернуть true, если валидатор вернул true
 * для всех елементов массива и false если хоть один НЕ подошел.
 */

/**
 * @template ItemType
 * @param {ItemType[]} arr
 * @param {(item: ItemType) => boolean} validator
 * @returns boolean
 */
function every(arr, validator) {
  for (const item of arr) {
    if (!validator(item)) {
      return false;
    }
  }
  return true;
}

const numbers = [1, 4, 16, 10, 33, 20, 0];
const allNumbersGreaterThanZero = every(numbers, (num) => num > 0);

if (allNumbersGreaterThanZero) {
  console.log('Все числа больше ноля');
} else {
  console.log('В массиве есть что-то меньше или равное нолю.');
}

const users = [
  { name: 'Adam', age: 20, id: '4598' },
  { name: 'Bill', age: 22, id: 'AE46' },
  { name: 'Carol', age: 32, id: 'CC10' },
  { name: 'Denis', age: 18, id: '3109' },
  { name: 'Eric', age: 40, id: '880A' },
];

const allAdults = every(users, (user) => user.age > 16);

if (allAdults) {
  console.log('Все взрослые!');
} else {
  console.log('Внимание, обнаружен несовершеннолетний! Лови его!');
}

console.log('Встроенный ".every" для пустого массива выводит true при любом валидаторе:', [].every(() => false));
console.log('Ваш "every":', every([], () => false));
