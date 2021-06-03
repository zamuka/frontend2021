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
const red_yellow_green = (light_3) => {
  set_color(light_3, LIGHT_COLORS.RED);

  setTimeout(() => {
    set_color(light_3, LIGHT_COLORS.RED, LIGHT_COLORS.YELLOW);

    setTimeout(() => {
      set_color(light_3, LIGHT_COLORS.GREEN);
    }, yellowTime);
  }, iterationTime - yellowTime);
};

export default red_yellow_green;
