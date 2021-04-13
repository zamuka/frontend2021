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
  direction: '',
};

/**
 * Changes direction depending on the pressed key
 * @param {object} event
 */
function changeDirection(event){
  switch(event.keyCode){
    case 40:
      if(snake.direction !== "Up"){
        snake.direction = 'Down';
      }
      break;
    case 38:
      if(snake.direction !== "Down"){
        snake.direction = 'Up';
      }
      break;
    case 37:
      if(snake.direction !== "Right"){
        snake.direction = 'Left';
      }
      break;
    case 39:
      if(snake.direction !== "Left"){
        snake.direction = 'Right';
      }
      break;
  }
}
/**
 * Changes Snake Head Cordinates
 * @param {object} element object with coordinates
 * @param {string} direction string wiht direction pointer
 */
function setDirection(element, direction){
  switch(direction){
    case 'Down':
      return element.y = element.y + 1;
    case "Up":
      return element.y = element.y - 1;
    case "Left":
      return element.x = element.x - 1;
    case "Right":
      return element.x = element.x + 1;
    default:
      return element.x = element.x + 1;
  }
}

function doStep() {
  const currentHead = snake.cells[0];
  const newHead = { ...currentHead };

  setDirection(newHead, snake.direction);

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

  setInterval(doStep, 100);
}

window.addEventListener('load', main);
window.addEventListener('keydown', changeDirection);