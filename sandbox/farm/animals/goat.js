import { baseAnimal } from "./animal.js";

const Goat = function (canvas) {
    this.color = 'grey';
    this.pixels = [
        { x: 3, y: -2},
        { x: 2, y: -3},
        { x: 1, y: -1},
        { x: 2, y: 0},
        { x: -3, y: -1},
        { x: 1, y: 0},
        { x: 0, y: 0},
        { x: -1, y: 0},
        { x: -2, y: 0},
        { x: -2, y: 1},
        { x: -1, y: 1},
        { x: 0, y: 1},
        { x: 0, y: 2},
        { x: -2, y: 2},
        { x: 2, y: -1},

    ];
  
    // @ts-ignore
    this.init(canvas);
  };

  Object.setPrototypeOf(Goat.prototype, baseAnimal);

  export {
      Goat,
  }