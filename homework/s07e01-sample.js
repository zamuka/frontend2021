// 1. напишите функцию, которая вернет случайный элемент массива.
// пример использования:

const randomColor = sample(['red', 'green', 'blue', 'orange']);

function sample(items) {
    const randomColor = Math.floor(Math.random()* items.length);
    
    return items[randomColor];
}

// 2. напишите функцию, которая принимает строку и число n, а возвращает
// новую строку, состоящую из n случайных букв начальной строки.
// Например

const result = getRandomLetters('abcdefgh', 4);

function getRandomLetters (str, number) {
    let newStr = '';

    for (let i = 0; i < number; i = i + 1) {
        const RandomLetters = Math.floor(Math.random() * str.length);

        newStr = newStr + str[RandomLetters];
    }
    return newStr;
}
console.log(result)


// 3. Пишем функцию, которая принимает объект, а возвращает новый
// объект, в котором только одно случайное свойство из оригинального
// например для объекта:

const person = {
  name: 'Vasya',
  age: 20,
  occupation: 'student',
  height: 170,
};

function sampleProperty (object) {
    const keyObject = Object.keys(object);

    const index = Math.floor(Math.random() * keyObject.length);

    const value = keyObject[index];

    return { [value]: object[value] };
}

const randomObject = sampleProperty(person);

console.log(randomObject)
