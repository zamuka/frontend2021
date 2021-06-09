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

const carLeft = document.querySelectorAll('.light')[2];
const carRight = document.querySelectorAll('.light')[1];
const footerLeft = document.querySelectorAll('.light')[3];
const footerRight = document.querySelectorAll('.light')[0];

function clear() {
    for (const node of document.querySelectorAll ('.light')) {
        node.classList.remove('red', 'green', 'yellow');
    }
}

function setColor(firstPhaseColor, secondPhaseColor) {
    carLeft.classList.add(firstPhaseColor);
    carRight.classList.add(secondPhaseColor);
    footerLeft.classList.add(secondPhaseColor);
    footerRight.classList.add(firstPhaseColor);
}

function setLeftYellow(color) {
    carLeft.classList.add(color);
}

function setRightYellow(color) {
    carRight.classList.add(color);
}

function carLeftGreenOff(color) {
    carLeft.classList.remove(color);
}

function carRightGreenOff(color) {
    carRight.classList.remove(color);
}

function delay(ms) {
    return new Promise ((resolve) => {
        setTimeout(() => resolve(), ms);
    });
}

function motionControl() {
    Promise.resolve()
    .then(() => clear())
    .then(() => setColor('green', 'red'))
    .then(() => delay(5000))
    .then(() => setRightYellow('yellow'))
    .then(() => delay(2000))
    .then(() => carLeftGreenOff('green'))
    .then(() => setLeftYellow('yellow'))
    .then(() => delay(1000))
    .then(() => clear())
    .then(() => setColor('red', 'green'))
    .then(() => delay(5000))
    .then(() => setLeftYellow('yellow'))
    .then(() => delay(2000))
    .then(() => carRightGreenOff('green'))
    .then(() => setRightYellow('yellow'))
    .then(() => delay(1000))
    .then(() => motionControl());
}

motionControl();
