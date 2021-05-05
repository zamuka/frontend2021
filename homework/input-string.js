// Напишите программу, которая выведет переданную в нее строку, но без гласных букв (English please).

// Задание очень похоже на пересчет букв, только другой тип переменной-результата (еще бывает называют аккумулятором)

// Вот вам lorem ipsum строка для проверки


const inputString = 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...';


// variant-1
const newInputString = inputString.replace(/[aeiouyAEIOUY]/g, '');

console.log(`Variant-1 result is: ${newInputString}`);

// variant-2

const vowelsArr = ['A', 'E', 'I', 'O', 'U', 'Y'];

let cloneString = inputString;

let newString;

for (let i = 0; i < vowelsArr.length; i = i + 1) {
  newString = cloneString.split(vowelsArr[i].toLowerCase());
  cloneString = newString.join('');
}

console.log(`Variant-2 result is: ${cloneString}`);
