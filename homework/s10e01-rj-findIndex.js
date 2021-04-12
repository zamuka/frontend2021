/**
 * findIndex
 * функция находит и возвращает индекс элемента
 * или -1 если элемент не найден. -1 общепринятое выражение
 * несуществующего индекса во многих языках программирования
 *
 * @param {any[]} array
 * @param {function} qualifier
 * @returns {number}
 */
function findIndex(array, qualifier) {
  for (let i = 1; i < array.length; i = i + 1) {
    if (qualifier(array[i]))
      return i;
  }
  return -1;
}

const array1 = [5, 12, 8, 130, 44];
const isLargeNumber = (element) => element > 13;

// expected output: 3
console.log(findIndex(array1, isLargeNumber));

// expected output: -1
console.log(findIndex([0, 0], isLargeNumber));

// expected output: -1
console.log(findIndex([], isLargeNumber));