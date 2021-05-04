import { Animal } from './animal.js';
// -----1-1----------
// ----1111--1-1-----
// -----111-11111----
// ------111101111---
// -------1111111-1--
// -------1-1-1-1----
// -------1-1-1-1----

class Camel extends Animal{
  constructor(canvas) {
    super(canvas)
  }

  direction = Math.random() * 10 * Math.PI;
  color = '#c19a6b'
  pixels = [
    { x: -6, y: -3 },
    { x: -4, y: -3 },
    { x: -7, y: -2 },
    { x: -6, y: -2 },
    { x: -5, y: -2 },
    { x: -4, y: -2 },
    { x: -1, y: -2 },
    { x: 1, y: -2 },
    { x: -6, y: -1 },
    { x: -5, y: -1 },
    { x: -4, y: -1 },
    { x: -2, y: -1 },
    { x: -1, y: -1 },
    { x: 0, y: -1 },
    { x: 1, y: -1 },
    { x: 2, y: -1 },
    { x: -5, y: 0 },
    { x: -4, y: 0 },
    { x: -3, y: 0 },
    { x: -2, y: 0 },
    { x: -1, y: 0 },
    { x: 0, y: 0 },
    { x: 1, y: 0 },
    { x: 2, y: 0 },
    { x: 3, y: 0 },
    { x: -4, y: 1 },
    { x: -3, y: 1 },
    { x: -2, y: 1 },
    { x: -1, y: 1 },
    { x: 0, y: 1 },
    { x: 1, y: 1 },
    { x: 2, y: 1 },
    { x: 4, y: 1 },
    { x: -4, y: 2 },
    { x: -2, y: 2 },
    { x: 0, y: 2 },
    { x: 2, y: 2 },
    { x: -4, y: 3 },
    { x: -2, y: 3 },
    { x: 0, y: 3 },
    { x: 2, y: 3 },
  ];

  move() {
    this.direction = this.direction + 0.1;
    this.x = this.x + Math.cos(this.direction);
    this.y = this.y + Math.sin(this.direction);
  }
}

export {
  Camel,
};
