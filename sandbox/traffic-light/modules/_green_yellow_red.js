import {
  LIGHT_COLORS,
  iterationTime,
  yellowTime,
} from './_config.js';

import set_color from './_set_color.js';

/**
 * Div element which represents
 * a traffic light with 3 bulbs
 * @param {HTMLDivElement} light_3
 */
const green_yellow_red = (light_3) => {
  set_color(light_3, LIGHT_COLORS.GREEN);

  setTimeout(() => {
    set_color(light_3, LIGHT_COLORS.YELLOW);

    setTimeout(() => {
      set_color(light_3, LIGHT_COLORS.RED);
    }, yellowTime);
  }, iterationTime - yellowTime * 2);
};

export default green_yellow_red;
