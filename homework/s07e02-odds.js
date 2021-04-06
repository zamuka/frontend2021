/**
 * getOdds
 * Функция принимает массив чисел, а возвращает новый массив,
 * в котором только нечетные числа из оригинального массива
 * оператор % тут отлично подойдет
 * @param {number[]} inputNumbers
 * @returns {number[]}
 */
let arr = [1,2,3,4,5,6,7,8,9];
let newArr = [];

function getOdds(inputNumbers) {
  for(let el of inputNumbers){
       if(inputNumbers[el] % 2 === 0) {
           newArr.push(inputNumbers[el]);
       }
      //or
      el % 2 === 0 ? newArr.push(inputNumbers[el]) : '';
  }
  return newArr;
}
getOdds(arr);
