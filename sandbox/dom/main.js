import { CELL_TYPES } from './config.js';
import { createGrid, getCellClass, setCellClass } from './grid.js';

const snake = {
  cells: [
    { x: 9, y: 5 },
    { x: 8, y: 5 },
    { x: 7, y: 5 },
    { x: 6, y: 5 },
    { x: 5, y: 5 },
  ],
};

function doStep() {
  const currentHead = snake.cells[0];
  // const newHead = Object.assign({}, currentHead);
  // const newHead = {
  //   x: currentHead.x,
  //   y: currentHead.y,
  // };
  const newHead = { ...currentHead };
  newHead.x = newHead.x + 1;

  snake.cells.unshift(newHead);
  setCellClass(newHead.x, newHead.y, CELL_TYPES.SNAKE);

  const tail = snake.cells.pop();
  setCellClass(tail.x, tail.y, CELL_TYPES.GRASS);
}

function main() {
  createGrid();

  snake.cells.forEach((cell) => {
    setCellClass(cell.x, cell.y, CELL_TYPES.SNAKE);
  });

  setInterval(doStep, 1000);
}

window.addEventListener('load', main);
