// eslint-disable-next-line no-unused-vars
import { CanvasLib } from '../../libs/canvas-lib.js';
import { baseAnimal } from './animal.js';

/**
 * @param {CanvasLib} canvas
 */
function Chicken(canvas) {
  /**
   * this = {
   *   __proto__: Chicken.prototype,
   * }
   */
  this.color = 'yellow';
  this.pixels = [
    { x: -1, y: -2 }, { x: -2, y: -1 }, { x: -1, y: -1 }, { x: -1, y: 0 },
    { x: 0, y: 0 }, { x: 1, y: 0 }, { x: -1, y: 1 }, { x: 0, y: 1 },
    { x: 1, y: 1 }, { x: 0, y: 2 }, { x: 2, y: -1 },
  ];

  // @ts-ignore
  this.init(canvas);
}

Chicken.prototype = baseAnimal;

export {
  Chicken,
};
