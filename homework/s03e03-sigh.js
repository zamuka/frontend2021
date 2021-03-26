// Написать программу, которая будет вздыхать, после того как пользователь введет количество дней, оставшееся до выходных.
// Чем больше дней осталось - тем более горестный должен быть вздох.

// ввод данных пользователем

const daysTillWeekend = Number(prompt('How much  days till weekends?'));

let sighMessage = '0';

// Здесь напишите ваш цикл, который добавляет '-хо'
// к sighMessage за каждый оставшийся день

sighMessage = '';

for( let i = daysTillWeekend; i > 0; i-- ){
    sighMessage = sighMessage + '-xo';
}

// Здесь напишите условие, которое добавит к результату радостный
// восклицательный знак, если выходные уже наступили

if( daysTillWeekend === 0 ){
    sighMessage = sighMessage + '!';
}

// выведите результат с помощью alert

alert(sighMessage);