/**
 * getOdds
 * Функция принимает массив чисел, а возвращает новый массив,
 * в котором только нечетные числа из оригинального массива
 * оператор % тут отлично подойдет
 * @param {number[]} inputNumbers
 * @returns {number[]}
 */
function getOdds(inputNumbers) {
  const result = [];

  for (element of inputNumbers) {
    if (element % 2 === 1) {
      result.push(element);
    }
  }

  return result;
}

console.log(getOdds([2, 4, 5, 6, 7, 8, 9, 22, 44, 3, 57, 3, 2, 12, 21, 11]))


