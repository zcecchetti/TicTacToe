

const player = (playerName, marker) => {

    let winCount = 0;
    const getName = () => playerName;
    const getMarker = () => marker;
    const getWinCount = () => winCount;

    const addWin = () => {
        winCount++;
    };

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
    return {getName, getMarker, getWinCount, makeMove, checkMove, addWin};
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
    let moveCount = 1;
    let playerOne;
    let playerTwo;
    let noWin = true;

    const newGame = document.getElementById("newGame");
    const buttonsContainer = document.getElementById("buttons");
    buttonsContainer.removeChild(newGame);

    const playAgain = document.createElement("button");
    playAgain.setAttribute("id", "playAgain");
    playAgain.textContent = "Play Again";
    buttonsContainer.appendChild(playAgain);
    playAgain.addEventListener("click", playAnotherGame);


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

    // reset gameBoard
    function playAnotherGame() {

        for (i=0; i<gameBoard.length;i++) {
            gameBoard[i] = 0;
            const tileChanged = document.getElementById("tile"+i);
            tileChanged.textContent = "";
            noWin = true;
            gameStatus = 0;
            moveCount = 1;
        }
    };

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

        tile0.addEventListener("click", () => {
            playerTurn(0);
        });
        tile1.addEventListener("click", () => {
            playerTurn(1);
        });
        tile2.addEventListener("click", () => {
            playerTurn(2);
        });
        tile3.addEventListener("click", () => {
            playerTurn(3);
        });
        tile4.addEventListener("click", () => {
            playerTurn(4);
        });
        tile5.addEventListener("click", () => {
            playerTurn(5);
        });
        tile6.addEventListener("click", () => {
            playerTurn(6);
        });
        tile7.addEventListener("click", () => {
            playerTurn(7);
        });
        tile8.addEventListener("click", () => {
            playerTurn(8);
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
    };

    // check if either player has won the game
    function checkWin(player) {

        let marker = player.getMarker();

        // check rows
        if (gameBoard[0] === marker && gameBoard[1] ===  marker && gameBoard[2] === marker) {
            noWin = false;
        } else if (gameBoard[3] === marker && gameBoard[4] ===  marker && gameBoard[5] === marker) {
            noWin = false;
        } else if (gameBoard[6] === marker && gameBoard[7] ===  marker && gameBoard[8] === marker) {
            noWin = false;
        };

        // check columns
        if (gameBoard[0] === marker && gameBoard[3] ===  marker && gameBoard[6] === marker) {
            noWin = false;
        } else if (gameBoard[1] === marker && gameBoard[4] ===  marker && gameBoard[7] === marker) {
            noWin = false;
        } else if (gameBoard[2] === marker && gameBoard[5] ===  marker && gameBoard[8] === marker) {
            noWin = false;
        };

        // check diagonals 
        if (gameBoard[0] === marker && gameBoard[4] ===  marker && gameBoard[8] === marker) {
            noWin = false;
        } else if (gameBoard[2] === marker && gameBoard[4] ===  marker && gameBoard[6] === marker) {
            noWin = false;
        };

        if (noWin === false) {
            player.addWin();
            // alert(player.getName() + " wins and has won " + player.getWinCount() + " time(s)")
            displayWinner(player);
            moveCount = 10;
            return true
        }

        if (moveCount === 10 && noWin === true) {
            alert("its a tie")
            return true
        }
    };

    // Function to perform every time tile is clicked
    function playerTurn(tile) {
        if (moveCount%2 === 1) {
            if (playerOne.checkMove(tile) === true && noWin === true) {
                changeTile(playerOne, tile, "X");
                checkWin(playerOne);
            };
        } else {
            if (playerTwo.checkMove(tile) === true && noWin === true) {
                changeTile(playerTwo, tile, "O");
                checkWin(playerTwo);
            };
        };
    };

    // display result in turnDisplay
    function displayWinner(player) {

        const turnDisplay = document.getElementById("turnDisplay");
        turnDisplay.textContent = `${player.getName()} Wins!`;
    };

};

// Create game when "New Game" is pressed
const newGame = document.getElementById("newGame");
newGame.addEventListener("click", createGame);