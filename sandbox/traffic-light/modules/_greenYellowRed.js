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
const greenYellowRed = (light3Bulbs) => {
  setColor(light3Bulbs, LIGHT_COLORS.GREEN);

  setTimeout(() => {
    setColor(light3Bulbs, LIGHT_COLORS.YELLOW);

    setTimeout(() => {
      setColor(light3Bulbs, LIGHT_COLORS.RED);
    }, yellowTime);
  }, iterationTime - yellowTime * 2);
};

export default greenYellowRed;
