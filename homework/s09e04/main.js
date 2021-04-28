const CHESS_BODY_WIDTH = 8;
const CHESS_BODY_HEIGHT = 8;
const CHESS_CELL_WIDTH = 20;
const CHESS_CELL_HEIGHT = 20;


function main() {
    const chessBody = document.createElement('div');
    chessBody.classList.add('chess__body');
    document.body.appendChild(chessBody);

    for (let i = 0; i < CHESS_BODY_WIDTH; i = i + 1) {
        for (let j = 0; j < CHESS_BODY_HEIGHT; j = j + 1) {
            const cell = document.createElement('div');
            cell.className = 'chess__cell';
            chessBody.appendChild(cell);

            if (i % 2 !== 0 && j % 2 === 0) {
                cell.style.background = '#000'
            }
            if (i % 2 === 0 && j % 2 !== 0) {
                cell.style.background = '#000'
            }
        }
    }
    chessBody.style.width = `${CHESS_BODY_WIDTH * CHESS_CELL_WIDTH}px`;
    chessBody.style.height = `${CHESS_BODY_HEIGHT * CHESS_CELL_HEIGHT}px`;


    cellsAmount = chessBody.childElementCount;
}



window.addEventListener('load', main)