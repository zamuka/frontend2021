//With 'Do/While' loop:
let daysTillWeekend = Number(prompt('Сколько дней до выходных?')); //Переделала на let вместо const чтобы убрать ошибку в браузере при повторном кеше Uncaught SyntaxError: Identifier 'daysTillWeekend' has already been declared
let sighMessage = 'О';
let i = 0;

if(daysTillWeekend > 0) {
   do {
    i = i + 1;
    sighMessage = sighMessage + '-xo';
   } while (i < daysTillWeekend)  
    
    alert(sighMessage);
}
else if(daysTillWeekend === 0) {
    alert(sighMessage + '!');
} 
else if(daysTillWeekend < 0) {
    alert('Please enter a number >= 0');

//With 'For' loop: 
let daysTillWeekend = Number(prompt('Сколько дней до выходных?'));
let sighMessage = 'О';

if(daysTillWeekend > 0) {
        for (let i = 0; i < daysTillWeekend; i++) {
            sighMessage = sighMessage + '-xo';
        }
        alert(sighMessage);
    }
    else if(daysTillWeekend === 0) {
        alert(sighMessage + '!');
    } 
    else if(daysTillWeekend < 0) {
        alert('Please enter a number >= 0');
    }   
