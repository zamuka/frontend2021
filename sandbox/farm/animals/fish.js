
import { baseAnimal } from './animal.js';

const Fish = function (canvas) {
  this.color = 'yellow';
  this.pixels = [
  { x: -1 , y: -2 },
  { x: 0 , y: -2 },
  { x: -3 , y: -1 },
  { x: -2 , y: -1 },
  { x: -1 , y: -1 },
  { x: 0 , y: -1 },
  { x: 1 , y: -1 },
  { x: 2 , y: -1 },
  { x: 4 , y: -1 },
  { x: -5 , y: 0 },
  { x: -4 , y: 0 },
  { x: -2 , y: 0 },
  { x: -1 , y: 0 },
  { x: 0 , y: 0 },
  { x: 1 , y: 0 },
  { x: 2 , y: 0 },
  { x: 3 , y: 0 },
  { x: 4 , y: 0 },
  { x: -1 , y: 2 },
  { x: 0 , y: 2 },
  { x: -3 , y: 1 },
  { x: -2 , y: 1 },
  { x: -1 , y: 1 },
  { x: 0 , y: 1 },
  { x: 1 , y: 1 },
  { x: 2 , y: 1 },
  { x: 4 , y: 1 },
];

  // @ts-ignore
  this.init(canvas);
};

Object.setPrototypeOf(Fish.prototype, baseAnimal);

export {
  Fish,
};