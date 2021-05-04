import { Animal } from './animal.js';

class Goat extends Animal {
  constructor(canvas, x, y) {
    super(canvas)
    this.x = x;
    this.y = y;
  }
  direction = 0.5 * Math.PI;
  color = 'white';
  pixels = [
    { x: -5, y: -6, color: 'grey' },
    { x: -5, y: -5 },
    { x: -5, y: -4 },
    { x: -3, y: -6 },
    { x: -3, y: -5 },
    { x: -3, y: -4 },
    { x: -6, y: -3, color: 'white' },
    { x: -5, y: -3 },
    { x: -4, y: -3 },
    { x: -3, y: -3 },
    { x: -2, y: -3 },
    { x: -5, y: -2, color: 'black' },
    { x: -4, y: -2, color: 'white' },
    { x: -3, y: -2, color: 'black' },
    { x: -2, y: -2, color: 'white' },
    { x: -1, y: -2 },
    { x: 0, y: -2 },
    { x: 1, y: -2 },
    { x: 2, y: -2 },
    { x: 3, y: -2 },
    { x: 4, y: -2 },
    { x: -5, y: -1 },
    { x: -4, y: -1 },
    { x: -3, y: -1 },
    { x: -2, y: -1 },
    { x: -1, y: -1 },
    { x: 0, y: -1 },
    { x: 1, y: -1 },
    { x: 2, y: -1 },
    { x: 3, y: -1 },
    { x: 4, y: -1 },
    { x: -4, y: 0 },
    { x: -3, y: 0, color: 'silver' },
    { x: -2, y: 0, color: 'white' },
    { x: -1, y: 0 },
    { x: 0, y: 0 },
    { x: 1, y: 0 },
    { x: 2, y: 0 },
    { x: 3, y: 0 },
    { x: 4, y: 0 },
    { x: 5, y: 0 },
    { x: -4, y: 1 },
    { x: -2, y: 1, color: 'silver' },
    { x: -1, y: 1 },
    { x: 0, y: 1, color: 'white' },
    { x: 1, y: 1, color: 'silver' },
    { x: 2, y: 1 },
    { x: 3, y: 1 },
    { x: 4, y: 1, color: 'white' },
    { x: -2, y: 2, color: 'silver' },
    { x: 0, y: 2, color: 'white' },
    { x: 2, y: 2, color: 'silver' },
    { x: 4, y: 2, color: 'white' },
    { x: -2, y: 3, color: 'silver' },
    { x: 0, y: 3, color: 'white' },
    { x: 2, y: 3, color: 'silver'},
    { x: 4, y: 3, color: 'white' },
    { x: -2, y: 4, color: 'grey' },
    { x: 0, y: 4 },
    { x: 2, y: 4 },
    { x: 4, y: 4 },
  ];
  move() {
    this.direction = this.direction + 0.005;
    this.x = (this.x + Math.cos(this.direction) / 3);
    this.y = (this.y + Math.sin(this.direction) / 3);
  }
}

export {
  Goat,
};
