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

function changeColor() {
  setTimeout(
    function () {
      carLeftLight.classList.add('red')
      carLeftLight.classList.remove('yellow')
      carRightLight.classList.add('green')
      carRightLight.classList.remove('red', 'yellow')
      footerLeftLight.classList.add('green')
      footerLeftLight.classList.remove('red')
      footerRightLight.classList.add('red')
      footerRightLight.classList.remove('green')
      setTimeout(
        function () {
          carLeftLight.classList.add('yellow')
          setTimeout (
            function () {
              carRightLight.classList.add('yellow')
              carRightLight.classList.remove('green')
              setTimeout (
                function () {
                  carLeftLight.classList.remove('yellow', 'red')
                  carLeftLight.classList.add('green')
                  carRightLight.classList.remove('yellow')
                  carRightLight.classList.add('red')
                  footerLeftLight.classList.add('red')
                  footerLeftLight.classList.remove('green')
                  footerRightLight.classList.add('green')
                  footerRightLight.classList.remove('red')
                  setTimeout (
                    function () {
                      carRightLight.classList.add('yellow')
                      setTimeout (
                        function () {
                          carLeftLight.classList.add('yellow')
                          carLeftLight.classList.remove('green')
                          changeColor();
                        }, 1000
                      )
                    },10000
                  )
                }, 1000
              )
            }, 1000
          ) 
        }, 10000
      )
    }, 1000
  )
};


function timer() {
  if (time === 1) {
    time = 13;
  }
  setTimeout (
    function () {
      time = time - 1;
      timerLeftFooterGreen.innerHTML = time;
      timerRightFooterGreen.innerHTML = time;
      timerLeftFooterRed.innerHTML = time;
      timerRightFooterRed.innerHTML = time;
      timer();
    }, 1000
  )
}


function startUp() {
  changeColor();
  timer();
}

window.addEventListener('load', startUp);
const carRightLight = document.getElementById('carRightLight');
const carLeftLight = document.getElementById('carLeftLight');
const footerRightLight = document.getElementById('footerRightLight');
const footerLeftLight = document.getElementById('footerLeftLight');
const timerLeftFooterGreen = document.querySelector('#footerLeftLight .green');
const timerRightFooterGreen = document.querySelector('#footerRightLight .green');
const timerLeftFooterRed = document.querySelector('#footerLeftLight .red');
const timerRightFooterRed = document.querySelector('#footerRightLight .red');
let time = 13;
