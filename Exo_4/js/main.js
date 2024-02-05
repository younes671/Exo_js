
// permet d'ajouter ou de supprimer une case lié a une touche précise

const container = document.body;
        const keyDownHandler = (event) => {
            if (event.key === 'ArrowDown') {
                createSquare();
            } else if (event.key === 'ArrowUp') {
                removeLastSquare();
            }
        };


        // fonction est appeler sur chaque pression des touches déterminées plus haut

        document.addEventListener('keydown', keyDownHandler); 


        // création d'une cellule

        function createSquare() {
            const square = document.createElement('div');
            square.classList.add('square');
            square.style.backgroundColor = getRandomColor();
            container.appendChild(square);

            square.addEventListener('click', () => {
                if (square.style.backgroundColor !== 'black') {
                    square.style.backgroundColor = 'black';
                } else {
                    square.style.backgroundColor = getRandomColor();
                }
            });
        }


        // suppression d'une cellule

        function removeLastSquare() {
            const squares = document.querySelectorAll('.square');
            if (squares.length > 0) {
                const lastSquare = squares[squares.length - 1];
                container.removeChild(lastSquare);
            }
        }


        // générateur de couleur aléatoire

        
        function getRandomColor() {
            const letters = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }

const gridCells = document.querySelectorAll('.grid-item');

gridCells.forEach((cell) => {
    cell.addEventListener('click', () => {
        // Changer la couleur de fond de la cellule en noir
        cell.style.backgroundColor = 'black';
    });
});

        