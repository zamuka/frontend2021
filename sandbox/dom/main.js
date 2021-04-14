/* eslint-disable default-case */
import { CELL_TYPES, DIRECTION_TYPE } from './config.js';
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

function setDirection(direction) {
  const currentHead = snake.cells[0];
  const newHead = { ...currentHead };
  switch (direction) {
    case DIRECTION_TYPE.RIGHT:
      newHead.x = newHead.x + 1;
      break;
    case DIRECTION_TYPE.UP:
      newHead.y = newHead.y - 1;
      break;
    case DIRECTION_TYPE.DOWN:
      newHead.y = newHead.y + 1;
      break;
    case DIRECTION_TYPE.LEFT:
      newHead.x = newHead.x - 1;
      break;
  }
  snake.cells.unshift(newHead);
  setCellClass(newHead.x, newHead.y, CELL_TYPES.SNAKE);

  const tail = snake.cells.pop();
  setCellClass(tail.x, tail.y, CELL_TYPES.GRASS);
}
function doStep(key) {
  switch (key.keyCode) {
    case 40:
      setDirection(DIRECTION_TYPE.DOWN);
      break;
    case 39:
      setDirection(DIRECTION_TYPE.RIGHT);
      break;
    case 38:
      setDirection(DIRECTION_TYPE.UP);
      break;
    case 37:
      setDirection(DIRECTION_TYPE.LEFT);
      break;
  }
}
function main() {
  createGrid();

  snake.cells.forEach((cell) => {
    setCellClass(cell.x, cell.y, CELL_TYPES.SNAKE);
  });
  // setInterval(doStep, 1000);
  window.addEventListener('keydown', doStep);
}

window.addEventListener('load', main);
