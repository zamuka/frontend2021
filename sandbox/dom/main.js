const GRID_WIDTH = 8;
const GRID_HEIGHT = 8;
const CELL_WIDTH_PX = 40;
const CELL_HEIGHT_PX = 40;

function main() {
  const mainContainer = document.createElement('div');
  mainContainer.classList.add('grid');
  mainContainer.style.width = `${GRID_WIDTH * CELL_WIDTH_PX}px`;
  mainContainer.style.width = `${GRID_HEIGHT * CELL_HEIGHT_PX}px`;

  document.body.appendChild(mainContainer);

  // Creates 8 rows
  for (let x = 0; x < GRID_WIDTH; x++) {
    // Creates 8 cells in one row
    for (let y = 0; y < GRID_HEIGHT; y++) {
      // Creates a div (cell) element
      const cell = document.createElement('div');

      // Gives width and height to the created cell
      cell.style.width = `${CELL_WIDTH_PX}px`;
      cell.style.height = `${CELL_HEIGHT_PX}px`;

      // Check if the row is odd and the cell number is odd
      if ((x % 2) && (y % 2)) {
          cell.style.background = 'black';
      }

      // For even rows and cells
      if (!(x % 2) && !(y % 2)) {
          cell.style.background = 'black';
      }

      // Appends created div to the main container
      mainContainer.appendChild(cell);
    }
  }
}

window.addEventListener('load', main);
