document.addEventListener("DOMContentLoaded", function (event) {

    let container = document.getElementById('table');

    let row = document.createElement('div');

    row.classList.add('row');

    for (let i = 0; i < 8; i = i + 1) {



        let row = document.createElement('div');

        row.classList.add('row');

        container.appendChild(row);



        let rowCursor = i % 2 ? 1 : 0;



        for (let y = 0; y < 8; y = y + 1) {



            let square = document.createElement('div');

            square.style.height = 40 +'px';

            square.style.width = 40 +'px';

            row.appendChild(squareBlackColor);



            if ( (y + rowCursor) % 2 !== 0 ) {

                square.style.backgroundColor = 'rosybrown';

            } else {

                square.style.backgroundColor = 'white';

            }

        }

    }



});