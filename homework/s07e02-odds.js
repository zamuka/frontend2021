/**
 * getOdds
 * Функция принимает массив чисел, а возвращает новый массив,
 * в котором только нечетные числа из оригинального массива
 * оператор % тут отлично подойдет
 * @param {number[]} inputNumbers
 * @returns {number[]}
 */

const numbersArray = [1, 2, 3, 4, 5, 6, 7, 9];
const result = getOdds(numbersArray);

function getOdds(inputNumbers) {
  const oddNumbers = [];

  for (let i = 0; i < inputNumbers.length; i = i + 1) {
    if (inputNumbers[i] % 2) {
      oddNumbers.push(inputNumbers[i]);
    }
  }
  return oddNumbers;
}

console.log(result);