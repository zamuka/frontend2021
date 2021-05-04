import { baseAnimal } from './animal.js';

const Butterfly = function (canvas) {
  this.color = 'Plum';
  this.pixels = [
    { x: -6, y: -4 },
    { x: -5, y: -4 },
    { x: -4, y: -4 },
    { x: 4, y: -4 },
    { x: 5, y: -4 },
    { x: 6, y: -4 },

    { x: -6, y: -3 },
    { x: -5, y: -3 },
    { x: -4, y: -3 },
    { x: -3, y: -3 },
    { x: -2, y: -3 },
    { x: 2, y: -3 },
    { x: 3, y: -3 },
    { x: 4, y: -3 },
    { x: 5, y: -3 },
    { x: 6, y: -3 },

    { x: -6, y: -2 },
    { x: -5, y: -2 },
    { x: -4, y: -2 },
    { x: -3, y: -2 },
    { x: -2, y: -2 },
    { x: -1, y: -2 },
    { x: 1, y: -2 },
    { x: 2, y: -2 },
    { x: 3, y: -2 },
    { x: 4, y: -2 },
    { x: 5, y: -2 },
    { x: 6, y: -2 },

    { x: -6, y: -1 },
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
    { x: 5, y: -1 },
    { x: 6, y: -1 },

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
    { x: 5, y: 0 },

    { x: -4, y: 1 },
    { x: -3, y: 1 },
    { x: -2, y: 1 },
    { x: -1, y: 1 },
    { x: 0, y: 1 },
    { x: 1, y: 1 },
    { x: 2, y: 1 },
    { x: 3, y: 1 },
    { x: 4, y: 1 },

    { x: -4, y: 2 },
    { x: -3, y: 2 },
    { x: -2, y: 2 },
    { x: -1, y: 2 },
    { x: 0, y: 2 },
    { x: 1, y: 2 },
    { x: 2, y: 2 },
    { x: 3, y: 2 },
    { x: 4, y: 2 },

    { x: -4, y: 3 },
    { x: -3, y: 3 },
    { x: -2, y: 3 },
    { x: -1, y: 3 },
    { x: 1, y: 3 },
    { x: 2, y: 3 },
    { x: 3, y: 3 },
    { x: 4, y: 3 },

    { x: -3, y: 4 },
    { x: -2, y: 4 },
    { x: 2, y: 4 },
    { x: 3, y: 4 },

  ];

  // @ts-ignore
  this.init(canvas);
};

Butterfly.prototype.move = function () {
  this.x = this.x + Math.random() - 0.2;
  this.y = this.y + Math.random() - 0.2;
};

Butterfly.prototype = baseAnimal;


export {
  Butterfly,
};

