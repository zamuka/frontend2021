// 1. напишите функцию, которая вернет случайный элемент массива.
<<<<<<< HEAD

const colors = ['red', 'green', 'blue', 'orange'];

function randomElement(nameOfArray) {
    return nameOfArray[Math.floor(Math.random() * nameOfArray.length)];
}

const randomColor = randomElement(colors);

// 2. напишите функцию, которая принимает строку и число n, а возвращает
// новую строку, состоящую из n случайных букв начальной строки. 

function getRandomLetters (string, n) {
    let newString = '';
    for (var i = 0; i < n; i++) {
        newString = newString + string.charAt(Math.floor(Math.random() * n));
    }
    return newString;
}

const someString = 'Yellowfin grouper bango sailfish sand diver';

const randomString = getRandomLetters(someString, 10);
=======
// пример использования:

// const randomColor = sample(['red', 'green', 'blue', 'orange']);

// 2. напишите функцию, которая принимает строку и число n, а возвращает
// новую строку, состоящую из n случайных букв начальной строки.
// Например

// const result = getRandomLetters('abcdefgh', 4);

// вернет 4 случайно выбранные буквы в виде строки, возможно, 'gbbc';
// Буквы могут повторяться.
>>>>>>> main

// 3. Пишем функцию, которая принимает объект, а возвращает новый
// объект, в котором только одно случайное свойство из оригинального
// например для объекта:
<<<<<<< HEAD

const person = {
    name: 'Vasya',
    age: 20,
    occupation: 'student',
    height: 170,
};

function getObj (obj) {
    let keys = Object.keys(obj);
    let arrayIndex = Math.floor(Math.random() * keys.length);
    let objValue = keys[arrayIndex];
    let result;
    return result = { [objValue] : obj[objValue] };
}

let newObj = getObj(person);
=======
// const person = {
//   name: 'Vasya',
//   age: 20,
//   occupation: 'student',
//   height: 170,
// };

// sampleProperty(person) вернет, например,
// { age: 20 } или { height: 170 }
>>>>>>> main
