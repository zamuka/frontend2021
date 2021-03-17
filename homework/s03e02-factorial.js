// Создайте программу, которая будет считать факториал числа, введенного пользователем
// Что такое факториал можно почитать тут: https://en.wikipedia.org/wiki/Factorial

// Например, факториaл 5 равен 5 * 4 * 3 * 2 * 1 = 120

// ввод данных
const factorialBase = Number(prompt('Введите число'));


// Ваш код тут
let i = factorialBase;
let result = 1;
while (i > 0){
    result = result * i;
    i = i - 1;
}
//Если необходимо с проверкой на целые неотрицательные числа:
let i = factorialBase;
let result = 1;

if (i >= 0 && Number.isInteger(i)) {
while (i > 0) {
result = result * i;
i = i - 1;
}
} else {
    result = 'For factorial counting, please enter a positive integer';
}


// вывод для пользователя с помощью alert;
alert(result);