

const player = (playerName, marker) => {

    let winCount = 0;
    const getName = () => playerName;
    const getMarker = () => marker;
    const getWinCount = () => winCount;

    const selectMove = () => {

        makeMove();
    };

    const makeMove = () => {


    };

    return {getName, getMarker, getWinCount, selectMove};
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

    // const playerOneName = prompt("what is player 1's name? ");
    // const playerOneMarker = prompt("what is player 1's marker? ");
    // console.log(playerOneName, playerOneMarker);

    // const playerOne = player(playerOneName, playerOneMarker);
    // console.log(playerOne.getName());

    // const playerTwoName = prompt("what is player 2's name? ");
    // const playerTwoMarker = prompt("what is player 2's marker? ");

    // const playerTwo = player(playerTwoName, playerTwoMarker);

    return
};
