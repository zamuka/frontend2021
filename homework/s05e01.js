// Напишите функцию, которая посчитает и вернет количество букв 'i' в строке

function getILetterCount(str) {
    let iCounter = 0;
    for (letter of str) {
        if (letter === 'i') {
            iCounter++;
        }
    }
    return iCounter;
}

const message = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

const count = getILetterCount(message);
console.log(count);

// let iCounter = 0;
// for (letter of message) {
//     if (letter === 'i') {
//         iCounter++;
//     }
// }
// console.log(iCounter)