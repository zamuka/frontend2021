// Напишите функцию, которая посчитает в строке заданную букву, которую принимает вторым параметром

const getLetterCount = function (aMessage, aLetter) {
    let aLetterCounter = 0;
    for (letter of aMessage) {
        if (letter === aLetter) {
            aLetterCounter++;
        }
    }
    return aLetterCounter;
}

const message = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

const aLetterCount = getLetterCount(message, 'a');
console.log(aLetterCount);