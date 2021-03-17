// Создайте программу, которая будет считать факториал числа, введенного пользователем
// Что такое факториал можно почитать тут: https://en.wikipedia.org/wiki/Factorial

// Например, факториaл 5 равен 5 * 4 * 3 * 2 * 1 = 120

// ввод данных
const factorialBase = Number(prompt('Введите число'));
let result = 1;

// Ваш код тут
for (i = factorialBase; i > 0 ; i = i - 1) {
    result = result * i;
}

// вывод для пользователя с помощью alert;
alert(result);