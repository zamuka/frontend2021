// Создайте программу, которая будет считать факториал числа, введенного пользователем
// Что такое факториал можно почитать тут: https://en.wikipedia.org/wiki/Factorial

// Например, факториaл 5 равен 5 * 4 * 3 * 2 * 1 = 120

// ввод данных
let factorialBase = Number(prompt('Введите число'));

// Ваш код тут
let result = 1;

// Ваш код тут
if (factorialBase == 0) {
    alert('! factorial 0 is 0 !')
} else {
    for (let i = factorialBase; i >= 1; i--) {
        result = result * i;
    }
}

// вывод для пользователя с помощью alert;
alert(result);
