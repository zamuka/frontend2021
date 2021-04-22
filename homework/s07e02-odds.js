/**
 * getOdds
 * Функция принимает массив чисел, а возвращает новый массив,
 * в котором только нечетные числа из оригинального массива
 * оператор % тут отлично подойдет
 * @param {number[]} inputNumbers
 * @returns {number[]}
 */
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function getOdds(inputNumbers) {
  // ВАШ КОД ТУТ
  const result = [];

  // eslint-disable-next-line no-restricted-syntax
  for (const number of inputNumbers) {
    if (number % 2 !== 0) {
      result.push(number);
    }
  }

  return result;
}

console.log(getOdds(numbers));
