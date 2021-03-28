// Напишите функцию, которая посчитает и вернет количество букв 'i' в строке
const message = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
function getILetterCount(str) {
    let result = 0;
    for (let i = 0; i < str.length; i = i + 1) {
        let currentLatter = str[i];
        if (currentLatter === 'i') {
            result = result + 1;
        }
    }
    return result;
}
const count = getILetterCount(message);
console.log(count);


// Напишите функцию, которая посчитает в строке заданную букву, которую принимает вторым параметром
const message = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
const getLetterCount = function (str, x) {
    let result = 0;
    for(let i = 0; i < str.length; i = i + 1) {
        if (str[i] === x) {
            result = result + 1;
        }
    }
    return result;
}
const aLetterCount = getLetterCount(message, 'a');
console.log(aLetterCount);

let company = promt ('Какая компания создала JS?','')
if (company == 'Java') {
    alert('Верно!')
} else {
    alert('Неверно!')
}