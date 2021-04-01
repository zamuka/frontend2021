/**
 * getOdds
 * Функция принимает массив чисел, а возвращает новый массив,
 * в котором только нечетные числа из оригинального массива
 * оператор % тут отлично подойдет
//  * @param {number[]} inputNumbers
//  * @returns {number[]}
//  */
let arr = [1,2,3,4,5,6,7,8,9,10,11,12];

function getOdds(_inputNumbers) {

  let odds = arr.filter(inputNumbers => inputNumbers%2);
  
  return odds;
}
const arrOdds = getOdds(arr);
console.log(arrOdds);