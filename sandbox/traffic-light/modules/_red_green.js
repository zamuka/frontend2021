import {
  LIGHT_COLORS,
  iterationTime,
} from './_config.js';

import set_color from './_set_color.js';

/**
 * Div element which represents
 * a traffic light with 2 bulbs
 * @param {HTMLDivElement} light_2
 */
const red_green = (light_2) => {
  set_color(light_2, LIGHT_COLORS.RED);

  setTimeout(() => {
    set_color(light_2, LIGHT_COLORS.GREEN);
  }, iterationTime);
};

export default red_green;
