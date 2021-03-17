// Посчитайте количество букв 'i' в строке
const message = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';


// Обратиться к каждому символу (букве) можно используя квадратные скобки
// Например, это 'L', так как многое в цифровом мире начинается с ноля.
// const firstCharacter = message[0];
// переменная firstCharacter вам не нужна и тут только для примера

// Длину строки можно узнать из свойства length
const messageLength = message.length;


// начнем считать с ноля
let aLetterCount = 0; //значение у aLetterCount будет менятся, поэтому поменяла на let


// А тут можно написать цикл, который переберет все буквы по очереди и если это 'i' - увеличит счетчик.

let i = 0;
while (i <= messageLength){
    i = i + 1;
    if (message[i] === 'i') {
    aLetterCount = aLetterCount + 1;
    }    
}

//Можно и так:
let aLetterCount = 0;
for (let letter of message){
    if (letter === 'i'){
        aLetterCount = aLetterCount + 1;
    }
}

// вывод результата
console.log(`Нашлось ${aLetterCount} букв 'i'.`);
