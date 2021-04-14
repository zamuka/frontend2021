/**
 * indexOf
 * функция ищет элемент в массиве сравнивая элементы учитывая тип (три равно)
 * Возвращает индекс элемента или -1
 *
 * @param {any[]} array
 * @param {any} item
 * @returns {number}
 */
function indexOf(array, item) {
  for (let i = 0; i < array.length; i = i + 1) {
    if (array[i] === item) {
      return i;
    }
  }
  return -1;
}


const beasts = ['ant', 'bison', 'camel', 'duck', 'kate'];

console.log(indexOf(beasts, 'kate'));
// expected output: 1

console.log(indexOf(beasts, 'cat'));
// expected output: -1
