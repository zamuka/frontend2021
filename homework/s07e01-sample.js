// 1. напишите функцию, которая вернет случайный элемент массива.
// пример использования:

const randomColor = ['red', 'green', 'blue', 'orange'];

function random() {
    console.log(randomColor[Math.floor(Math.random() * randomColor.length)]);
}
random();

// 2. напишите функцию, которая принимает строку и число n, а возвращает
// новую строку, состоящую из n случайных букв начальной строки.
// Например


const getRandomLetters = function(string, number) {
    let mystring = '';
    for (let i = 0; i < number; i = i + 1) {
        const randomLetter = Math.floor(Math.random() * string.length);
        mystring = mystring +  string[randomLetter]; 
    }
    return mystring;
}
const result = getRandomLetters('abdfhfghcdefgh', 4);
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

const randomProperty  = function(obj) {
    const newObject = Object.assign({}, obj);
    const newKeys = Object.keys(newObject);
    const randomKey = Math.floor(Math.random() * newKeys.length);
    const property = newKeys[randomKey];
    return {
        [property]: newObject[property]
    };
}
const result = randomProperty(person);
console.log(result);


// sampleProperty(person) вернет, например,
// { age: 20 } или { height: 170 }
