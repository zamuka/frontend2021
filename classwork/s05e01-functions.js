// Объявление функции - декларация - declaration
function multiply(a, b) {
  console.log('multiply started');
  const result = a * b;
  console.log('multiply finished');
  return result;
}

// объявление функции, как выражение. function expression
const square = function (x) {
  console.log('square started');
  const result = multiply(x, x);

  console.log('square finished');
  return result;
}

const y = square(10);

// без скобок функция не вызывается.
console.log(multiply);

// Функция возвращает только одно значение.
// Если надо вернуть несколько значений они оборачиваются. return multiple values wrapped in object
function getUserData() {
  const result = {
    itemCount: 10,
    userName: 'Vasya',
  };

  return result;
}

const userName = getUserData();

const userVasya = {
  name: 'Vasya',
  age: 20,
  isAdmin: false,
}


function showUserAge(user) {
  user.isAdmin = true; // input object mutation is NOT recommended
  console.log(user.age);
}

// передается ссылка на объект и внутри функции объект может быть изменен
showUserAge(userVasya);


function countLetters(inputString) {
  const targetLetter = 'i';

  function isLetterAtIndexIsI(index) {
    return inputString[index] === targetLetter;
  }

}

function isLetterAtIndexIsI(index) {
  return inputString[index] === targetLetter;
}

console.log('-----');

// Можно получить доступ в аргументам даже без прописывания их заранее
function accessArgs() {

  console.log(arguments[4]);
  console.log(arguments.length);
}

accessArgs(10, 'str', 2, true, 'fifth', multiply);
accessArgs(10);

function isVowel(letter) {
  if (letter === 'o') {
    return true;
  }

  if (letter === 'i') {
    return true;
  }


  return false;
}


if (isVowel(currentLetter)) {
  return;
}
