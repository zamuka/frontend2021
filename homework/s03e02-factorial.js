// Создайте программу, которая будет считать факториал числа, введенного пользователем
// Что такое факториал можно почитать тут: https://en.wikipedia.org/wiki/Factorial

// Например, факториaл 5 равен 5 * 4 * 3 * 2 * 1 = 120

// ввод данных
const factorialBase = Number(prompt('Введите число'));


// Ваш код тут
let fact = 1;
for (let i = factorialBase; i > 1; i--) {
  fact = fact * i;
}

// вывод для пользователя с помощью alert;
alert(result);