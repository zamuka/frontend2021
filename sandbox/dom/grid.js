// eslint-disable-next-line import/first
import {
  GRID_WIDTH,
  CELL_HEIGHT_PX,
  CELL_WIDTH_PX,
  GRID_HEIGHT,
} from './config.js';

/**
 * @param {string} [className='']
 * @returns {HTMLDivElement} newly created cell
 */
function createCell(className = '') {
  const cell = document.createElement('div');
  cell.classList.add('cell', className);
  cell.style.width = `${CELL_WIDTH_PX}px`;
  cell.style.height = `${CELL_HEIGHT_PX}px`;
  return cell;
}

function changeBorderColor(y, x, width, height) {
  let color = 'grass';

  if (y === 0
        || x === 0
        || x === width - 1
        || y === height - 1
  ) {
    color = 'wall';
  }

  return color;
}

const createGrid = function () {
  const mainContainer = document.createElement('div');
  mainContainer.className = 'grid';
  mainContainer.style.width = `${GRID_WIDTH * CELL_WIDTH_PX}px`;
  mainContainer.style.height = `${GRID_HEIGHT * CELL_HEIGHT_PX}px`;

  document.body.appendChild(mainContainer);

  for (let y = 0; y < GRID_HEIGHT; y = y + 1) {
    for (let x = 0; x < GRID_WIDTH; x = x + 1) {
      const colorClass = changeBorderColor(y, x, GRID_WIDTH, GRID_HEIGHT);
      const cell = createCell(colorClass);

      mainContainer.appendChild(cell);
    }
  }
};

export {
  createGrid,
};
