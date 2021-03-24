'use strict';


console.log('before declaration');

function multiply(a, b) {
  console.log('multiply started');
  const result = a * b;
  console.log('multiply finished');
  return result;
}

const square = function (x) {
  console.log('square started');
  const result = multiply(x, x);

  console.log('square finished');
  return result;
}

const y = square(10);

console.log(multiply);
// console.log('after', y);

// return multiple values wrapped in object
function getUserData() {
  const result = {
    itemCount: 10,
    userName: 'Vasya',
  };

  return result;
}

const userName = getUserData();

const userVasya = { // 0x1aba102
  name: 'Vasya',
  age: 20,
  isAdmin: false,
}


function showUserAge(user) {

  user.isAdmin = true; // input object mutation is NOT recommended
  console.log(user.age);
}

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
