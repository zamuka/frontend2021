let inputString = 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...';
// let arrString = inputString.split('');
let result1 = [];
const arrVowels = [
    'a',
    'e',
    'i',
    'o',
    'u',
]

for(let char of inputString) {
    let theVowels = false;
    for(let key of arrVowels){
        if(char === key){
            theVowels = true;
        }
    }
    if(!theVowels) {
        result1.push(char);
    }
}

console.log(result1.join(''));



// Вывела соласные функцией.


function returnOfConsonants(inputString) {
    let result2 = '';
    for(let i = 0; i < inputString.length; i++) {
        const letter = inputString[i].toLocaleLowerCase();
        if (!isVowel(letter)) {
            result2 = result2 + letter;
        }
    }
    return result2;   
}

function isVowel(letter) {
    if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
        return true;
    }
}



result2= returnOfConsonants(inputString);
console.log(result2);

