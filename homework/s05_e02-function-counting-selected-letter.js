// Напишите функцию, которая посчитает в строке заданную букву, которую принимает вторым параметром

const getLetterCount = function (text, letter) {
    let counter = 0;
    let lowerCaseMessage = text.toLowerCase();

    for (let i = 0; i <= lowerCaseMessage.length; i = i + 1) {
        if (lowerCaseMessage[i] === letter) {
            counter = counter + 1;
        }
    } 
    return counter; 
}

const message = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

const aLetterCount = getLetterCount(message, 'a');
console.log(aLetterCount)