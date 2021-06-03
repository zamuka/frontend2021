
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
const lights = document.querySelectorAll('.light');
const arrayLights = Array.from(lights);
let delaySec = 10;


function changeColor () {
  
  arrayLights.forEach((elem, index) => {
    
    if (index === 1) {
      elem.classList.add("red");
      
    }
    if (index === 2) {
      elem.classList.remove("red");
      elem.classList.add("green")
      elem.classList.remove("yellow");
    }
    yellowLight(elem, index);
  });
  
    setInterval(() => {
      arrayLights.forEach((elem, index) => {
        elem.classList.toggle("red");
        elem.classList.toggle("green");
        yellowLight(elem, index);
        
      })
    }, ((delaySec + 3) * 1000))
    
}

function yellowLight (elem, index) {
  if (index === 1 || index === 2) {
          setTimeout(() => {
            elem.classList.toggle("yellow");
            let intervalId = setInterval(() => {
              elem.classList.toggle("yellow");
            }, ((delaySec - 7) * 1000 / 8))
            setTimeout(() => {
              clearInterval(intervalId)
              elem.classList.add('yellow');
            }, ((delaySec - 7) * 1000));
            setTimeout( () => {
              elem.classList.remove('yellow');
            }, 6000)
          }, ((delaySec - 3) * 1000));
        }
}



  
  document.addEventListener('load', changeColor())