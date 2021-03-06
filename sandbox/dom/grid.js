// eslint-disable-next-line import/first
import {
  GRID_WIDTH,
  CELL_HEIGHT_PX,
  CELL_WIDTH_PX,
  GRID_HEIGHT,
  CELL_TYPES,
} from './config.js';

/** @type {HTMLDivElement} */
let mainContainer = null;

let clickHandler = null;

/**
 * @param {string} [className='']
 * @returns {HTMLDivElement} newly created cell
 */
function createCell(className = '') {
  const cell = document.createElement('div');
  cell.className = className;
  cell.style.width = `${CELL_WIDTH_PX}px`;
  cell.style.height = `${CELL_HEIGHT_PX}px`;
  return cell;
}

/**
 * @param {number} x
 * @param {number} y
 * @returns {Element}
 */
function getCell(x, y) {
  if (!mainContainer) {
    return null;
  }
  const cellIndex = x + y * GRID_WIDTH;
  const cell = mainContainer.childNodes[cellIndex];
  if (cell instanceof Element) {
    return cell;
  }
  return null;
}

/**
 * @param {number} x
 * @param {number} y
 * @param {string} className
 */
function setCellClass(x, y, className) {
  const cell = getCell(x, y);
  if (!cell) {
    return;
  }
  cell.className = className;
}

/**
 * @param {number} x
 * @param {number} y
 * @returns {string}
 */
function getCellClass(x, y) {
  const cell = getCell(x, y);
  if (!cell) {
    return '';
  }
  return cell.className;
}

const handleClick = function (event) {
  if (clickHandler) {
    clickHandler(event);
  }
};

const createGrid = function () {
  mainContainer = document.createElement('div');
  mainContainer.className = 'grid';
  mainContainer.style.width = `${GRID_WIDTH * CELL_WIDTH_PX}px`;
  mainContainer.style.height = `${GRID_HEIGHT * CELL_HEIGHT_PX}px`;

  document.body.appendChild(mainContainer);

  for (let y = 0; y < GRID_HEIGHT; y = y + 1) {
    for (let x = 0; x < GRID_WIDTH; x = x + 1) {
      let cellClass = CELL_TYPES.GRASS;

      if (y === 0 || x === 0 || y === GRID_HEIGHT - 1 || x === GRID_WIDTH - 1) {
        cellClass = CELL_TYPES.WALL;
      }

      const cell = createCell(cellClass);
      cell.dataset.x = String(x);
      cell.dataset.y = String(y);

      mainContainer.appendChild(cell);
    }
  }

  mainContainer.addEventListener('mousedown', handleClick);
};

const removeGrid = function () {
  if (mainContainer) {
    mainContainer.remove();
    mainContainer = null;
  }
};

const onGridClick = function (handler) {
  clickHandler = handler;
};

export {
  createGrid,
  setCellClass,
  getCellClass,
  removeGrid,
  onGridClick,
};
