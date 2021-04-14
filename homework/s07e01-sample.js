// 1. напишите функцию, которая вернет случайный элемент массива.
// пример использования:

function sample(arr) {
    let item = Math.floor(Math.random() * arr.length);

    return arr[item];
}

const randomColor = sample(['red', 'green', 'blue', 'orange']);

// 2. напишите функцию, которая принимает строку и число n, а возвращает
// новую строку, состоящую из n случайных букв начальной строки.
// Например

// const result = getRandomLetters('abcdefgh', 4);

// вернет 4 случайно выбранные буквы в виде строки, возможно, 'gbbc';
// Буквы могут повторяться.

function getRandomLetters(str, param) {
    let newString = [];

    for (i = 0; i < param; i = i + 1) {
        let index = Math.floor(Math.random() * str.length);

        newString.push(str[index]);
    }

    return newString.join('');
}


const result = getRandomLetters('abcdefgh', 4);

// 3. Пишем функцию, которая принимает объект, а возвращает новый
// объект, в котором только одно случайное свойство из оригинального
// например для объекта:
const person = {
    name: 'Vasya',
    age: 20,
    occupation: 'student',
    height: 170,
};



function sampleProperty(obj) {
    const pairs = Object.entries(obj);

    let index = Math.floor(Math.random() * pairs.length);

    const randomPair = pairs[index];

    return {
        [randomPair[0]]: randomPair[1]
    };
}
sampleProperty(person);

console.log(sampleProperty(person));
// вернет, например, { age: 20 } или { height: 170 }