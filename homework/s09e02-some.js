/**
 * Реализуйте функцию some, которая проверяет, есть ли в массиве,
 * элемент, подходящий по какому-либо критерию.
 * Функция аналогична встроенному методу массива some, но
 * первым параметром пусть функция принимает массив с данными, а
 * вторым параметром - функцию-валидатор.
 * Применяйте функцию-валидатор последовательно к элементам
 * массива.
 * Функция должна вернуть true, если подходящий элемент
 * есть в массиве и false в противном случае.
 *
 * Это что-то вроде find, но возвращает не элемент, а true \ false.
 */

/**
 * @template ItemType
 * @param {ItemType[]} arr
 * @param {(item: ItemType) => boolean} validator
 * @returns boolean
 */
function some(arr, validator) {
  for (const item of arr) {
    if (validator(item)) {
      return true;
    }
  }
  return false;
}

const numbers = [1, 4, 16, 10, 33, 20, 0];
const hasMultipleOfTree = some(numbers, (num) => !(num % 3));

if (hasMultipleOfTree) {
  console.log('Число, нацело делящееся на 3 в массиве есть');
} else {
  console.log('В массиве нет числа нацело делящегося на 3');
}

const users = [
  { name: 'Adam', age: 20, id: '4598' },
  { name: 'Bill', age: 22, id: 'AE46' },
  { name: 'Carol', age: 32, id: 'CC10' },
  { name: 'Denis', age: 18, id: '3109' },
  { name: 'Eric', age: 40, id: '880A' },
];

const hasBill = some(users, (user) => user.name === 'Bill');

if (hasBill) {
  console.log('Пользователь с именем Bill существует');
} else {
  console.log('Биллов - нет!');
}

console.log('Встроенный ".some" для пустого массива c любым валидатором выводит:', [].some(() => true));
console.log('Ваш "some" выводит:', some([], () => true));
