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
const trafficLights = {
  leftHorisontal: document.getElementById('left-horizontal'),
  leftVertical: document.getElementById('left-vertical'),
  rightVertical: document.getElementById('right-vertical'),
  rightHorisontal: document.getElementById('right-horizontal'),
};
const colors = {
  red: 'red',
  green: 'green',
  yellow: 'yellow',
};

function removeAllColors(element) {
  const elementClassList = Array.from(element.classList);
  const colorList = Object.values(colors);
  const filterClasses = elementClassList.filter((className) => colorList.includes(className));
  element.classList.remove(...filterClasses);
}

function removeAndAddClass(element, className) {
  removeAllColors(element);
  element.classList.add(className);
}

const isHorisontal = (light) => light === trafficLights.leftHorisontal
|| light === trafficLights.rightHorisontal;

const verticalLights = Object.values(trafficLights).filter((light) => !isHorisontal(light));

let toRed = false;
let toGreen = false;

function countStart(element) {
  const elementWithNumbers = element.children[0];
  let count = Number(elementWithNumbers.innerHTML);
  if (count === 0) {
    return;
  }
  count = count - 1;
  elementWithNumbers.innerHTML = count;
}

function changeVerticalLights() {
  verticalLights.forEach((light) => {
    if (light.classList.contains(colors.green)) {
      removeAndAddClass(light, colors.red);
    } else {
      removeAndAddClass(light, colors.green);
    }
  });
}

function doBlink(element, color) {
  const blink = setInterval(() => {
    element.classList.remove(color);
    setTimeout(() => {
      element.classList.add(color);
    }, 500);
  }, 500);
  setTimeout(() => {
    clearInterval(blink);
  }, 1200);
}

function changeColor(element) {
  if (element.classList.contains(colors.green)) {
    if (isHorisontal(element)) {
      doBlink(element, colors.yellow);
      removeAndAddClass(element, colors.yellow);
      toRed = true;
    }
    return;
  }

  if (element.classList.contains(colors.yellow)) {
    element.classList.remove(colors.yellow);
    if (toRed) {
      element.classList.add(colors.red);
      toRed = false;
      return;
    }
    if (toGreen) {
      removeAndAddClass(element, colors.green);
      toGreen = false;
      changeVerticalLights();
      setInterval(countStart, 700, trafficLights.leftVertical);
      return;
    }
    return;
  }

  if (element.classList.contains(colors.red)) {
    if (isHorisontal(element)) {
      doBlink(element, colors.yellow);
      element.classList.add(colors.yellow);
      toGreen = true;
    }
  }
}
function start() {
  trafficLights.leftHorisontal.classList.add(colors.green);
  trafficLights.leftVertical.classList.add(colors.red);
  trafficLights.rightVertical.classList.add(colors.green);
  trafficLights.rightHorisontal.classList.add(colors.red);

  setInterval(countStart, 700, trafficLights.rightVertical);
}

function main() {
  start();
  setTimeout(() => {
    Object.values(trafficLights).forEach((light) => changeColor(light));
    setTimeout(() => {
      Object.values(trafficLights).forEach((light) => changeColor(light));
      setTimeout(() => {
        Object.values(trafficLights).forEach((light) => changeColor(light));
        setTimeout(() => {
          Object.values(trafficLights).forEach((light) => removeAllColors(light));
          main();
        }, 2000);
      }, 5000);
    }, 2000);
  }, 5000);
}

window.addEventListener('load', main);
