/**
 * getOdds
 * Функция принимает массив чисел, а возвращает новый массив,
 * в котором только нечетные числа из оригинального массива
 * оператор % тут отлично подойдет
 * @param {number[]} inputNumbers
 * @returns {number[]}
 */
const sampleArray = [3, 61, 453, 5, 4, 32, 4, 59, 8, 7, 43];

function getOdds(inputNumbers) {
  const oddsArray = [];
  for (let i = 0; i < inputNumbers.length; i = i + 1) {
    if (inputNumbers[i] % 2) {
      oddsArray.push(inputNumbers[i]);
    }
  }
  return oddsArray;
}
console.log(getOdds(sampleArray));
