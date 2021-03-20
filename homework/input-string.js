// Напишите программу, которая выведет переданную в нее строку, но без гласных букв (English please).

// Задание очень похоже на пересчет букв, только другой тип переменной-результата (еще бывает называют аккумулятором)

// Вот вам lorem ipsum строка для проверки


const inputString = 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...';

const vowelsArr = [ 'A', 'E', 'I', 'O', 'U', 'Y' ];

const counter = [];


for (let j = 0; j < vowelsArr.length; j++) {
    let letter = vowelsArr[j].toLowerCase();

    for (let i = 0; i < inputString.length; i++) {
        let elem = inputString[i].toLowerCase();
        
        if (letter === elem) {
            counter.push(elem);
        }
    }
}

console.log(counter.length);
