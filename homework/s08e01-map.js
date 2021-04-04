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

const inputArray = [1, 65, 5, 76];

function copy(arrayOfNumbers) {
  let result = [];
  for(number of arrayOfNumbers) {
    result.push(number);
  }
  return result;
}

let newArray = [copy(inputArray)];
/**
 * Напишите улучшенную версию функции copy, которая вместо копирования
 * будет умножать все элементы на 2 и в массив-результат записывать
 * удвоенные числа.
 *
 * @param {number[]} inputArray - входящий массив
 * @returns {number[]}
 */

 function copyAndMultiply(arrayOfNumbers) {
  let result = [];
  for(number of arrayOfNumbers) {
    result.push(number * 2);
  }
  return result;
}

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

let cityList = ['Paris', 'Amsterdam', 'Singapore'];

function map(inputArray, operation) {
  let result = [];
  for (let element of inputArray) {
    result.push(operation(element));
  }
  return result;
}

function addValue (element) {
  element = element + ' is my beloved place';
  return element;
}

let newString = map(cityList, addValue);


//with .map method
let cityList = ['Paris', 'Amsterdam', 'Singapore'];

function map(inputArray, operation) {
  return inputArray.map(operation);
}

function addValue (element) {
  element = element + ' is my beloved place';
  return element;
}

let newString = map(cityList, addValue);