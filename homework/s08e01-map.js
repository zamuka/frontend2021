/**
 * В этом задании, с помощью метода массива .forEach мы напишем
 * другой, часто используемый метод массива - map, но не сразу.
 * Во всем задании используйте методы массива .push и .forEach
 */

/**
 * Создайте функцию, которая принимает на вход массив произвольных
 * элементов, например [3, 5, 10];
 * Далее, создает новый пустой массив result, заполняет его элементами
 * из входящего с помощью push и возвращает массив-результат.
 *
 * @param {ItemType[]} inputArray - входящий массив
 * @returns {ItemType[]}
 * @template ItemType
 */
function copy(inputArray) {
  const result = [];
  inputArray.forEach(function (item) {
    result.push(item)
  })
  return result;
}
const arrayIncoming = [3, 5, 10, 22, 2, 3, 8, 3, 1];

const copyByMap = arrayIncoming.map(function (item) {
  return item
})


//console.log(copy(arrayIncoming))
//console.log(copyByMap);

/**
 * Напишите улучшенную версию функции copy, которая вместо копирования
 * будет умножать все элементы на 2 и в массив-результат записывать
 * удвоенные числа.
 *
 * @param {number[]} inputArray - входящий массив
 * @returns {number[]}
 */
function copyAndMultiply(inputArray) {
  const resultOfCopyAndMultuply = [];
  inputArray.forEach(function (item) {
    resultOfCopyAndMultuply.push(item * 2)
  })
  return resultOfCopyAndMultuply
}

//console.log(copyAndMultiply(arrayIncoming))


const copyAndMultiplyByMap = arrayIncoming.map(function (item) {
  return item * 2;
})
console.log(copyAndMultiplyByMap)

/**
 * Функция - это значение, и его тоже можно передавать.
 * Это как набор инструкций, который можно будет выполнить позже.
 *
 * Реализуйте функцию map
 * Функция должна принимать массив элементов и вторым аргументом -
 * функцию, которую нужно применить к каждому элементу, вместо
 * умножения из прошлого примера.
 *
 * @param {ItemType[]} inputArray
 * @param {function} operation
 * @returns {ItemType[]}
 * @template ItemType
 */
function map(inputArray, operation) {
  const resultOfMap = [];
  inputArray.forEach(function (item) {
    resultOfMap.push(operation(item))
  })
  return resultOfMap;
}

// Пример использования функции map, после того, как она будет готова:
function square(x) {
  return x * x;
}
const numbers = [1, 5, 10, 4];
const squares = map(numbers, square);

// результат [1, 25, 100];
//console.log(squares);


