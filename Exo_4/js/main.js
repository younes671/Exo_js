
// permet d'ajouter ou de supprimer une case lié a une touche précise

const container = document.body;


// création d'une cellule

function createSquare() {
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.backgroundColor = getRandomColor();
    container.appendChild(square);
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
const keyDownHandler = (event) => {
    if (event.key === '+') {
        createSquare();
    } else if (event.key === 'ArrowUp') {
        removeLastSquare();
    }
};


// fonction est appeler sur chaque pression des touches déterminées plus haut

document.addEventListener('keydown', keyDownHandler); 


        

        