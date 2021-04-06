const GRID_WIDTH = 8;
const GRID_HEIGHT = 8;
const CELL_WIDTH_PX = 40;
const CELL_HEIGHT_PX = 40;

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
      
      let r;
      let g;
      let b;

      if (y % 2 == 0 && x % 2 !== 0 || y % 2 !== 0 && x % 2 == 0) {
        r = g = b = 0;
      } else {
        r = g = b = 'f';
      }
      cell.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
      mainContainer.appendChild(cell);
    }
  }
}

window.addEventListener('load', main);
