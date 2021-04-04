// 1. напишите функцию, которая вернет случайный элемент массива.
// пример использования:

function getRandomIndex(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function sample(colors) {
    const randomElement = getRandomIndex(0, colors.length - 1);
    return colors[randomElement];
}
const randomColor = sample(['red', 'green', 'blue', 'orange']);
console.log(randomColor);


// 2. напишите функцию, которая принимает строку и число n, а возвращает
// новую строку, состоящую из n случайных букв начальной строки.
// Например

function getRandomLetters(letterArray, lettersAmount) {
    let randomLetters = '';
    for (i = 0; i < lettersAmount; i++) {
        const randomLetterIndex = getRandomIndex(0, letterArray.length - 1);
        randomLetters = randomLetters + letterArray[randomLetterIndex];
    }
    return randomLetters;
}

const result = getRandomLetters('abcdefgh', 4);
console.log(result);

// вернет 4 случайно выбранные буквы в виде строки, возможно, 'gbbc';
// Буквы могут повторяться.

// 3. Пишем функцию, которая принимает объект, а возвращает новый
// объект, в котором только одно случайное свойство из оригинального
// например для объекта:
const person = {
    name: 'Vasya',
    age: 20,
    occupation: 'student',
    height: 170,
};

function sampleProperty(someObject) {
    const objectKeys = Object.keys(someObject);
    const randomIndex = getRandomIndex(0, objectKeys.length - 1);
    const randomKey = objectKeys[randomIndex];

    const randomeValue = someObject[randomKey];

    return { [randomKey]: randomeValue };
}

console.log(sampleProperty(person));
