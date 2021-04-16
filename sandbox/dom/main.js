/* eslint-disable default-case */
import { CELL_TYPES, DIRECTION_TYPE, DIRECTIONS_MAP } from './config.js';
import { createGrid, getCellClass, setCellClass } from './grid.js';

const START_DIRECTION = DIRECTION_TYPE.RIGHT;

const cycleDelayMs = 100;

let isPaused = false;

const snake = {
  cells: [
    { x: 9, y: 5 },
    { x: 8, y: 5 },
    { x: 7, y: 5 },
    { x: 6, y: 5 },
    { x: 5, y: 5 },
  ],
  startPosition: { x: 10, y: 10 },
  direction: START_DIRECTION,
  getHead() {
    return this.cells[0];
  },
  drawSnake() {
    snake.cells.forEach((cell) => {
      setCellClass(cell.x, cell.y, CELL_TYPES.SNAKE);
    });
  },
  getAndTrimTail() {
    return this.cells.pop();
  },
  getNewHeadPosition() {
    const newHeadPosition = {
      ...this.getHead(),
    };

    switch (this.direction) {
      case DIRECTION_TYPE.RIGHT:
        newHeadPosition.x = newHeadPosition.x + 1;
        break;
      case DIRECTION_TYPE.UP:
        newHeadPosition.y = newHeadPosition.y - 1;
        break;
      case DIRECTION_TYPE.DOWN:
        newHeadPosition.y = newHeadPosition.y + 1;
        break;
      case DIRECTION_TYPE.LEFT:
        newHeadPosition.x = newHeadPosition.x - 1;
        break;
    }

    return newHeadPosition;
  },
};

function deletePreviousSnake() {
  const cellsAmmount = snake.cells.length;
  for (let i = 0; i < cellsAmmount; i = i + 1) {
    const { x, y } = snake.getAndTrimTail();
    setCellClass(x, y, CELL_TYPES.GRASS);
  }
}

function putSnakeOnTheStartPosition() {
  deletePreviousSnake();
  const { startPosition } = snake;

  snake.cells.push(startPosition);

  const { x, y } = snake.getHead();
  setCellClass(x, y, CELL_TYPES.SNAKE);

  isPaused = false;
}

function gameOver() {
  alert('Game Over');
  isPaused = true;
  putSnakeOnTheStartPosition();
}

function doGameStep() {
  if (isPaused) {
    return;
  }

  setTimeout(doGameStep, cycleDelayMs);

  const newHeadPosition = snake.getNewHeadPosition();
  const obstacle = getCellClass(newHeadPosition.x, newHeadPosition.y);
  switch (obstacle) {
    case CELL_TYPES.GRASS:
    case CELL_TYPES.SNAKE:
      break;
    default:
      gameOver();
      return;
  }

  snake.cells.unshift(newHeadPosition);
  setCellClass(newHeadPosition.x, newHeadPosition.y, CELL_TYPES.SNAKE);

  const { x, y } = snake.getAndTrimTail();
  setCellClass(x, y, CELL_TYPES.GRASS);
}

/**
 * @param {KeyboardEvent} event
 */
function handleKeyDown(event) {
  console.log(event.key);
  const direction = DIRECTIONS_MAP[event.key];
  const currentDirection = snake.direction;

  switch (currentDirection) {
    case 'up':
      if (direction === 'down') return;
      snake.direction = direction;
      break;
    case 'down':
      if (direction === 'up') return;
      snake.direction = direction;
      break;
    case 'right':
      if (direction === 'left') return;
      snake.direction = direction;
      break;
    case 'left':
      if (direction === 'right') return;
      snake.direction = direction;
      break;
    default:
      snake.direction = currentDirection;
  }

  switch (event.key) {
    case ' ':
      isPaused = !isPaused;
      if (!isPaused) {
        doGameStep();
      }
  }
}

/**
 * @param {object} ev
 * @param {HTMLElement} ev.target
 */
function handleClick({ target }) {
  console.log(target.dataset.x);
  console.log(target.dataset.y);
}

function main() {
  createGrid();
  snake.drawSnake();

  window.addEventListener('keydown', handleKeyDown);
  // @ts-ignore
  document.querySelector('.grid').addEventListener('mousedown', handleClick);
  doGameStep();
}

window.addEventListener('load', main);
