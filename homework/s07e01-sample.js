// 1. напишите функцию, которая вернет случайный элемент массива.
// пример использования:

const randomColor = ['red', 'green', 'blue', 'orange'] ;

function randomElement(randomColor) {
    return randomColor[Math.floor(Math.random()*randomColor.length)];
}
console.log(randomElement(randomColor));
// 2. напишите функцию, которая принимает строку и число n, а возвращает
// новую строку, состоящую из n случайных букв начальной строки.
// Например

const result = getRandomLetters('abcdefgh', 4);

function getRandomLetters(str, n) {
    let randomStr = [];
    for(i = 0; i < n; i = i + 1){
        randomStr.push(str.charAt(Math.floor(Math.random() * str.length)));
    }
    return randomStr.join('');
}
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

function sampleProperty(person) {
  let objEntries = Object.entries(person);
  return objEntries[Math.floor(Math.random() * objEntries.length)];
}

let randomProp = sampleProperty(person);
console.log (randomProp.join(':'));

//  вернет, например,
// { age: 20 } или { height: 170 }
