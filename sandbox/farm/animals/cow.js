import { baseAnimal } from './animal.js';

const Cow = function (canvas) {
  this.color = 'brown';
  this.pixels = [
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

  // @ts-ignore
  this.init(canvas);
};

Cow.prototype = baseAnimal;

export {
  Cow,
};
