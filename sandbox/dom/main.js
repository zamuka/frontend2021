const GRID_WIDTH = 8;
const GRID_HEIGHT = 8;
const CELL_WIDTH_PX = 20;
const CELL_HEIGHT_PX = 20;

function main() {
  const mainContainer = document.createElement('div');
  mainContainer.className = 'grid';
  mainContainer.style.width = `${GRID_WIDTH * CELL_WIDTH_PX}px`;
  mainContainer.style.height = `${GRID_HEIGHT * CELL_HEIGHT_PX}px`;

  document.body.appendChild(mainContainer);

  for (let x = 0; x < GRID_WIDTH; x = x + 1) {
    for (let y = 0; y < GRID_HEIGHT; y = y + 1) {
      const cell = document.createElement('div');
      cell.classList.add('cell');

      cell.style.width = `${CELL_WIDTH_PX}px`;
      cell.style.height = `${CELL_HEIGHT_PX}px`;

      if ((x % 2) && (y % 2)) {
        cell.style.background = 'black';
      } else if (!(x % 2) && !(y % 2)) {
        cell.style.background = 'black';
      }
      mainContainer.appendChild(cell);
    }
  }
}

window.addEventListener('load', main);



