/**
 * В этом задании, с помощью метода массива .forEach мы напишем
 * другой, часто используемый метод массива - map, но не сразу.
 * Во всем задании используйте методы массива .push и .forEach
 */

/**
//  * Создайте функцию, которая принимает на вход массив произвольных
//  * элементов, например [3, 5, 10];
//  * Далее, создает новый пустой массив result, заполняет его элементами
//  * из входящего с помощью push и возвращает массив-результат.
//  *
//  * @param {ItemType[]} inputArray - входящий массив
//  * @returns {ItemType[]}
//  * @template ItemType
//  */
const arr = [3, 5, 10];

function copy(inputArray) {
  const result = [];
  for(inputArray of arr){
    result.push(inputArray);
  }
  return result;
}
const copyArr = copy(arr);
console.log(copyArr);

/**
 * Напишите улучшенную версию функции copy, которая вместо копирования
 * будет умножать все элементы на 2 и в массив-результат записывать
 * удвоенные числа.
 *
 * @param {number[]} inputArray - входящий массив
 * @returns {number[]}
 */
function copyAndMultiply(inputArray) {
  const result1 = [];
  let doubleElements;
  for(inputArray of arr){
    doubleElements = inputArray * 2;
    result1.push(doubleElements);
  }
  return result1;
}
const copyArr1 = copyAndMultiply(arr);
console.log(copyArr1);


// /**
//  * Функция - это значение, и его тоже можно передавать.
//  * Это как набор инструкций, который можно будет выполнить позже.
//  *
//  * Реализуйте функцию map
//  * Функция должна принимать массив элементов и вторым аргументом -
//  * функцию, которую нужно применить к каждому элементу, вместо
//  * умножения из прошлого примера.
//  *
//  * @param {ItemType[]} inputArray
//  * @param {function} operation
//  * @returns {ItemType[]}
//  * @template ItemType
//  */
// function map(inputArray, operation) {

// }

// // Пример использования функции map, после того, как она будет готова:
// function square(x) {
//   return x * x;
// }
// const numbers = [1, 5, 10];
// const squares = numbers.map(square);

// // результат [1, 25, 100];
// console.log(squares);
function multiplying(x) {
  return x * 4;
}
const arrMap = [3, 5, 10];
function map(InputArray, operation) {
  const result3 = InputArray.map(operation);
  return result3;
}

const multiplyArr = map(arrMap, multiplying);
console.log(multiplyArr);
