// Написать программу, которая будет вздыхать, после того как пользователь введет количество дней, оставшееся до выходных.
// Чем больше дней осталось - тем более горестный должен быть вздох.

// ввод данных пользователем
const daysTillWeekend = Number(prompt('Сколько дней до выходных?'));
const sighMessage = 'О';
// Здесь напишите ваш цикл, который добавляет '-хо'
// к sighMessage за каждый оставшийся день

let sadSights = '';
let inhaleCounter = 0;

while (inhaleCounter < daysTillWeekend) {
    sadSights = sadSights + '-хо';
    inhaleCounter++;
}

// Здесь напишите условие, которое добавит к результату радостный
// восклицательный знак, если выходные уже наступили

if (daysTillWeekend > 0) {
    alert(sighMessage + sadSights)
} else {
    alert(sighMessage + '!')
}

// выведите результат с помощью alert
