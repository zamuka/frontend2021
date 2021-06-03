/**
 * Светофоры находятся в полном беспорядке.
 * Ваша здача починить их и заставить работать как надо с помощью
 * setInterval и setTimeout
 *
 * Для включения и выключения лампочек достаточно добавить или убрать
 * класс red, yellow или green у нужного светофора.
 * С помощью текста внутри елементов с классом "bulb" можно отображать
 * оставшееся количество секунд.
 *
 * Сейчас классы и значения установлены только для демонстрации возможностей.
 * Все значения можно очистить перед реализацией.
 *
 * Реализуйте переключение светофора настолько детализировано, насколько у вас получится.
 *
 * 0. Если необходимо, добавьте id или классы светофорам
 * 1. Начните с установки только красного и зеленого
 * 2. Добавьте желтый между зеленым и красным
 * 3. Добавьте жетлый вместе с красным перед зеленым
 * 4. Обратный отсчет - конечно, задание со звездочкой
 */

// const rightCrosswalk = document.querySelector('#right-crosswalk');
// const redRightCrosswalk = rightCrosswalk.children[0];

const leftTrafficLight = document.querySelector('#left-traffic-light');
const rightTrafficLight = document.querySelector('#right-traffic-light');
const leftCrosswalk = document.querySelector('#left-crosswalk');
const rightCrosswalk = document.querySelector('#right-crosswalk');
rightCrosswalk.classList.remove('green');
leftCrosswalk.classList.remove('red');
leftTrafficLight.classList.remove('yellow', 'red');
setInterval(function () {
  rightTrafficLight.classList.add('yellow');
}, 1000);
setInterval(function () {
  rightTrafficLight.classList.remove('yellow');
}, 2000);

const bulbsLeftTraffic = document.querySelectorAll('#left-traffic-light .bulb');
const bulbsLeftCros = document.querySelectorAll('#left-crosswalk .bulb');
const bulbsRightCros = document.querySelectorAll('#right-crosswalk .bulb');

function counter(count1, count2, arg1, arg2, arg3, arg01, arg02, par1, par2) {
  let setCount1 = count1;
  let setCount2 = count2;
  const indLeftTraf0 = arg1;
  const indLeftTraf1 = arg2;
  const indLeftTraf2 = arg3;
  const indLeftCros0 = arg01;
  const indLeftCros1 = arg02;
  const indRightCros0 = par1;
  const indRightCros1 = par2;

  const timeoutId = setInterval(function () {
    indLeftTraf0.classList.add('red-light');
    indLeftTraf1.innerHTML = setCount1;
    indLeftTraf1.classList.add('counterColor1');
    indLeftCros1.classList.add('green-light');
    indLeftCros0.innerHTML = setCount1;
    indLeftCros0.classList.remove('red-light');
    indLeftCros0.classList.add('counterColor1');
    indRightCros0.classList.add('red-light');
    indRightCros0.classList.remove('counterColor1');
    indRightCros0.innerHTML = '';

    if (setCount1 <= 3) {
      indLeftTraf1.innerHTML = '';
      indLeftTraf1.classList.add('yellow-light');
    }
    setCount1 = setCount1 - 1;

    if (setCount1 === 0) {
      clearInterval(timeoutId);
      indLeftTraf1.classList.remove('yellow-light', 'counterColor1');
      indLeftTraf0.classList.remove('red-light');
      indLeftCros1.classList.remove('green-light');
      indLeftCros0.innerHTML = '';
      indLeftCros0.classList.remove('counterColor1');
      indRightCros0.classList.remove('red-light');
      const timeId = setInterval(function () {
        indLeftTraf2.classList.add('green-light');
        indLeftTraf1.innerHTML = setCount2;
        indLeftTraf1.classList.add('counterColor2');
        indLeftTraf0.classList.remove('red-light');
        indLeftCros0.classList.add('red-light');
        indRightCros0.innerHTML = setCount2;
        indRightCros0.classList.add('counterColor2');
        indRightCros1.classList.add('green-light');

        if (setCount2 === 0) {
          indLeftTraf2.classList.remove('green-light');
          clearInterval(timeId);
          indLeftTraf1.innerHTML = '';
          indLeftTraf1.classList.remove('counterColor2');
          indLeftCros0.innerHTML = '';
          indRightCros1.classList.remove('green-light');
        }
        setCount2 = setCount2 - 1;
      }, 1000);
    }
  }, 1000);
}

let totalCounter;
function sumTimeout(count1, count2) {
  const sumCounter1 = count1 * 1000;
  const sumCounter2 = count2 * 1000;
  totalCounter = (sumCounter1 + sumCounter2) + 1000;
  return totalCounter;
}

setTimeout(function restartCounter() {
  const count1 = 10;
  const count2 = 10;
  const arg = bulbsLeftTraffic;
  const par = bulbsLeftCros;
  const par2 = bulbsRightCros;
  sumTimeout(count1, count2);
  counter(count1, count2, arg[0], arg[1], arg[2], par[0], par[1], par2[0], par2[1]);
  setTimeout(restartCounter, totalCounter);
}, 100);
