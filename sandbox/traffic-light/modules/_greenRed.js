import {
  LIGHT_COLORS,
  iterationTime,
  yellowTime,
} from './_config.js';

import setColor from './_setColor.js';

/**
 * Div element which represents
 * a traffic light with 2 bulbs
 * @param {HTMLDivElement} light2Bulbs
 */
const greenRed = (light2Bulbs) => {
  setColor(light2Bulbs, LIGHT_COLORS.GREEN);

  setTimeout(() => {
    setColor(light2Bulbs, LIGHT_COLORS.RED);
  }, iterationTime - yellowTime);
};

export default greenRed;
