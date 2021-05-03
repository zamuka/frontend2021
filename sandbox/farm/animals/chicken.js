// eslint-disable-next-line no-unused-vars
import { CanvasLib } from '../../libs/canvas-lib.js';
import { Animal } from './animal.js';

/**
 * @param {CanvasLib} canvas
 */
class Chicken extends Animal {
  direction = Math.random() * 2 * Math.PI;

  pixels = [
    { x: -1, y: -2 }, { x: -2, y: -1 }, { x: -1, y: -1 }, { x: -1, y: 0 },
    { x: 0, y: 0 }, { x: 1, y: 0 }, { x: -1, y: 1 }, { x: 0, y: 1 },
    { x: 1, y: 1 }, { x: 0, y: 2 }, { x: 2, y: -1 },
  ];

  // Этот метод move будет жить в прототипе курицы. Если мы обратимся к chicken.move
  // то он найдется раньше, чем и move из прототипа животного и будет использован
  move() {
    this.direction = this.direction + 0.1;
    this.x = this.x + Math.cos(this.direction);
    this.y = this.y + Math.sin(this.direction);
  }
}

export {
  Chicken,
};
