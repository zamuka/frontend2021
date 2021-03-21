const inputString = 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..';
let stringOfConsonants = '';

for(let i = 0; i < inputString.length; i = i + 1){
     let lowerCaseLetter = inputString[i].toLowerCase();
     if(lowerCaseLetter !== 'o' && 
        lowerCaseLetter !== 'e' && 
        lowerCaseLetter !== 'i' &&
        lowerCaseLetter !== 'a' && 
        lowerCaseLetter !== 'u') {
        stringOfConsonants = stringOfConsonants + inputString[i];
        }
}
console.log(stringOfConsonants);



//Еще один вариант решения - с применением объекта.

const inputString = 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..'
let stringOfConsonants = '';
const objOfVowels = {
  'o': true,
  'e': true,
  'i': true,
  'a': true,
  'u': true,
}
for(let i = 0; i < inputString.length; i = i + 1){
  let lowerCaseLetter = inputString[i].toLowerCase();
  if (!objOfVowels[lowerCaseLetter]){
    stringOfConsonants = stringOfConsonants + inputString[i];
  }
}
console.log(stringOfConsonants);
