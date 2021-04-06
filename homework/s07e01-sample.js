// 1. напишите функцию, которая вернет случайный элемент массива.
// пример использования:

const randomColor = ['red', 'green', 'blue', 'orange'];

function returnRandomElement(arr) {
    let randomEl = Math.floor(Math.random() * arr.length);
    return randomColor[randomEl];

}
returnRandomElement(randomColor);

// 2. напишите функцию, которая принимает строку и число n, а возвращает
// новую строку, состоящую из n случайных букв начальной строки.
// Например

const result = getRandomLetters('abcdefgh', 4);

function getRandomLetters (str, num){
    let newStr = '';

    for(let i = 0; i < num; i++){
        let randomElement = Math.floor(Math.random() * str.length);
        newStr = newStr + str[randomElement];
    }
    return newStr;
}

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

function randomPropertyObject(obj){

    let allKeysInArr = Object.keys(obj);
    let values = Object.values(obj)

    let randomNumber = Math.floor(Math.random() * allKeysInArr.length);

    let x = allKeysInArr[randomNumber];
    let valueEl = values[randomNumber];

    let newObj = {}

    Object.assign(newObj, {[x]:valueEl});

    return newObj;
}
randomPropertyObject(person);

// sampleProperty(person) вернет, например,
// { age: 20 } или { height: 170 }
