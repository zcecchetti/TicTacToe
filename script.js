

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
    // const makeMove = gameBoardArray => {

    //     if (getValueAtIndex(x) === 0) {
    //         return gameBoardArray.selectMove(x);
    //     };
    // };
    return {getName, getMarker, getWinCount, makeMove, checkMove};
}

const gameBoard = (function() {

    let gameBoardArray = [0,0,0,0,0,0,0,0,0];
    for (i=0; i<gameBoardArray.length;i++) {

        const spaceNumber = document.createElement("div");
        const body = document.getElementById("container");
        spaceNumber.textContent = gameBoardArray[i];
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
