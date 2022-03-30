

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

    function playerRounds(playerOne, playerTwo) {


        for (moveCount = 0; moveCount < 8;) {

            let tileChanged;
            const turnDisplay = document.getElementById("turnDisplay");
            turnDisplay.textContent = `${playerOne.getName()}'s turn`;

            let playerOneMove = prompt("where do you want to place your marker? ");
        
            while (!playerOne.checkMove(playerOneMove)) {
                playerOneMove = prompt("where do you want to change your marker to? ");
                };
            playerOne.makeMove(playerOneMove);
            tileChanged = document.getElementById("tile"+playerOneMove);
            tileChanged.textContent = "X"
            moveCount++;
            console.log(moveCount);

            turnDisplay.textContent = `${playerTwo.getName()}'s turn`;
        
            let playerTwoMove = prompt("where do you want to place your marker ");
            while (!playerTwo.checkMove(playerTwoMove)) {
                playerTwoMove = prompt("where do you want to change your marker to? ");
            };
            playerTwo.makeMove(playerTwoMove);
            tileChanged = document.getElementById("tile"+playerTwoMove);
            tileChanged.textContent = "O"
            moveCount++;
            console.log(moveCount);
        };
    };
};

// Create game when "New Game" is pressed
const newGame = document.getElementById("newGame");
newGame.addEventListener("click", createGame);