/**
 * getOdds
 * Функция принимает массив чисел, а возвращает новый массив,
 * в котором только нечетные числа из оригинального массива
 * оператор % тут отлично подойдет
 * @param {number[]} inputNumbers
 * @returns {number[]}
 */
function getOdds(inputNumbers) {
  const oddNumbers = [];

  inputNumbers.forEach((num) => {
    if (Math.floor(num) % 2 === 0) {
      oddNumbers.push(num);
    }
  });
  return oddNumbers
}

const numbers = [1, 5, 10, 18, 23, 36, 55, 62];

console.log(getOdds(numbers));
