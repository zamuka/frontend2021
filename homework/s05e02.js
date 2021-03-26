// Напишите функцию, которая посчитает в строке заданную букву, которую принимает вторым параметром

const message = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

const getLetterCount = function aLetterCount (str, countSecondPar) {
    let accumulator = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === countSecondPar) {
            accumulator++
        }
    }
    return accumulator;
}
const aLetterCount = getLetterCount(message, 'a');

console.log(aLetterCount);