import { CanvasLib } from '../libs/canvas-lib.js';
import {
  Chicken,
  Cow,
  Camel,
  Pig,
  Duck,
  Rabbit,
} from './animals/index.js';

const CHICKEN_COUNT = 10;
const COW_COUNT = 3;
const CAMEL_COUNT = 4;
const PIG_COUNT = 5;
const DUCK_COUNT = 7;
const RABBIT_COUNT = 5;

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

  for (let i = 0; i < CAMEL_COUNT; i = i + 1) {
    animals.push(new Camel(canvas));
  }

  for (let i = 0; i < PIG_COUNT; i = i + 1) {
    animals.push(new Pig(canvas));
  }

  for (let i = 0; i < DUCK_COUNT; i = i + 1) {
    animals.push(new Duck(canvas));
  }

  for (let i = 0; i < RABBIT_COUNT; i = i + 1) {
    animals.push(new Rabbit(canvas));
  }

  setInterval(gameStep, 50);
}

window.addEventListener('load', startUp);
