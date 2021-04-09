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

}

const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(indexOf(beasts, 'bison'));
// expected output: 1

console.log(indexOf(beasts, 'giraffe'));
// expected output: -1
