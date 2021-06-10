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

/** YOUR CODE HERE */
import TrafficLight from './TrafficLight.js';

let toggler = true;
const yellow = 2_000;
const iteration = 10_000;

const divX2Bulbs = document.querySelector('.street-x-2b');
const divX3Bulbs = document.querySelector('.street-x-3b');

const divY2Bulbs = document.querySelector('.street-y-2b');
const divY3Bulbs = document.querySelector('.street-y-3b');

const streetY2Bulbs = new TrafficLight(divY2Bulbs);
const streetY3Bulbs = new TrafficLight(divY3Bulbs);

const streetX2Bulbs = new TrafficLight(divX2Bulbs);
const streetX3Bulbs = new TrafficLight(divX3Bulbs);

function oneCycle() {
  let greenRed2Bulbs = streetY2Bulbs;
  let greenYellowRed3Bulbs = streetY3Bulbs;

  let redGreen2Bulbs = streetX2Bulbs;
  let redYellowGreen3Bulbs = streetX3Bulbs;

  if (toggler) {
    greenRed2Bulbs = streetX2Bulbs;
    greenYellowRed3Bulbs = streetX3Bulbs;

    redGreen2Bulbs = streetY2Bulbs;
    redYellowGreen3Bulbs = streetY3Bulbs;
  }

  greenRed2Bulbs.init()
    .then((light) => light.setGreen())
    .then((light) => light.delay(iteration - yellow))
    .then((light) => light.setRed())
    .then((light) => light.delay(iteration));

  greenYellowRed3Bulbs.init()
    .then((light) => light.setGreen())
    .then((light) => light.delay(iteration - yellow * 2))
    .then((light) => light.setYellow())
    .then((light) => light.delay(yellow))
    .then((light) => light.setRed())
    .then((light) => light.delay(iteration));

  redGreen2Bulbs.init()
    .then((light) => light.setRed())
    .then((light) => light.delay(iteration))
    .then((light) => light.setGreen());

  redYellowGreen3Bulbs.init()
    .then((light) => light.setRed())
    .then((light) => light.delay(iteration - yellow))
    .then((light) => light.setRedYellow())
    .then((light) => light.delay(yellow))
    .then((light) => light.setGreen());

  toggler = !toggler;
}

function onStartUp() {
  oneCycle();

  setInterval(() => {
    oneCycle();
  }, iteration);
}

window.addEventListener('DOMContentLoaded', onStartUp);
