import {
  LIGHT_COLORS,
  iterationTime,
  yellowTime,
} from './_config.js';

import set_color from './_set_color.js';

/**
 * Div element which represents
 * a traffic light with 2 bulbs
 * @param {HTMLDivElement} light_2
 */
const green_red = (light_2) => {
  set_color(light_2, LIGHT_COLORS.GREEN);

  setTimeout(() => {
    set_color(light_2, LIGHT_COLORS.RED);
  }, iterationTime - yellowTime);
};

export default green_red;
