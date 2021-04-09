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
  cell.className = className;
  cell.classList.add('cell');
  cell.style.width = `${CELL_WIDTH_PX}px`;
  cell.style.height = `${CELL_HEIGHT_PX}px`;
  return cell;
}

const createGrid = function () {
  const mainContainer = document.createElement('div');
  mainContainer.className = 'grid';
  mainContainer.style.width = `${GRID_WIDTH * CELL_WIDTH_PX}px`;
  mainContainer.style.height = `${GRID_HEIGHT * CELL_HEIGHT_PX}px`;

  document.body.appendChild(mainContainer);

  for (let y = 0; y < GRID_WIDTH; y = y + 1) {
    for (let x = 0; x < GRID_HEIGHT; x = x + 1) {
      const cell = createCell('grass');
      mainContainer.appendChild(cell);
    }
  }
};

function createWall() {
  const mainContainer = document.querySelector('.grid');
  mainContainer.classList.add('wall');
  console.log(mainContainer);
}


export {
  createGrid,
  createWall,
};

