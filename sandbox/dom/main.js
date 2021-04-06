const GRID_WIDTH = 10;
const GRID_HEIGHT = 10;
const CELL_WIDTH_PX = 20;
const CELL_HEIGHT_PX = 20;

function main() {
  const mainContainer = document.createElement('div');
  mainContainer.className = 'grid';
  mainContainer.style.width = `${GRID_WIDTH * CELL_WIDTH_PX}px`;
  mainContainer.style.height = `${GRID_HEIGHT * CELL_HEIGHT_PX}px`;

  document.body.appendChild(mainContainer);

  for (let y = 0; y < GRID_WIDTH; y = y + 1) {
    for (let x = 0; x < GRID_HEIGHT; x = x + 1) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.style.width = `${CELL_WIDTH_PX}px`;
      cell.style.height = `${CELL_HEIGHT_PX}px`;

      const r = 25 * y;
      const g = 25 * x;

      cell.style.backgroundColor = `rgb(${r}, ${g}, 0)`;
      mainContainer.appendChild(cell);
    }
  }
}

window.addEventListener('load', main);
