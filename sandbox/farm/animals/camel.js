import { baseAnimal } from './animal.js';
// -----1-1----------
// ----1111----------
// -----111--111X----
// ------1111011xxxx-
// -------111111xx--x
// -------1-1--x-x---
// -------1-1--x-x---

const Camel = function (canvas) {
  this.color = 'yellow';
  this.pixels = [
    { x: -6, y: -3 },
    { x: -4, y: -3 },
    { x: -7, y: -2 },
    { x: -6, y: -2 },
    { x: -5, y: -2 },
    { x: -4, y: -2 },
    { x: -6, y: -1 },
    { x: -5, y: -1 },
    { x: -4, y: -1 },
    { x: -1, y: -1 },
    { x: 0, y: -1 },
    { x: 1, y: -1 },
    { x: -5, y: 0 },
    { x: -4, y: 0 },
    { x: -3, y: 0 },
    { x: -2, y: 0 },
    { x: -1, y: 0 },
    { x: 0, y: 0 },
    { x: 1, y: 0 },
    { x: 2, y: 0 },
    { x: 3, y: 0 },
    { x: 4, y: 0 },
    { x: -4, y: 1 },
    { x: -3, y: 1 },
    { x: -2, y: 1 },
    { x: -1, y: 1 },
    { x: 0, y: 1 },
    { x: 1, y: 1 },
    { x: 2, y: 1 },
    { x: 3, y: 1 },
    { x: 5, y: 1 },
    { x: -4, y: 2 },
    { x: -2, y: 2 },
    { x: 1, y: 2 },
    { x: 3, y: 2 },
    { x: -4, y: 3 },
    { x: -2, y: 3 },
    { x: 1, y: 3 },
    { x: 3, y: 3 },

  ];

  // @ts-ignore
  this.init(canvas);
};

Object.setPrototypeOf(Camel.prototype, baseAnimal);

export {
  Camel,
};
