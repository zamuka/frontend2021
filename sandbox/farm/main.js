import { CanvasLib } from '../libs/canvas-lib.js';
import {
  Chicken,
  Cow,
  Goat,
  Pig,
  Duck,
  OrangeDuck,
  Rabbit,
  Butterfly,
  Drake,
  Camel,
  Fish,
} from './animals/index.js';

const CHICKEN_COUNT = 10;
const COW_COUNT = 3;
const PIG_COUNT = 5;
const DUCK_COUNT = 7;
const ORANGEDUCK_COUNT = 3;
const RABBIT_COUNT = 5;
const BUTTERFLY_COUNT = 3;
const DRAKE_COUNT = 3;
const CAMEL_COUNT = 5;
const FISH_COUNT = 5;

let canvas = null;
const animals = [];

function gameStep() {
  canvas.clear('green');
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

  for (let i = 0; i < BUTTERFLY_COUNT; i = i + 1) {
    animals.push(new Butterfly(canvas));
  }

  for (let i = 0; i < PIG_COUNT; i = i + 1) {
    animals.push(new Pig(canvas));
  }
  
  for (let i = 0; i < DUCK_COUNT; i = i + 1) {
    animals.push(new Duck(canvas));
  }
  
  for (let i = 0; i < ORANGEDUCK_COUNT; i = i + 1) {
    animals.push(new OrangeDuck(canvas));
  }
  
  for (let i = 0; i < RABBIT_COUNT; i = i + 1) {
    animals.push(new Rabbit(canvas));
  }
  for (let i = 0; i < CAMEL_COUNT; i = i + 1) {
    animals.push(new Camel(canvas));
  }
  for (let i = 0; i < FISH_COUNT; i = i + 1) {
    animals.push(new Fish(canvas));
  }
  

  animals.push(new Goat(canvas, 230, 85));
  animals.push(new Goat(canvas, 220, 90));
  animals.push(new Goat(canvas, 247, 80));
  animals.push(new Goat(canvas, 243, 90));

  for (let i = 0; i < DRAKE_COUNT; i = i + 1) {
    animals.push(new Drake(canvas));
  }

  setInterval(gameStep, 50);
}

window.addEventListener('load', startUp);

