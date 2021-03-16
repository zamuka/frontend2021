// Посчитайте количество букв 'i' в строке
const message = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';


// Обратиться к каждому символу (букве) можно используя квадратные скобки
// Например, это 'L', так как многое в цифровом мире начинается с ноля.
const firstCharacter = message[0];
// переменная firstCharacter вам не нужна и тут только для примера

// Длину строки можно узнать из свойства length
const messageLength = message.length;


// начнем считать с ноля
const aLetterCount = 0;


// А тут можно написать цикл, который переберет все буквы по очереди и если это 'i' - увеличит счетчик.


// вывод результата
console.log(`Нашлось ${aLetterCount} букв 'i'.`);
