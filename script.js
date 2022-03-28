

const player = (playerName, marker) => {

    let winCount = 0;
    const getName = () => playerName;
    const getMarker = () => marker;
    const getWinCount = () => winCount;

    const makeMove = x => {

        gameBoard[x] = marker; 
    };

    const checkMove = x => {

        if (gameBoard[x] === 0) {
            return true
        } else {
            return false
        };
    };  
    return {getName, getMarker, getWinCount, makeMove, checkMove};
}

const gameBoard = (function() {

    let gameBoardArray = [0,0,0,0,0,0,0,0,0];
    for (i=0; i<gameBoardArray.length;i++) {

        const spaceNumber = document.createElement("div");
        const body = document.getElementById("gameBoard");
        // spaceNumber.textContent = gameBoardArray[i];
        spaceNumber.classList.add("gameTile")
        spaceNumber.setAttribute("id", "tile"+i);

        // create outlines for gameboard
        if (i === 1 || i === 4 || i === 7 || i === 2 || i === 5 || i === 8) {
            spaceNumber.classList.add("vertical")
        };

        if (i > 2) {
            spaceNumber.classList.add("horizontal")
        };
        body.appendChild(spaceNumber);
    }

    return gameBoardArray
}());

function createGame() {

    const playerOneName = prompt("player 1's name? ");
    const playerOne = player(playerOneName, "X");

    const playerTwoName = prompt("player 2's name? ");
    const playerTwo = player(playerTwoName, "Y");

    for (moveCount = 0; moveCount < 8;) {

       let playerOneMove = prompt("where do you want to place your marker? ");

       while (!playerOne.checkMove(playerOneMove)) {
        playerOneMove = prompt("where do you want to change your marker to? ");
       } 
       playerOne.makeMove(playerOneMove);
       moveCount++
       console.log(moveCount);

       let playerTwoMove = prompt("where do you want to place your marker ");
       while (!playerTwo.checkMove(playerTwoMove)) {
        playerTwoMove = prompt("where do you want to change your marker to? ");
       } 
       playerTwo.makeMove(playerTwoMove);
       moveCount++
       console.log(moveCount);
    };
};
