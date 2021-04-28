import { baseAnimal } from './animal.js';

const Bug = function (canvas) {
  this.color = 'black';
  this.pixels = [
    { x: 0, y: 0 },
    { x: 1, y: 0 },
    { x: 2, y: 0 },
    { x: 3, y: 0 },
    { x: 4, y: 1 },
    { x: -1, y: 0 },
    { x: -2, y: 0 },
    { x: -3, y: 0 },
    { x: -4, y: 1 },

    { x: 0, y: -1 },
    { x: 2, y: -1 },
    { x: -2, y: -1 },

    { x: 0, y: -2 },
    { x: 2, y: -2 },
    { x: -2, y: -2 },

    { x: 0, y: -3 },
    { x: 1, y: -3 },
    { x: 2, y: -3 },
    { x: -1, y: -3 },
    { x: -2, y: -3 },

    { x: 1, y: -4 },
    { x: -1, y: -4 },

    { x: 2, y: -5 },
    { x: -2, y: -5 },

    // down
    { x: 0, y: 1 },
    { x: 1, y: 1 },
    { x: 2, y: 1 },
    { x: -1, y: 1 },
    { x: -2, y: 1 },

    { x: 0, y: 2 },
    { x: 1, y: 2 },
    { x: 2, y: 2 },
    { x: -1, y: 2 },
    { x: -2, y: 2 },

    { x: 2, y: 3 },
    { x: -2, y: 3 },

    { x: 1, y: 4 },
    { x: -1, y: 4 },
  ];

  // @ts-ignore
  this.init(canvas);
};

Object.setPrototypeOf(Bug.prototype, baseAnimal);

export {
  Bug,
};
