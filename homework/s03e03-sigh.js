// Написать программу, которая будет вздыхать, после того как пользователь введет количество дней, оставшееся до выходных.
// Чем больше дней осталось - тем более горестный должен быть вздох.

// ввод данных пользователем
// const daysTillWeekend = Number(prompt('Сколько дней до выходных?'));

// let sighMessage = 'О';

// Здесь напишите ваш цикл, который добавляет '-хо'
// к sighMessage за каждый оставшийся день


// Здесь напишите условие, которое добавит к результату радостный
// восклицательный знак, если выходные уже наступили

// выведите результат с помощью alert

const daysTillWeekend = Number(prompt('Сколько дней до выходных?'));
let sighMessage = 'О';

if (daysTillWeekend > 0) {
    for (let i = 1; i < daysTillWeekend; i++) {
        sighMessage = sighMessage + '-xo';
    }
    alert(sighMessage);
} else if (daysTillWeekend === 0) {
    alert(sighMessage + '!');
} else if (daysTillWeekend < 0) {
    alert('Невозможно');
}