// Напишите функцию, которая посчитает и вернет количество букв 'i' в строке
const message = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

function getILetterCount(str) {
    // ваш код тут
    let accumulator = 0;
    for ( let i = 0; i < str.length; i++ ) {
        if ( str[i] === 'i') {
            accumulator++;
        }
    }
    return accumulator;
}
const count = getILetterCount(message);
console.log(count);