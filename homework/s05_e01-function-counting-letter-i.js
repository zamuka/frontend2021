// Напишите функцию, которая посчитает и вернет количество букв 'i' в строке

function getILetterCount(str) {
    let aLetterCount = 0;
    const lowerCaseMessage = str.toLowerCase();

    for (let counter = 0; counter <= lowerCaseMessage.length; counter = counter + 1) {
        if (lowerCaseMessage[counter] === 'i') {
            aLetterCount = aLetterCount + 1;
        }
    } 
    return aLetterCount;  
}

const message = 'ILorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
const count = getILetterCount(message);

console.log(`Нашлось ${count} букв 'i'.`);