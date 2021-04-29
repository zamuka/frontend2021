import { CanvasLib } from '../libs/canvas-lib.js';
import {
  Chicken,
  Cow,
  Goat,
} from './animals/index.js';

const CHICKEN_COUNT = 10;
const COW_COUNT = 3;
const GOAT_COUNT = 4;

let canvas = null;
const animals = [];

function gameStep() {
  canvas.clear('green');
  canvas.setColor('white');
  animals.forEach((animal) => animal.move());
  animals.forEach((animal) => animal.draw());
}

function startUp() {
  canvas = new CanvasLib('canvas');

  canvas.init({ zoom: 5 });

  for (let i = 0; i < CHICKEN_COUNT; i = i + 1) {
    animals.push(new Chicken(canvas));
  }
  for (let i = 0; i < COW_COUNT; i = i + 1) {
    animals.push(new Cow(canvas));
  }
  for (let i = 0; i < GOAT_COUNT; i = i + 1) {
    animals.push(new Goat(canvas));
  }

  setInterval(gameStep, 50);
}

window.addEventListener('load', startUp);
