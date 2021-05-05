// Создайте программу, которая будет считать факториал числа, введенного пользователем
// Что такое факториал можно почитать тут: https://en.wikipedia.org/wiki/Factorial

// Например, факториaл 5 равен 5 * 4 * 3 * 2 * 1 = 120

// ввод данных
const factorialBase = Number(prompt('Введите число'));


// Ваш код тут

if (factorialBase !== 0) {
  factorial(factorialBase);
}

function factorial(num) {
  let result = 1

  for (let i = 1; i <= num; i++) {
    result = result * i;
  }
  alert(result);
}


// вывод для пользователя с помощью alert;
// alert(result);
