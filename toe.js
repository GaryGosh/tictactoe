var ticTacToe = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
]

var PLAYERS = {
    player1: 'X',
    player2: 'O'
}
var currentPlayer = PLAYERS.player1;

function markTheBox(element, row, col) {
    
    ticTacToe[row][col] = currentPlayer;
    element.innerHTML = currentPlayer;
    if(isCurrentPlayerWinner()) {
        updateTheBanner()
    }

    if(currentPlayer === PLAYERS.player1) {
        currentPlayer = PLAYERS.player2;
    } else {
        currentPlayer = PLAYERS.player1;
    }
}

function updateTheBanner() {
    document.getElementById('winnerBanner').innerHTML = currentPlayer + ' Wins!!'
}

function isCurrentPlayerWinner() {
    return  ((ticTacToe [0][0] === currentPlayer && ticTacToe [0][1] === currentPlayer && ticTacToe [0][2] === currentPlayer) ||
    (ticTacToe [01][0] === currentPlayer && ticTacToe [1][1] === currentPlayer && ticTacToe [1][2] === currentPlayer) ||
    (ticTacToe [2][0] === currentPlayer && ticTacToe [2][1] === currentPlayer && ticTacToe [2][2] === currentPlayer) ||
    (ticTacToe [0][0] === currentPlayer && ticTacToe [1][0] === currentPlayer && ticTacToe [2][0] === currentPlayer) ||
    (ticTacToe [0][1] === currentPlayer && ticTacToe [1][1] === currentPlayer && ticTacToe [2][1] === currentPlayer) ||
    (ticTacToe [0][2] === currentPlayer && ticTacToe [1][2] === currentPlayer && ticTacToe [2][2] === currentPlayer) ||
    (ticTacToe [0][0] === currentPlayer && ticTacToe [1][1] === currentPlayer && ticTacToe [2][2] === currentPlayer) ||
    (ticTacToe [0][2] === currentPlayer && ticTacToe [1][1] === currentPlayer && ticTacToe [2][0] === currentPlayer))
   
}

function reset() {
    location.reload()
    // var elementArray = document.querySelectorAll('td')
    // elementArray.forEach(el.innerHTML='')
    // document.getElementById('winnerBanner').innerHTML = '';
    // ticTacToe = [
    //     ['', '', ''],
    //     ['', '', ''],
    //     ['', '', '']
    // ];
    // currentPlayer = PLAYERS.player1;
}