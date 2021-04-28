/* eslint-disable default-case */
import { CELL_TYPES, DIRECTION_TYPE, GRID_HEIGHT, GRID_WIDTH } from './config.js';
import { createGrid, getCellClass, setCellClass } from './grid.js';

const START_DIRECTION = DIRECTION_TYPE.RIGHT;

const cycleDelayMs = 500;

let isPaused = false;

const snake = {
  cells: [
    { x: 9, y: 5 },
    { x: 8, y: 5 },
    { x: 7, y: 5 },
    { x: 6, y: 5 },
    { x: 5, y: 5 },
  ],
  direction: START_DIRECTION,
  getHead() {
    return this.cells[0];
  },
  getAndTrimTail() {
    return this.cells.pop();
  },
};
const appleCell = {
  x: Math.floor(Math.random() * (GRID_WIDTH - 1)) + 1,
  y: Math.floor(Math.random() * (GRID_HEIGHT - 1)) + 1,
};

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
  alert('Game over');
  isPaused = true;
  // TODO: очистить поле
  snake.cells.forEach((cell) => {
    setCellClass(cell.x, cell.y, CELL_TYPES.GRASS);
  });
  // заново пересоздать змею.
  snake.cells = [
    { x: 9, y: 5 },
    { x: 8, y: 5 },
    { x: 7, y: 5 },
    { x: 6, y: 5 },
    { x: 5, y: 5 },
  ];
  snake.cells.forEach((cell) => {
    setCellClass(cell.x, cell.y, CELL_TYPES.SNAKE);
  });
}

function doGameStep() {
  if (isPaused) {
    return;
  }

  setTimeout(doGameStep, cycleDelayMs);

  const newHeadPosition = getNewHeadPosition();
  const obstacle = getCellClass(newHeadPosition.x, newHeadPosition.y);

  switch (obstacle) {
    case CELL_TYPES.GRASS:
      break;
    default:
      gameOver();
      return;
  }

  snake.cells.unshift(newHeadPosition);
  setCellClass(newHeadPosition.x, newHeadPosition.y, CELL_TYPES.SNAKE);

  const tail = snake.getAndTrimTail();
  setCellClass(tail.x, tail.y, CELL_TYPES.GRASS);
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
  if (direction) {
    switch (snake.direction) {
      case DIRECTION_TYPE.UP:
        switch (direction) {
          case DIRECTION_TYPE.DOWN:
            return;
        }
    }
    switch (snake.direction) {
      case DIRECTION_TYPE.DOWN:
        switch (direction) {
          case DIRECTION_TYPE.UP:
            return;
        }
    }
    switch (snake.direction) {
      case DIRECTION_TYPE.LEFT:
        switch (direction) {
          case DIRECTION_TYPE.RIGHT:
            return;
        }
    }
    switch (snake.direction) {
      case DIRECTION_TYPE.RIGHT:
        switch (direction) {
          case DIRECTION_TYPE.LEFT:
            return;
        }
    }
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

  snake.cells.forEach((cell) => {
    setCellClass(cell.x, cell.y, CELL_TYPES.SNAKE);
  });

  setCellClass(appleCell.x, appleCell.y, CELL_TYPES.APPLE);
  window.addEventListener('keydown', handleKeyDown);
  // @ts-ignore
  document.querySelector('.grid').addEventListener('mousedown', handleClick);
  doGameStep();
}

window.addEventListener('load', main);
