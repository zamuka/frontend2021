// eslint-disable-next-line no-unused-vars
import { baseAnimal } from './animal.js';

/**
 * @param {CanvasLib} canvas
 */
function Donkey(canvas) {
  /**
   * this = {
   *   __proto__: Chicken.prototype,
   * }
   */
  this.color = 'blue';
  this.pixels = [
    { x: -3, y: -8, color: 'blue'},
    { x: -4, y: -8, color: 'blue' },
    { x: -3, y: -7, color: 'blue' },
    { x: -4, y: -7, color: 'blue' },
    { x: -3, y: -6, color: 'blue' },
    { x: -4, y: -6, color: 'blue' },
    { x: -5, y: -5, color: 'blue' },
    { x: -4, y: -5, color: 'blue' },
    { x: -3, y: -5, color: 'blue' },
    { x: -2, y: -5, color: 'blue' },
    { x: -5, y: -4, color: 'blue' },
    { x: -4, y: -4, color: 'red' },
    { x: -3, y: -4, color: 'red' },
    { x: -2, y: -4, color: 'blue' },
    { x: -5, y: -3, color: 'blue' },
    { x: -4, y: -3, color: 'red' },
    { x: -3, y: -3, color: 'red' },
    { x: -2, y: -3, color: 'blue' },
    { x: -5, y: -2, color: 'blue' },
    { x: -4, y: -2, color: 'red' },
    { x: -3, y: -2, color: 'red' },
    { x: -2, y: -2, color: 'blue' },
    { x: -5, y: -1, color: 'blue' },
    { x: -4, y: -1, color: 'red' },
    { x: -3, y: -1, color: 'red' },
    { x: -2, y: -1, color: 'blue' },
    { x: -5, y: 0, color: 'blue' },
    { x: -4, y: 0, color: 'red' },
    { x: -3, y: 0, color: 'red' },
    { x: -2, y: 0, color: 'blue' },
    { x: -5, y: 1, color: 'blue' },
    { x: -4, y: 1, color: 'red' },
    { x: -3, y: 1, color: 'red' },
    { x: -2, y: 1, color: 'blue' },
    { x: -1, y: 1, color: 'blue' },
    { x: -0, y: 1, color: 'blue' },
    { x: 1, y: 1, color: 'blue' },
    { x: -5, y: 2, color: 'blue' },
    { x: -4, y: 2, color: 'red' },
    { x: -3, y: 2, color: 'red' },
    { x: -2, y: 2, color: 'red' },
    { x: -1, y: 2, color: 'blue' },
    { x: 0, y: 2, color: 'blue' },
    { x: -5, y: 2, color: 'blue' },
    { x: -4, y: 3, color: 'red' },
    { x: -3, y: 3, color: 'red' },
    { x: -2, y: 3, color: 'red' },
    { x: -1, y: 3, color: 'blue' },
    { x: 0, y: 3, color: 'blue' },
    { x: -5, y: 3, color: 'blue' },
    { x: -4, y: 3, color: 'red' },
    { x: -3, y: 4, color: 'red' },
    { x: -2, y: 4, color: 'red' },
    { x: -1, y: 4, color: 'blue' },
    { x: 0, y: 4, color: 'blue' },
    { x: -5, y: 4, color: 'blue' },
    { x: -4, y: 4, color: 'red' },
    { x: -3, y: 4, color: 'red' },
    { x: -3, y: 5, color: 'red' },
    { x: -2, y: 5, color: 'red' },
    { x: -1, y: 5, color: 'blue' },
    { x: 0, y: 5, color: 'blue' },
    { x: -5, y: 5, color: 'blue' },
    { x: -4, y: 5, color: 'red' },
    { x: -3, y: 5, color: 'red' },
    { x: -4, y: 6, color: 'blue' },
    { x: -3, y: 6, color: 'blue' },
    { x: -2, y: 6, color: 'blue' },
    { x: -1, y: 6, color: 'white' },
    { x: 0, y: 6, color: 'black' },
    { x: 1, y: 7, color: 'blue' },
    { x: -4, y: 7, color: 'blue' },
    { x: -3, y: 7, color: 'blue' },
    { x: -2, y: 7, color: 'blue' },
    { x: -1, y: 7, color: 'black' },
    { x: 0, y: 7, color: 'white' },
    { x: 1, y: 7, color: 'blue' },
    { x: -5, y: 8, color: 'blue' },
    { x: -4, y: 8, color: 'blue' },
    { x: -3, y: 8, color: 'blue' },
    { x: -2, y: 8, color: 'blue' },
    { x: -1, y: 8, color: 'blue' },
    { x: 0, y: 8, color: 'blue' },
    { x: -5, y: 9, color: 'blue' },
    { x: -4, y: 9, color: 'blue' },
    { x: -3, y: 9, color: 'blue' },
    { x: -2, y: 9, color: 'blue' },
    { x: -1, y: 9, color: 'blue' },
    { x: 0, y: 9, color: 'blue' },
    { x: -5, y: 10, color: 'blue' },
    { x: -4, y: 10, color: 'blue' },
    { x: -3, y: 10, color: 'blue' },
    { x: -2, y: 10, color: 'blue' },
    { x: -1, y: 10, color: 'blue' },
    { x: 0, y: 10, color: 'blue' },
    { x: -5, y: 11, color: 'blue' },
    { x: -4, y: 11, color: 'blue' },
    { x: -3, y: 11, color: 'blue' },
    { x: -2, y: 11, color: 'grey' },
    { x: -1, y: 11, color: 'grey' },
    { x: 0, y: 11, color: 'grey' },
    { x: -5, y: 12, color: 'blue' },
    { x: -4, y: 12, color: 'blue' },
    { x: -3, y: 12, color: 'grey' },
    { x: -2, y: 12, color: 'grey' },
    { x: -1, y: 12, color: 'grey' },
    { x: 0, y: 12, color: 'grey' },
    { x: -5, y: 13, color: 'blue' },
    { x: -4, y: 13, color: 'grey' },
    { x: -3, y: 13, color: 'grey' },
    { x: -2, y: 13, color: 'grey' },
    { x: -1, y: 13, color: 'grey' },
    { x: 0, y: 13, color: 'grey' },
    { x: -5, y: 14, color: 'blue' },
    { x: -4, y: 14, color: 'grey' },
    { x: -3, y: 14, color: 'grey' },
    { x: -2, y: 14, color: 'black' },
    { x: -1, y: 14, color: 'black' },
    { x: 0, y: 14, color: 'grey' },
    { x: -5, y: 15, color: 'blue' },
    { x: -4, y: 15, color: 'blue' },
    { x: -3, y: 15, color: 'grey' },
    { x: -2, y: 15, color: 'grey' },
    { x: -1, y: 15, color: 'grey' },
    { x: 0, y: 15, color: 'grey' },
    { x: -4, y: 16, color: 'blue' },
    { x: -3, y: 16, color: 'blue' },
    { x: -2, y: 16, color: 'grey' },
    { x: -1, y: 16, color: 'grey' },
    { x: 0, y: 16, color: 'grey' },
    { x: -4, y: 17, color: 'blue' },
    { x: -3, y: 17, color: 'blue' },
    { x: -2, y: 17, color: 'grey' },
    { x: -1, y: 17, color: 'grey' },
    { x: 0, y: 17, color: 'grey' },
    { x: -4, y: 18, color: 'blue' },
    { x: -3, y: 18, color: 'blue' },
    { x: -2, y: 18, color: 'blue' },
    { x: -1, y: 18, color: 'blue' },
    { x: 0, y: 18, color: 'blue' },
    { x: -4, y: 19, color: 'blue' },
    { x: -3, y: 19, color: 'blue' },
    { x: -2, y: 19, color: 'blue' },
    { x: -1, y: 19, color: 'blue' },
    { x: 0, y: 19, color: 'blue' },
    { x: -3, y: 20, color: 'blue' },
    { x: -2, y: 20, color: 'blue' },
    { x: -1, y: 20, color: 'blue' },
    { x: 0, y: 20, color: 'blue' },
    { x: -2, y: 21, color: 'blue' },
    { x: -1, y: 21, color: 'blue' },
    { x: 0, y: 21, color: 'blue' },
    { x: -2, y: 22, color: 'blue' },
    { x: -1, y: 22, color: 'blue' },
    { x: 0, y: 22, color: 'blue' },
    { x: -2, y: 23, color: 'blue' },
    { x: -1, y: 23, color: 'blue' },
    { x: -2, y: 24, color: 'blue' },
    { x: -1, y: 24, color: 'blue' },
    { x: -2, y: 25, color: 'black' },
    { x: -1, y: 25, color: 'black' },
    { x: -3, y: 26, color: 'black' },
    { x: -2, y: 26, color: 'black' },
    { x: -1, y: 26, color: 'black' },
    { x: 0, y: 26, color: 'black' },

    { x: 3, y: -8, },
    { x: 4, y: -8, },
    { x: 3, y: -7, },
    { x: 4, y: -7, },
    { x: 3, y: -6, },
    { x: 4, y: -6, },
    { x: 5, y: -5, color: 'blue' },
    { x: 4, y: -5, color: 'blue' },
    { x: 3, y: -5, color: 'blue' },
    { x: 2, y: -5, color: 'blue' },
    { x: 5, y: -4, color: 'blue' },
    { x: 4, y: -4, color: 'red' },
    { x: 3, y: -4, color: 'red' },
    { x: 2, y: -4, color: 'blue' },
    { x: 5, y: -3, color: 'blue' },
    { x: 4, y: -3, color: 'red' },
    { x: 3, y: -3, color: 'red' },
    { x: 2, y: -3, color: 'blue' },
    { x: 5, y: -2, color: 'blue' },
    { x: 4, y: -2, color: 'red' },
    { x: 3, y: -2, color: 'red' },
    { x: 2, y: -2, color: 'blue' },
    { x: 5, y: -1, color: 'blue' },
    { x: 4, y: -1, color: 'red' },
    { x: 3, y: -1, color: 'red' },
    { x: 2, y: -1, color: 'blue' },
    { x: 5, y: 0, color: 'blue' },
    { x: 4, y: 0, color: 'red' },
    { x: 3, y: 0, color: 'red' },
    { x: 2, y: 0, color: 'blue' },
    { x: 5, y: 0, color: 'blue' },
    { x: 4, y: 0, color: 'red' },
    { x: 3, y: 0, color: 'red' },
    { x: 2, y: 0, color: 'blue' },
    { x: 5, y: 1, color: 'blue' },
    { x: 4, y: 1, color: 'red' },
    { x: 3, y: 1, color: 'red' },
    { x: 2, y: 1, color: 'blue' },
    { x: 1, y: 1, color: 'blue' },
    { x: 0, y: 1, color: 'blue' },
    { x: 1, y: 1, color: 'blue' },
    { x: 5, y: 2, color: 'blue' },
    { x: 4, y: 2, color: 'red' },
    { x: 3, y: 2, color: 'red' },
    { x: 2, y: 2, color: 'red' },
    { x: 1, y: 2, color: 'blue' },
    { x: 0, y: 2, color: 'blue' },
    { x: 5, y: 2, color: 'blue' },
    { x: 4, y: 3, color: 'red' },
    { x: 3, y: 3, color: 'red' },
    { x: 2, y: 3, color: 'red' },
    { x: 1, y: 3, color: 'blue' },
    { x: 0, y: 3, color: 'blue' },
    { x: 5, y: 3, color: 'blue' },
    { x: 4, y: 3, color: 'red' },
    { x: 3, y: 4, color: 'red' },
    { x: 2, y: 4, color: 'red' },
    { x: 1, y: 4, color: 'blue' },
    { x: 0, y: 4, color: 'blue' },
    { x: 5, y: 4, color: 'blue' },
    { x: 4, y: 4, color: 'red' },
    { x: 3, y: 4, color: 'red' },
    { x: 3, y: 5, color: 'red' },
    { x: 2, y: 5, color: 'red' },
    { x: 1, y: 5, color: 'blue' },
    { x: 0, y: 5, color: 'blue' },
    { x: 5, y: 5, color: 'blue' },
    { x: 4, y: 5, color: 'red' },
    { x: 3, y: 5, color: 'red' },
    { x: 4, y: 6, color: 'whi7e' },
    { x: 3, y: 6, color: 'black' },
    { x: 2, y: 6, color: 'blue' },
    { x: 1, y: 6, color: 'blue' },
    { x: 0, y: 6, color: 'blue' },
    { x: 4, y: 7, color: 'black' },
    { x: 3, y: 7, color: 'white' },
    { x: 2, y: 7, color: 'blue' },
    { x: 1, y: 7, color: 'blue' },
    { x: 0, y: 7, color: 'blue' },
    { x: 5, y: 8, color: 'blue' },
    { x: 4, y: 8, color: 'blue' },
    { x: 3, y: 8, color: 'blue' },
    { x: 2, y: 8, color: 'blue' },
    { x: 1, y: 8, color: 'blue' },
    { x: 0, y: 8, color: 'blue' },{ x: -5, y: 10, color: 'blue' },
    { x: 5, y: 9, color: 'blue' },
    { x: 4, y: 9, color: 'blue' },
    { x: 3, y: 9, color: 'blue' },
    { x: 2, y: 9, color: 'blue' },
    { x: 1, y: 9, color: 'blue' },
    { x: 0, y: 9, color: 'blue' },
    { x: 5, y: 10, color: 'blue' },
    { x: 4, y: 10, color: 'blue' },
    { x: 3, y: 10, color: 'blue' },
    { x: 2, y: 10, color: 'blue' },
    { x: 1, y: 10, color: 'blue' },
    { x: 0, y: 10, color: 'blue' },
    { x: 5, y: 11, color: 'blue' },
    { x: 4, y: 11, color: 'blue' },
    { x: 3, y: 11, color: 'blue' },
    { x: 2, y: 11, color: 'grey' },
    { x: 1, y: 11, color: 'grey' },
    { x: 0, y: 11, color: 'grey' },
    { x: 5, y: 12, color: 'blue' },
    { x: 4, y: 12, color: 'blue' },
    { x: 3, y: 12, color: 'grey' },
    { x: 2, y: 12, color: 'grey' },
    { x: 1, y: 12, color: 'grey' },
    { x: 0, y: 12, color: 'grey' },
    { x: 5, y: 13, color: 'blue' },
    { x: 4, y: 13, color: 'grey' },
    { x: 3, y: 13, color: 'grey' },
    { x: 2, y: 13, color: 'grey' },
    { x: 1, y: 13, color: 'grey' },
    { x: 0, y: 13, color: 'grey' },
    { x: 5, y: 14, color: 'blue' },
    { x: 4, y: 14, color: 'grey' },
    { x: 3, y: 14, color: 'grey' },
    { x: 2, y: 14, color: 'black' },
    { x: 1, y: 14, color: 'black' },
    { x: 0, y: 14, color: 'grey' },
    { x: 5, y: 15, color: 'blue' },
    { x: 4, y: 15, color: 'blue' },
    { x: 3, y: 15, color: 'grey' },
    { x: 2, y: 15, color: 'grey' },
    { x: 1, y: 15, color: 'grey' },
    { x: 0, y: 15, color: 'grey' },

    { x: 4, y: 16, color: 'blue' },
    { x: 3, y: 16, color: 'blue' },
    { x: 2, y: 16, color: 'grey' },
    { x: 1, y: 16, color: 'grey' },
    { x: 0, y: 16, color: 'grey' },
    { x: 4, y: 17, color: 'blue' },
    { x: 3, y: 17, color: 'blue' },
    { x: 2, y: 17, color: 'grey' },
    { x: 1, y: 17, color: 'grey' },
    { x: 0, y: 17, color: 'grey' },
    { x: 4, y: 18, color: 'blue' },
    { x: 3, y: 18, color: 'blue' },
    { x: 2, y: 18, color: 'blue' },
    { x: 1, y: 18, color: 'blue' },
    { x: 0, y: 18, color: 'blue' },
    { x: 4, y: 19, color: 'blue' },
    { x: 3, y: 19, color: 'blue' },
    { x: 2, y: 19, color: 'blue' },
    { x: 1, y: 19, color: 'blue' },
    { x: 0, y: 19, color: 'blue' },
    { x: 3, y: 20, color: 'blue' },
    { x: 2, y: 20, color: 'blue' },
    { x: 1, y: 20, color: 'blue' },
    { x: 0, y: 20, color: 'blue' },
    { x: 2, y: 21, color: 'blue' },
    { x: 1, y: 21, color: 'blue' },
    { x: 0, y: 21, color: 'blue' },
    { x: 2, y: 22, color: 'blue' },
    { x: 1, y: 22, color: 'blue' },
    { x: 0, y: 22, color: 'blue' },
    { x: 2, y: 23, color: 'blue' },
    { x: 1, y: 23, color: 'blue' },
    { x: 2, y: 24, color: 'blue' },
    { x: 1, y: 24, color: 'blue' },
    { x: 2, y: 25, color: 'black' },
    { x: 1, y: 25, color: 'black' },
    { x: 3, y: 26, color: 'black' },
    { x: 2, y: 26, color: 'black' },
    { x: 1, y: 26, color: 'black' },
    { x: 0, y: 26, color: 'black' },

  ];

  // @ts-ignore
  this.init(canvas);
}

Donkey.prototype = baseAnimal;

export {
  Donkey,
};
