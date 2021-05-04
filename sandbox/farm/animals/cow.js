import { Animal } from './animal.js';

class Cow extends Animal {
  direction = Math.random() * 2 * Math.PI;

  color = 'brown';

  pixels = [
    { x: -3, y: -2 },
    { x: -3, y: -1 },
    { x: -2, y: -2 },
    { x: -2, y: -1 },
    { x: -1, y: -3 },
    { x: -1, y: -2 },
    { x: -1, y: -1 },
    { x: -1, y: 0 },
    { x: -1, y: 1 },
    { x: -1, y: 2 },
    { x: -1, y: 3 },
    { x: 0, y: -1 },
    { x: 0, y: 0 },
    { x: 0, y: 1 },
    { x: 1, y: -1 },
    { x: 1, y: 0 },
    { x: 1, y: 1 },
    { x: 2, y: -1 },
    { x: 2, y: 0 },
    { x: 2, y: 1 },
    { x: 3, y: -1 },
    { x: 3, y: 0 },
    { x: 3, y: 1 },
    { x: 3, y: 2 },
    { x: 3, y: 3 },
  ];

  move() {
    this.direction = this.direction + 0.1;
    this.x = this.x + Math.cos(this.direction);
  }
}

export {
  Cow,
};
