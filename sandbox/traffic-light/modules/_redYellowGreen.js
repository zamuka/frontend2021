import {
  LIGHT_COLORS,
  iterationTime,
  yellowTime,
} from './_config.js';

import setColor from './_setColor.js';

/**
 * Div element which represents
 * a traffic light with 3 bulbs
 * @param {HTMLDivElement} light3Bulbs
 */
const redYellowGreen = (light3Bulbs) => {
  setColor(light3Bulbs, LIGHT_COLORS.RED);

  setTimeout(() => {
    setColor(light3Bulbs, LIGHT_COLORS.RED, LIGHT_COLORS.YELLOW);

    setTimeout(() => {
      setColor(light3Bulbs, LIGHT_COLORS.GREEN);
    }, yellowTime);
  }, iterationTime - yellowTime);
};

export default redYellowGreen;
