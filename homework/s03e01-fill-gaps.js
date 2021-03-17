// Замените пустые квадраты скобками, операторами или другими символами.
// Считаем, что пременные a и b, где необходимо, определены раньше.

// Такие небольшие ответы прикладывайте прямо сюда. Нет необходимости создавать codepen или заливать на github.

// 1. В условии if
if (a === b) {
  console.log('a равно b');
}


// 2. В операторе while
while (a > b) {
  console.log('b все еще меньше a');
  b = b + 10;
}


// 3. В условии if с блоком else
if (a > b) {
  console.log('a больше b');
 } else {
  console.log('b не меньше a');
 }

// 4. В операторе for
for (let a = 0; a < 10; a = a + 1) {
  // этот блок выполнится 10 раз
  b = b + a;
}

