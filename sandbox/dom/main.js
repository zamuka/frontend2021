/* eslint-disable default-case */
import {
  CELL_TYPES, DIRECTION_TYPE, GRID_WIDTH, GRID_HEIGHT,
} from './config.js';
import * as grid from './grid.js';

const START_DIRECTION = DIRECTION_TYPE.RIGHT;

let cycleDelayMs;
let score;
let isPaused = false;

let snake;

const isVertical = (direction) => direction === DIRECTION_TYPE.DOWN
  || direction === DIRECTION_TYPE.UP;

/**
 * @param {object} ev
 * @param {HTMLElement} ev.target
 */
function handleClick({ target }) {
  const { x, y } = target.dataset;
  const head = snake.getHead();

  if (isVertical(snake.direction)) {
    if (x > head.x) snake.direction = DIRECTION_TYPE.RIGHT;
    if (x < head.x) snake.direction = DIRECTION_TYPE.LEFT;
  } else {
    // TODO: handle horizontal movement
    if (y > head.y) snake.direction = DIRECTION_TYPE.DOWN;
    if (y < head.y) snake.direction = DIRECTION_TYPE.UP;
  }
}

function addApple() {
  let randomCell;
  let randomCellClass;
  do {
    randomCell = grid.getRandomCell(GRID_WIDTH, GRID_HEIGHT);

    const { x, y } = randomCell;
    randomCellClass = grid.getCellClass(x, y);
  } while (randomCellClass !== CELL_TYPES.GRASS);

  const { x, y } = randomCell;
  grid.setCellClass(x, y, CELL_TYPES.APPLE); 
}

function init() {
  cycleDelayMs = 200;
  score = 0;
  snake = {
    cells: [
      { x: 9, y: 5 },
      { x: 8, y: 5 },
      { x: 7, y: 5 },
      { x: 6, y: 5 },
      { x: 5, y: 5 },
    ],
    targetLength: 5,
    direction: START_DIRECTION,
    getHead() {
      return this.cells[0];
    },
    getAndTrimTail() {
      return this.cells.pop();
    },
  };
  
  grid.createGrid();

  grid.onGridClick(handleClick);

  snake.cells.forEach((cell) => {
    grid.setCellClass(cell.x, cell.y, CELL_TYPES.SNAKE);
  });
  addApple();
}

function getNewHeadPosition() {
  const newHeadPosition = {
    ...snake.getHead(),
  };

  switch (snake.direction) {
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
}


function gameOver() {
  // eslint-disable-next-line no-alert
  alert('Game over');

  grid.removeGrid();
  init();
}
let input = document.createElement('input');
document.body.appendChild(input);
input.style.cssText = `
font-size: 20px;
display: block;`;
score = 0;
input.value = `Counter: ${score}`;



function doGameStep() {
  if (isPaused) {
    return;
  }

  setTimeout(doGameStep, cycleDelayMs);

  const newHeadPosition = getNewHeadPosition();
  const obstacle = grid.getCellClass(newHeadPosition.x, newHeadPosition.y);
  

  switch (obstacle) {
    case CELL_TYPES.GRASS:
      break;
    case CELL_TYPES.APPLE:
      score = score + 1;
      input.value = `Counter: ${score}`;
      addApple();
      snake.targetLength = snake.targetLength + 1;
      // TODO: Handle apple hit. score
      break;
    default:
      gameOver();
      return;
  }
  
  snake.cells.unshift(newHeadPosition);
  grid.setCellClass(newHeadPosition.x, newHeadPosition.y, CELL_TYPES.SNAKE);

  
  if (snake.targetLength < snake.cells.length) {
    const tail = snake.getAndTrimTail();
    grid.setCellClass(tail.x, tail.y, CELL_TYPES.GRASS);
  }
}

/**
 * @param {KeyboardEvent} event
 */
function handleKeyDown(event) {
  const directionsMap = {
    ArrowDown: DIRECTION_TYPE.DOWN,
    ArrowRight: DIRECTION_TYPE.RIGHT,
    ArrowUp: DIRECTION_TYPE.UP,
    ArrowLeft: DIRECTION_TYPE.LEFT,
  };

  const direction = directionsMap[event.key];
  if (direction
      && (isVertical(direction) !== isVertical(snake.direction))) {
    snake.direction = direction;
  }

  switch (event.key) {
    case ' ':
      isPaused = !isPaused;
      if (!isPaused) {
        doGameStep();
      }
  }
}

function main() {
  init();

  window.addEventListener('keydown', handleKeyDown);

  doGameStep();
}

window.addEventListener('load', main);
