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
const arrayLights = Array.from(document.querySelectorAll(".light"));
const delaySec = 10;

function majorRoad () {
  arrayLights.forEach((light, index) => {
    if (index === 0) {
      light.classList.add("red");
      light.classList.remove("green");
      
    }
    if (index === 1) {
      light.classList.remove("red");
      light.classList.add("green");
      light.classList.remove("yellow");
    }
    if (index === 2) {
      light.classList.add("red");
      light.classList.remove("green");
      light.classList.remove("yellow");
      setTimeout(() => {
        light.classList.add("yellow");
      }, ((delaySec - 3) * 1000));
    }
    if (index === 3) {
      light.classList.remove("red");
      light.classList.add("green");
    }
  })
  yellowColor(minorRoad);
};

function minorRoad () {
  arrayLights.forEach((light, index) => {
    if (index === 0) {
      light.classList.remove("red");
      light.classList.add("green");
    }
    if (index === 1) {
      light.classList.add("red");
      light.classList.remove("green");
      light.classList.remove("yellow");
    }
    if (index === 2) {
      light.classList.remove("red");
      light.classList.add("green");
      light.classList.remove("yellow");
    }
    if (index === 3) {
      light.classList.add("red");
      light.classList.remove("green");
    }
  })
  yellowColor(majorRoad);
};

function yellowColor (fn) {

  setTimeout(() => {
    arrayLights.forEach ((light, index) => {
      if (index === 1 || index === 2) {
        light.classList.remove("green");
        light.classList.remove("red");
        light.classList.add("yellow");
        setTimeout(() => {
          fn();
        }, 1000);
      }
    })
  }, (delaySec * 1000));
};




document.addEventListener('load', majorRoad());