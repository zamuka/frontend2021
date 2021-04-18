/* eslint-disable default-case */
import {
  createGrid,
  CELL_TYPES,
  GRID_WIDTH,
  GRID_HEIGHT,
  getCellClass,
  setCellClass,
  DIRECTIONS_MAP,
  DIRECTION_TYPE,
} from './partials/index.js';

const START_DIRECTION = DIRECTION_TYPE.RIGHT;

const cycleDelayMs = 100;

let isPaused = false;

const snake = {
  cells: [],
  direction: START_DIRECTION,
  startPosition: { x: 10, y: 10 },
  getHead() {
    return this.cells[0];
  },
  getAndTrimTail() {
    return this.cells.pop();
  },
  putInWeight() {
    const index = this.cells.length - 1;
    const { x, y } = this.cells[index];

    this.cells.push({ x: (x + 1), y: (y + 1) });
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

const fruit = {
  coordinates: [],
  setCordinates() {
    function randomBetween(min, max) {
      return Math.floor(min + Math.random() * (max - min - 1));
    }

    const x = randomBetween(1, GRID_WIDTH);
    const y = randomBetween(1, GRID_HEIGHT);

    this.coordinates = [x, y];
  },
};

function drawSnake() {
  const { startPosition } = snake;

  snake.cells.push(startPosition);

  snake.cells.forEach((cell) => {
    setCellClass(cell.x, cell.y, CELL_TYPES.SNAKE);
  });
}
function deleteSnake() {
  snake.cells.forEach((cell) => {
    setCellClass(cell.x, cell.y, CELL_TYPES.GRASS);
  });

  snake.cells = [];
}
function deleteFruit() {
  const [x, y] = fruit.coordinates;
  setCellClass(x, y, CELL_TYPES.GRASS);
}
function drawNewFruit() {
  fruit.setCordinates();
  const [x, y] = fruit.coordinates;
  setCellClass(x, y, CELL_TYPES.FRUIT);
}
function playAgain() {
  deleteSnake();
  drawSnake();
  deleteFruit();
  drawNewFruit();
}

function gameOver() {
  alert('Game Over');
  isPaused = true;
  playAgain();
  isPaused = false;
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
      break;
    case CELL_TYPES.FRUIT:
      snake.putInWeight();
      drawNewFruit();
      break;
    case CELL_TYPES.SNAKE:
      gameOver();
      return;
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
  drawSnake();
  drawNewFruit();

  window.addEventListener('keydown', handleKeyDown);
  // @ts-ignore
  document.querySelector('.grid').addEventListener('mousedown', handleClick);
  doGameStep();
}

window.addEventListener('load', main);
