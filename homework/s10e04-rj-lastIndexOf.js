/**
 * lastIndexOf
 * работает аналогично indexOf, но возвращает последний найденный индекс.
 *
 * @param {any[]} array
 * @param {any} item
 * @returns {number}
 */
function lastIndexOf(array, item) {
    for (let i = (array.length - 1); i >= 0; i = i - 1) {
        if (array[i] === item) {
            return i;
        }
    }
    return -1;
}

function lastIndexOf(array, item) {
    return array.lastIndexOf(item);
}

const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

console.log(lastIndexOf(animals, 'Dodo'));
// expected output: 3

console.log(lastIndexOf(animals, 'Tiger'));
// expected output: 1
