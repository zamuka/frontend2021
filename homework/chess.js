const SIZE_PARAM = 50;
const MAX_ROW_ITEMS = 8;

const board = document.createElement('div');
board.style.margin = 'auto';
board.style.maxWidth = `${SIZE_PARAM * MAX_ROW_ITEMS}px`;
document.body.appendChild(board);

function chessBoard() {
  function tileCreate(color) {
    const tile = document.createElement('div');
    tile.style = 'display: inline-block;';
    tile.style.background = color;
    tile.style.width = `${SIZE_PARAM}px`;
    tile.style.paddingBottom = `${SIZE_PARAM}px`;
    return tile;
  }

  for (let i = 0; i < MAX_ROW_ITEMS; i = i + 1) {
    for (let j = 0; j < MAX_ROW_ITEMS; j = j + 1) {
      if (i % 2 === 0 && j % 2 === 0 || i % 2 !== 0 && j % 2 !== 0) {
        const tile = tileCreate('#000');
        board.appendChild(tile);
      } else {
        const tile = tileCreate('#faebd7');
        board.appendChild(tile);
      }
    }
  }
}

chessBoard();
