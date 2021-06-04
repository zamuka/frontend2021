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
export const greenRed = (light2Bulbs) => {
  setColor(light2Bulbs, LIGHT_COLORS.GREEN);

  setTimeout(() => {
    setColor(light2Bulbs, LIGHT_COLORS.RED);
  }, iterationTime - yellowTime);
};

/**
 * Div element which represents
 * a traffic light with 3 bulbs
 * @param {HTMLDivElement} light3Bulbs
 */
export const greenYellowRed = (light3Bulbs) => {
  setColor(light3Bulbs, LIGHT_COLORS.GREEN);

  setTimeout(() => {
    setColor(light3Bulbs, LIGHT_COLORS.YELLOW);

    setTimeout(() => {
      setColor(light3Bulbs, LIGHT_COLORS.RED);
    }, yellowTime);
  }, iterationTime - yellowTime * 2);
};

/**
 * Div element which represents
 * a traffic light with 2 bulbs
 * @param {HTMLDivElement} light2Bulbs
 */
export const redGreen = (light2Bulbs) => {
  setColor(light2Bulbs, LIGHT_COLORS.RED);

  setTimeout(() => {
    setColor(light2Bulbs, LIGHT_COLORS.GREEN);
  }, iterationTime);
};

/**
 * Div element which represents
 * a traffic light with 3 bulbs
 * @param {HTMLDivElement} light3Bulbs
 */
export const redYellowGreen = (light3Bulbs) => {
  setColor(light3Bulbs, LIGHT_COLORS.RED);

  setTimeout(() => {
    setColor(light3Bulbs, LIGHT_COLORS.RED, LIGHT_COLORS.YELLOW);

    setTimeout(() => {
      setColor(light3Bulbs, LIGHT_COLORS.GREEN);
    }, yellowTime);
  }, iterationTime - yellowTime);
};
