// 1. напишите функцию, которая вернет случайный элемент массива.
// пример использования:

const randomColor = ['red', 'green', 'blue', 'orange'];
function getRandomElement(yourArray) {
  const randomIndex = Math.floor(Math.random() * yourArray.length);
  return yourArray[randomIndex];
}
getRandomElement(randomColor);

// 2. напишите функцию, которая принимает строку и число n, а возвращает
// новую строку, состоящую из n случайных букв начальной строки.
// Например

// const result = getRandomLetters('abcdefgh', 4);

// вернет 4 случайно выбранные буквы в виде строки, возможно, 'gbbc';
// Буквы могут повторяться.

function getRandomLetters(yourString, n) {
  let newString = '';

  for (let i = 0; i < n; i = i + 1) {
    const randomIndex = Math.floor(Math.random() * yourString.length);
    const randomLetter = yourString[randomIndex];
    newString = newString + randomLetter;
  }
  return newString;
}
const result = getRandomLetters('abcdefgh', 4);

// 3. Пишем функцию, которая принимает объект, а возвращает новый
// объект, в котором только одно случайное свойство из оригинального

//Способ 1:
const person = {
  name: 'Vasya',
  age: 20,
  occupation: 'student',
  height: 170,
};

function sampleProperty (yourObject) {
  const objectSize = Object.keys(yourObject).length;
  const randomIndex = Math.floor(Math.random() * objectSize);
  const randomKey = Object.keys(yourObject)[randomIndex];
  const randomProperty = {
    [randomKey]: yourObject[randomKey],
  };

  return randomProperty;
}
sampleProperty(person);

// Способ 2:
const person = {
  name: 'Vasya',
  age: 20,
  occupation: 'student',
  height: 170,
};
function sampleProperty(yourObject) {
  const ObjectSize = Object.keys(yourObject).length;
  const randomIndexofYourObj = Math.floor(Math.random() * ObjectSize);
  const randomElement = Object.entries(yourObject)[randomIndexofYourObj];
  const newArray = [];
  newArray.push(randomElement);
  const randomProperty = Object.fromEntries(newArray);

  return randomProperty;
}
sampleProperty(person);

// sampleProperty(person) вернет, например,
// { age: 20 } или { height: 170 }
