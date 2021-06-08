// Вспоминаем про кассы, про очереди задач..
// Очередность выполнения задач очень важна.

console.log('1 start');

setTimeout(() => {
  console.log('4 In timeout');
  Promise.resolve().then(() => console.log('5 Promise In timeout'));
});

Promise.resolve().then(() => {
  console.log('3 in promise');
  setTimeout(() => console.log('6 Timeout In promise'));
});

console.log('2 finish');
