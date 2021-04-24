import { CanvasLib } from '../libs/canvas-lib.js';

function startUp() {
  const canvas = new CanvasLib('canvas');

  canvas.init({ zoom: 5 });
  canvas.clear('green');

  canvas.setColor('white');

  function createChicken(startX, startY) {
    const chicken = {
      x: startX,
      y: startY,
      pixels: [
        { x: -1, y: -2 }, { x: -2, y: -1 }, { x: -1, y: -1 }, { x: -1, y: 0 },
        { x: 0, y: 0 }, { x: 1, y: 0 }, { x: -1, y: 1 }, { x: 0, y: 1 },
        { x: 1, y: 1 }, { x: 0, y: 2 }, { x: 2, y: -1 },
      ],

      draw() {
        this.pixels
          .forEach(({ x, y }) => canvas.setPixel(this.x + x, this.y + y));
      },
    };
    return chicken;
  }

  // почти то же самое, но с помощью функции-контруктора
  function Chicken(startX, startY) {
    const pixels = [
      { x: -1, y: -2 }, { x: -2, y: -1 }, { x: -1, y: -1 }, { x: -1, y: 0 },
      { x: 0, y: 0 }, { x: 1, y: 0 }, { x: -1, y: 1 }, { x: 0, y: 1 },
      { x: 1, y: 1 }, { x: 0, y: 2 }, { x: 2, y: -1 },
    ];

    this.x = startX;
    this.y = startY;

    this.draw = function () {
      pixels.forEach(({ x, y }) => canvas.setPixel(this.x + x, this.y + y));
    };
  }

  const chicken = new Chicken(130, 65);

  const animals = [
    chicken,
    new Chicken(120, 60),
    createChicken(110, 70),
  ];

  animals.forEach((animal) => animal.draw());
}

window.addEventListener('load', startUp);
