import { Animal } from './animal.js';

class Pig extends Animal {
  color = 'lightpink';

  pixels = [
    { x: 0, y: 0 },
    { x: 1, y: 0 },
    { x: 2, y: 0 },
    { x: 3, y: 0 },
    { x: -2, y: 0 },
    { x: -3, y: 0 },
    { x: 1, y: 1 },
    { x: -1, y: 1 },
    { x: 0, y: 1 },
    { x: 2, y: 1 },
    { x: -1, y: 2 },
    { x: 1, y: 2 },
    { x: 5, y: -2 },
    { x: 4, y: -1 },
    { x: 0, y: -1 },
    { x: -1, y: -1 },
    { x: -2, y: -1 },
    { x: 1, y: -1 },
    { x: 2, y: -1 },
    { x: 1, y: -2 },
    { x: -1, y: -2 },
    { x: -2, y: -3 },
    { x: 2, y: -3 },
  ];
}

export {
  Pig,
};
