import {
  LIGHT_COLORS,
  iterationTime,
} from './_config.js';

import setColor from './_setColor.js';

/**
 * Div element which represents
 * a traffic light with 2 bulbs
 * @param {HTMLDivElement} light2Bulbs
 */
const redGreen = (light2Bulbs) => {
  setColor(light2Bulbs, LIGHT_COLORS.RED);

  setTimeout(() => {
    setColor(light2Bulbs, LIGHT_COLORS.GREEN);
  }, iterationTime);
};

export default redGreen;
