const cells = document.querySelectorAll('.cell');
let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameOver = false;

function togglePlayer() {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X'; // effectue changement joueur
}

function updateMessage() {
    const messageElement = document.querySelector('.message');
    if (!gameOver) {
        messageElement.textContent = `C'est au tour de ${currentPlayer}`;
    } else {
        messageElement.textContent = 'Partie terminée';
    }
}

// vérifie s'il y a un gagnant ou si la parie est terminée

function checkWinner() {
    const winningCombos = [ // toutes les combinaisons gagnantes
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // lignes
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Colonnes
        [0, 4, 8], [2, 4, 6]             // Diagonales
    ];

    for (const combo of winningCombos) {
        const [a, b, c] = combo;

        // condition si gagnant
        if (gameBoard[a] !== '' && gameBoard[a] === gameBoard[b] && gameBoard[b] === gameBoard[c]) {
            gameOver = true;
            break;
        }
    }

    if (!gameBoard.includes('') && !gameOver) {
        gameOver = true; // cas plus de cellule vide et pas de gagnant 
    }

    if (gameOver) {
        setTimeout(() => {
            updateMessage();
        }, 500);
    }
}

function handleCellClick(event) {
    if (!gameOver) {   // vérifie si la partie est terminée
        const clickedCell = event.target;  // récupère element clické
        console.log(clickedCell)
        const cellIndex = clickedCell.dataset.index; // récupère index cellule grace à data-index du html 

        if (gameBoard[cellIndex] === '') { // vérifie si la cellule est vide pour donner droit au joueur de cliquer
            gameBoard[cellIndex] = currentPlayer;  // attribue cellule à un joueur
            clickedCell.textContent = currentPlayer;  // affiche X ou O en fonction du joueur
            clickedCell.style.color = currentPlayer === 'X' ? 'red' : 'green';  // determine couleur X et O

            checkWinner();
            togglePlayer();
        }

        updateMessage();
    }
}

