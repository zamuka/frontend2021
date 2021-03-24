// Вариант №1. 
// Здесь функция проверяет является ли буква гласной и возвращает результат true или false.
const isVowel = function(x){
    const arrOfVowels = ['o','e','i','a','u'];
    let result = false;
    for(let i = 0; i < arrOfVowels.length; i = i + 1) {
      if(x === arrOfVowels[i]) {
        result = true;
      }
    } 
    return result;
}

const inputString = 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..'
let stringOfConsonants = '';
for(let i = 0; i < inputString.length; i = i + 1){
    let lowerCaseLetter = inputString[i].toLowerCase();
    if(!isVowel(lowerCaseLetter)){
     stringOfConsonants = stringOfConsonants + inputString[i];
    }
}

console.log(stringOfConsonants)

// Вариант №2. 
// Здесь функция преобразует любую строку в строку без гласных букв. 

const toStringOfConsonants = function(str){
    let stringOfConsonants = '';
    const objOfVowels = {
      'o': true,
      'e': true,
      'i': true,
      'a': true,
      'u': true,
    }
    for(let i = 0; i < str.length; i = i + 1){
      let lowerCaseLetter = str[i].toLowerCase();
      if (!objOfVowels[lowerCaseLetter]){
        stringOfConsonants = stringOfConsonants + str[i];
      }
    }
    return stringOfConsonants;
}
const inputString = 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..'
console.log(toStringOfConsonants(inputString));