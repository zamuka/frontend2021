import { createGrid } from './grid.js';
import { createWall } from './grid.js';

function main() {
  createGrid();
  createWall();
}

window.addEventListener('load', main);
