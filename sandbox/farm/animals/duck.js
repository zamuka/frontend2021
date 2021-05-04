import { Animal } from './animal.js';

class Duck extends Animal {
  direction = Math.random() * 2 * Math.PI;
  color = 'yellow';

  pixels = [
    { x: -4, y: -2, color: 'orange' },
    { x: -3, y: -3, color: 'black' },
    { x: -3, y: -2, color: 'orange' },
    { x: -2, y: -3, color: 'yellow' },
    { x: -2, y: -2 },
    { x: -1, y: -2 },
    { x: -1, y: -1 },
    { x: -1, y: 0 },
    { x: -1, y: 1 },
    { x: -0, y: -1 },
    { x: 0, y: 0},
    { x: 0, y: 1},
    { x: 0, y: 2},
    { x: 0, y: 0 },
    { x: 1, y: 0 },
    { x: 1, y: 1 },
    { x: 1, y: 2 },
    { x: 1, y: 3, color: 'orange' },
    { x: 2, y: 0, color: 'yellow' },
    { x: 2, y: 1 },
    { x: 2, y: 2 },
    { x: 3, y: 0 },
    { x: 3, y: 1 },
    { x: 4, y: -1 },
    { x: 4, y: 0 },
  ];

  move() {
    this.direction = this.direction + 0.15;
    this.x = this.x + Math.sin(this.direction);
    this.y = this.y + Math.cos(this.direction);
  }
}

export {
  Duck,
};
