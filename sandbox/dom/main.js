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

let score = 0;
let isPaused = false;
const cycleDelayMs = 100;
const START_DIRECTION = DIRECTION_TYPE.RIGHT;
const displayScore = document.querySelector('#score');
const gameOverView = document.querySelector('#game_over');

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
function gameOver() {
  isPaused = true;
  gameOverView.style.display = 'flex';
  displayScore.textContent = score;
}
function moveSnake(coordinates) {
  snake.cells.unshift(coordinates);
  setCellClass(coordinates.x, coordinates.y, CELL_TYPES.SNAKE);

  const { x, y } = snake.getAndTrimTail();
  setCellClass(x, y, CELL_TYPES.GRASS);
}
function doGameStep() {
  if (isPaused) {
    return;
  }

  const newHeadPosition = snake.getNewHeadPosition();
  const obstacle = getCellClass(newHeadPosition.x, newHeadPosition.y);

  setTimeout(doGameStep, cycleDelayMs);
  switch (obstacle) {
    case CELL_TYPES.GRASS:
      moveSnake(newHeadPosition);
      break;
    case CELL_TYPES.FRUIT:
      score = score + 10;
      snake.putInWeight();
      moveSnake(newHeadPosition);
      drawNewFruit();
      break;
    case CELL_TYPES.SNAKE:
      gameOver();
      return;
    default:
      gameOver();
  }
}
function playAgain() {
  deleteSnake();
  drawSnake();
  deleteFruit();
  drawNewFruit();
  gameOverView.style.display = 'none';
  isPaused = false;
  doGameStep();
}
function playOrExit(event) {
  if (event.target.classList.contains('green')) {
    playAgain();
  }
  // TO-DO: add exit option
}

/**
 * @param {KeyboardEvent} event
 */
function handleKeyDown(event) {
  const direction = DIRECTIONS_MAP[event.key];
  const currentDirection = snake.direction;

  if (direction) {
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
    }
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

  gameOverView.addEventListener('click', playOrExit);
}

window.addEventListener('load', main);
