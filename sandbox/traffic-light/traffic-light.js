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

function clear() {
    for (const node of document.querySelectorAll('.light')) {
        node.classList.remove('red', 'green', 'yellow');
    }
}

const crosswalkX = document.querySelectorAll('.light')[0];
const crosswalkY = document.querySelectorAll('.light')[3];
const roadX = document.querySelectorAll('.light')[1];
const roadY = document.querySelectorAll('.light')[2];

function setColor(colorRoadX, colorRoadY, colorCrosswalkX, colorCrosswalkY) {
    clear();
    roadX.classList.add(colorRoadX);
    roadY.classList.add(colorRoadY);
    crosswalkX.classList.add(colorCrosswalkX);
    crosswalkY.classList.add(colorCrosswalkY);
}

function attentionYellow(color) {
    roadX.classList.add(color);
    roadY.classList.add(color);
}

function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(), ms);
    });
}

Promise.resolve()
    .then(() => clear())
    .then(() => setColor('green', 'red', 'red', 'green'))
    .then(() => delay(3000))
    .then(() => attentionYellow('yellow'))
    .then(() => delay(2000))
    .then(() => clear())
    .then(() => setColor('red', 'green', 'green', 'red'))
    .then(() => delay(3000))
    .then(() => attentionYellow('yellow'))
    .then(() => delay(2000))
    .then(() => clear())
    .then(() => setColor('green', 'red', 'red', 'green'))


