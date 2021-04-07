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

  for (let y = 0; y < GRID_WIDTH; y = y + 1) {
    for (let x = 0; x < GRID_HEIGHT; x = x + 1) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.style.width = `${CELL_WIDTH_PX}px`;
      cell.style.height = `${CELL_HEIGHT_PX}px`;
      let r, g, b;
    if ((y + x) % 2 === 0) {
      r = 0;
      g = 0;
      b = 0;
      // или просто cell.style.backgroundColor = `rgb(0, 0, 0)`;
    } else {
      r = 255;
      g = 255;
      b = 255;
      // или так cell.style.backgroundColor = `rgb(255, 255, 255)`; но тогда 
      // в конце убираем cell.style.backgroundColor = `rgb(${r}, ${g}, ${g})`; 
    }

      cell.style.backgroundColor = `rgb(${r}, ${g}, ${g})`;
      mainContainer.appendChild(cell);
    }
  }
}

window.addEventListener('load', main);
