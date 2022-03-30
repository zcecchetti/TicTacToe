

const player = (playerName, marker) => {

    let winCount = 0;
    const getName = () => playerName;
    const getMarker = () => marker;
    const getWinCount = () => winCount;

    const makeMove = x => {

        gameBoard[x] = marker; 
        console.log(gameBoard);
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

    let gameStatus = 0;

    const inputForm = document.createElement("form");
    // inputForm.setAttribute("id", "gameDataForm")
    const nameOneInput = document.createElement("input");
    nameOneInput.setAttribute("placeholder", "Player One Name");
    nameOneInput.setAttribute("maxlength", "20");
    const nameTwoInput = document.createElement("input");
    nameTwoInput.setAttribute("placeholder", "Player Two Name");
    nameTwoInput.setAttribute("maxlength", "20");
    const nameButton = document.createElement("button");
    nameButton.textContent = "Enter";
    inputForm.setAttribute("onsubmit", "return false");
    const inputContainer = document.getElementById("info");
    inputContainer.textContent = "";
    inputForm.appendChild(nameOneInput);
    inputForm.appendChild(nameButton);
    inputContainer.appendChild(inputForm);

    // Check to write to playerOne or playerTwo
    function checkPlayer() {

        if (gameStatus === 0) {
            let playerOneName = nameOneInput.value;
            playerOne = player(playerOneName, "X");
            inputForm.removeChild(nameOneInput);
            nameButton.remove;
            inputForm.appendChild(nameTwoInput);
            inputForm.appendChild(nameButton);
            gameStatus++;
        } else if (gameStatus === 1) {
            let playerTwoName = nameTwoInput.value;
            playerTwo = player(playerTwoName, "Y");
            gameStatus++;
        };
    };

    let playerOne;
    let playerTwo;
    nameButton.addEventListener("click", () => {

        checkPlayer();
        if (gameStatus === 2) {
            inputContainer.removeChild(inputForm);
            const turnDisplay = document.createElement("div");
            turnDisplay.setAttribute("id", "turnDisplay");
            inputContainer.appendChild(turnDisplay);
            playerRounds(playerOne, playerTwo);
        }
    });

    let moveCount = 1;
    function playerRounds(playerOne, playerTwo) {

        /* find each tic tac toe space, kept in this function so the user can only
        click on these tiles when the game is  being played */

        const tile0 = document.getElementById("tile0");
        const tile1 = document.getElementById("tile1");
        const tile2 = document.getElementById("tile2");
        const tile3 = document.getElementById("tile3");
        const tile4 = document.getElementById("tile4");
        const tile5 = document.getElementById("tile5");
        const tile6 = document.getElementById("tile6");
        const tile7 = document.getElementById("tile7");
        const tile8 = document.getElementById("tile8");

        let playerOneMove;
        let playerTwoMove;
        let tileChanged;

        tile0.addEventListener("click", () => {
            
            if (moveCount%2 === 1) {
                if (playerOne.checkMove(0) === true) {
                    changeTile(playerOne, 0, "X");
                };
            } else {
                if (playerTwo.checkMove(0) === true) {
                    changeTile(playerTwo, 0, "O");
                };
            };
        });
        tile1.addEventListener("click", () => {
            if (moveCount%2 === 1) {
                if (playerOne.checkMove(1) === true) {
                    changeTile(playerOne, 1, "X");
                };
            } else {
                if (playerTwo.checkMove(1) === true) {
                    changeTile(playerTwo, 1, "O");
                };
            };
        });
        tile2.addEventListener("click", () => {
            if (moveCount%2 === 1) {
                if (playerOne.checkMove(2) === true) {
                    changeTile(playerOne, 2, "X");
                };
            } else {
                if (playerTwo.checkMove(2) === true) {
                    changeTile(playerTwo, 2, "O");
                };
            };
        });
        tile3.addEventListener("click", () => {
            if (moveCount%2 === 1) {
                if (playerOne.checkMove(3) === true) {
                    changeTile(playerOne, 3, "X");
                };
            } else {
                if (playerTwo.checkMove(3) === true) {
                    changeTile(playerTwo, 3, "O");
                };
            };
        });
        tile4.addEventListener("click", () => {
            if (moveCount%2 === 1) {
                if (playerOne.checkMove(4) === true) {
                    changeTile(playerOne, 4, "X");
                };
            } else {
                if (playerTwo.checkMove(4) === true) {
                    changeTile(playerTwo, 4, "O");
                };
            };
        });
        tile5.addEventListener("click", () => {
            if (moveCount%2 === 1) {
                if (playerOne.checkMove(5) === true) {
                    changeTile(playerOne, 5, "X");
                };
            } else {
                if (playerTwo.checkMove(5) === true) {
                    changeTile(playerTwo, 5, "O");
                };
            };
        });
        tile6.addEventListener("click", () => {
            if (moveCount%2 === 1) {
                if (playerOne.checkMove(6) === true) {
                    changeTile(playerOne, 6, "X");
                };
            } else {
                if (playerTwo.checkMove(6) === true) {
                    changeTile(playerTwo, 6, "O");
                };
            };
        });
        tile7.addEventListener("click", () => {
            if (moveCount%2 === 1) {
                if (playerOne.checkMove(7) === true) {
                    changeTile(playerOne, 7, "X");
                };
            } else {
                if (playerTwo.checkMove(7) === true) {
                    changeTile(playerTwo, 7, "O");
                };
            };
        });
        tile8.addEventListener("click", () => {
            if (moveCount%2 === 1) {
                if (playerOne.checkMove(8) === true) {
                    changeTile(playerOne, 8, "X");
                };
            } else {
                if (playerTwo.checkMove(8) === true) {
                    changeTile(playerTwo, 8, "O");
                };
            };
        });

        const turnDisplay = document.getElementById("turnDisplay");
        
        if (moveCount%2 === 1) {
            turnDisplay.textContent = `${playerOne.getName()}'s turn`;
        } else if (moveCount%2 === 0) {
            turnDisplay.textContent = `${playerTwo.getName()}'s turn`;
        };
    };

    // changes value stored in gameBoard array and then manipulates DOM
    function changeTile(player, tileNumber, marker) {

        player.makeMove(tileNumber);
        tileChanged = document.getElementById("tile"+tileNumber);
        tileChanged.textContent = marker
        moveCount++;
        const turnDisplay = document.getElementById("turnDisplay");
        if (moveCount%2 === 1) {
            turnDisplay.textContent = `${playerOne.getName()}'s turn`;
        } else if (moveCount%2 === 0) {
            turnDisplay.textContent = `${playerTwo.getName()}'s turn`;
        };
    }

    function checkSelected(tile, player, playerMove) {

        if (tile.classList === "unselected") {
            tile.classList.add("selected");
            tile.classList.remove("unselected");
            player.makeMove(playerMove);
            return true;
        } else if (tile.classList === "selected") {
            return false;
        };
    };
};

// Create game when "New Game" is pressed
const newGame = document.getElementById("newGame");
newGame.addEventListener("click", createGame);