// 1. напишите функцию, которая вернет случайный элемент массива.

function sample(items) {
    const randomNumber = Math.floor(Math.random()*items.length);
    
    return items[randomNumber];
}

const randomColor = sample(['red', 'green', 'blue', 'orange']);
console.log(randomColor);

// 2. напишите функцию, которая принимает строку и число n, а возвращает
// новую строку, состоящую из n случайных букв начальной строки.

function getRandomLetters(text, quantity) {
    let newString = ''
    for (let i = 0; i < quantity; i = i + 1) {
        const randomNumber = Math.floor(Math.random()*text.length);
        newString = newString + text[randomNumber];
    }
    
    return newString;
}

const result = getRandomLetters('abcdefgh', 4);
console.log(result);

// 3. Пишем функцию, которая принимает объект, а возвращает новый
// объект, в котором только одно случайное свойство из оригинального
// например для объекта:

const person = {
    name: 'Vasya',
    age: 20,
    occupation: 'student',
    height: 170,
};

// sampleProperty(person) вернет, например,
// { age: 20 } или { height: 170 }

function sampleProperty(person) {
    const propertyKeys = Object.keys(person);
    const randomPropertyNumber = Math.floor(Math.random()*propertyKeys.length)
    const property = propertyKeys[randomPropertyNumber];
    return  { [property] : person[property] };
}

const randomProperty = sampleProperty(person);
console.log(randomProperty);