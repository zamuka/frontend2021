/* eslint-disable camelcase */
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
import {
  streetXGreen,
  streetYGreen,
} from './modules/_toggleGreen.js';

import { iterationTime } from './modules/_config.js';

const startUp = () => {
  let toggler = false;
  streetXGreen();

  setInterval(() => {
    if (toggler) {
      streetXGreen();
      toggler = false;
      return;
    }

    streetYGreen();
    toggler = true;
  }, iterationTime);
};

window.addEventListener('DOMContentLoaded', startUp);
