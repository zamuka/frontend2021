/**
 * getOdds
 * Функция принимает массив чисел, а возвращает новый массив,
 * в котором только нечетные числа из оригинального массива
 * оператор % тут отлично подойдет
 * @param {number[]} inputNumbers
 * @returns {number[]}
 */

//1
function getOdds(inputNumbers) {
  let arrayOdds = [];
  for (let i = 0; i < inputNumbers.length; i++) {
    if (inputNumbers[i] % 2 !== 0) {
      arrayOdds.push(inputNumbers[i]);
    }
  }
  return arrayOdds;
}

let someArray = [1, 324, 435, 3453, 435, 88];
let newArray = getOdds(someArray);

//2
let someArray = [1, 324, 435, 3453, 435, 88];
let arrayOdds = someArray.filter(function(elem) {
	return elem % 2 !== 0;
});