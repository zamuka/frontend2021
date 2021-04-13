/**
 * includes
 * Функция возвращает true, если переданный элемент присутствует в массиве
 * и false в противном случае.
 * Сравнение, как и всегда, производится по трем равно ===
 * @param {any[]} array
 * @param {any} item
 * @returns {boolean}
 */
function includes(array, item) {

}

console.log(includes([1, 2, 3], 2));
// expected output: true

const pets = ['cat', 'dog', 'bat'];

console.log(includes(pets, 'cat'));
// expected output: true

console.log(includes(pets, 'at'));
// expected output: false
