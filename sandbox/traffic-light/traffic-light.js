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

const leftTrafficLights = document.querySelectorAll('.light')[2];
const rightTrafficLight = document.querySelector('#right-traffic-light');
const leftCrosswalk = document.querySelectorAll('.light')[3];
const rightCrosswalk = document.querySelectorAll('.light')[0];

function clear() {
  for (const node of document.querySelectorAll('.light')) {
    node.classList.remove('red', 'yellow', 'green');
  }
}

function setColor(lightleft, leftcross, rightcross) {
  clear();
  leftTrafficLights.classList.add(lightleft);
  leftCrosswalk.classList.add(leftcross);
  rightCrosswalk.classList.add(rightcross);
}

function turnedOnYellow(color) {
  leftTrafficLights.classList.add(color);
}

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), ms);
  });
}

function main() {
  Promise.resolve()
    .then(() => clear())
    .then(() => delay(1000))
    .then(() => setColor('red', 'green', 'red'))
    .then(() => delay(5000))
    .then(() => turnedOnYellow('yellow'))
    .then(() => delay(3000))
    .then(() => clear())
    .then(() => setColor('green', 'red', 'green'))
    .then(() => delay(5000))
    .then(() => turnedOnYellow('yellow'))
    .then(() => delay(3000));
}
main();
setInterval(main, 17000);

setInterval(function () {
  rightTrafficLight.classList.add('yellow');
}, 1000);
setInterval(function () {
  rightTrafficLight.classList.remove('yellow');
}, 2000);
