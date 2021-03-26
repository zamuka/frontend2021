//Напишите программу,
//которая выведет переданную в нее строку, но без гласных букв (English please).
//Задание очень похоже на пересчет букв,
//только другой тип переменной-результата (еще бывает называют аккумулятором)
//Вот вам lorem ipsum строка для проверки

const inputString = 'N eque';
//const inputString = 'lorem ipsum';

//let inputArr = inputString.split('');

//cогласные
let arrConsonants = [];
debugger;
for (let i = 0; i < inputString.length; i++) {

    //гласные
    let vowelsArr = ['a', 'e', 'i', 'o', 'u'];
    let isVowel = false;

    for (let el = 0; el < vowelsArr.length; el++){
        if(vowelsArr[el] === inputString[i] ||  inputString[i] === ',' ||  inputString[i] === '.') {
            isVowel = true;
            break;
        }
    }

    if ( !isVowel ) {
        arrConsonants.push(inputString[i]);

    }
}
let newStr = arrConsonants.join('');

console.log(newStr);