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

const arrayOfElements = [3, 5, 10];

function copy(inputArray) {
  const result = [];
  inputArray.forEach(element => result.push(element));
  //or
  // inputArray.forEach(function (element) {
  //   return result.push(element);
  // });
}

copy(arrayOfElements);
/**
 * Напишите улучшенную версию функции copy, которая вместо копирования
 * будет умножать все элементы на 2 и в массив-результат записывать
 * удвоенные числа.
 *
 * @param {number[]} inputArray - входящий массив
 * @returns {number[]}
 */
function copyAndMultiply(inputArray) {
  const result = [];
  inputArray.forEach(element => result.push(element*2));
  //or
  // inputArray.forEach(function (element) {
  //    return result.push(element*2);
  // });
}
copyAndMultiply(arrayOfElements);
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
const result = [];

function operation(el){
  let resultOfMultiple = el * el;
  return resultOfMultiple;
}

function map(inputArray, fun) {
  inputArray.forEach(el => {
    let multipleResult = fun(el);
    result.push(multipleResult);
  });
  return result;
}

map(arrayOfElements,operation);

// Пример использования функции map, после того, как она будет готова:
// function square(x) {
//   return x * x;
// }
// const numbers = [1, 5, 10];
// const squares = map(numbers, square);

// // результат [1, 25, 100];
// console.log(squares);
