// Напишите функцию, которая посчитает и вернет количество букв 'i' в строке

function getILetterCount(str) {
    let result = 0;
    for(let i = 0; i < str.length; i = i + 1){
      let lowerCaseLetter = str[i].toLowerCase();
      if (lowerCaseLetter === 'i'){
        result = result + 1;
      }
    }
    return result;
  }
  
  const message = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
  const count = getILetterCount(message);
  console.log(count);

// Напишите функцию, которая посчитает в строке заданную букву, которую принимает вторым параметром

const getLetterCount = function(str, x){
    let result = 0;
    for(let i = 0; i < str.length; i = i + 1){
        if (str[i] === x){
        result = result + 1;
        }
    }
    return result;
}

const message = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
const aLetterCount = getLetterCount(message, 'a');
console.log(aLetterCount);
