import { LIGHT_COLORS } from './_config.js';

/**
 * Div element which represents
 * a traffic light with 2 bulbs
 * @param {HTMLDivEelement} element
 * @param  {...string} color
 */
const setColor = (element, ...color) => {
  const colors = Object.values(LIGHT_COLORS);

  colors.forEach((value) => {
    element.classList.remove(value);
  });

  element.classList.add(...color);
};

export default setColor;
