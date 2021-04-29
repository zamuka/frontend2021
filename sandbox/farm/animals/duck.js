import { baseAnimal } from './animal.js';

const Duck = function (canvas) {
  this.color = 'yellow';
  this.pixels = [
    { x: -4, y: -2 },
    { x: -3, y: -3 },
    { x: -3, y: -2 },
    { x: -2, y: -3 },
    { x: -2, y: -2 },
    { x: -1, y: -2 },
    { x: -1, y: -1 },
    { x: -1, y: 0 },
    { x: -1, y: 1 },
    { x: -0, y: -1 },
    { x: 0, y: 0 },
    { x: 0, y: 1 },
    { x: 0, y: 2 },
    { x: 0, y: 0 },
    { x: 1, y: 0 },
    { x: 1, y: 1 },
    { x: 1, y: 2 },
    { x: 1, y: 3 },
    { x: 2, y: 0 },
    { x: 2, y: 1 },
    { x: 2, y: 2 },
    { x: 3, y: 0 },
    { x: 3, y: 1 },
    { x: 4, y: -1 },
    { x: 4, y: 0 },
  ];

  // @ts-ignore
  this.init(canvas);
};

Object.setPrototypeOf(Duck.prototype, baseAnimal);

export {
  Duck,
};
