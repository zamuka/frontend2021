const message = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

// Напишите функцию, которая посчитает и вернет количество букв 'i' в строке

function getILetterCount(str) {
  const iArr = str.split('').filter(function (el) {
    if (el === 'i') {
      return el;
    }
  });
  return iArr.length;
}

const count = getILetterCount(message);
console.log(count);


// Напишите функцию, которая посчитает в строке заданную букву, которую принимает вторым параметром

const getLetterCount = function (str, char) {
  let aLetterSum = 0;
  const arrFromStr = str.split('');

  arrFromStr.forEach(function (item) {
    if (item === char) {
      aLetterSum = aLetterSum + 1;
    }
  });
  return aLetterSum;
};

const aLetterCount = getLetterCount(message, 'a');
console.log(aLetterCount);
