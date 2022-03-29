

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

    const playerOneName = (function() {

        const inputOneForm = document.createElement("form");
        const nameOneInput = document.createElement("input");
        nameOneInput.setAttribute("placeholder", "Player One Name");
        nameOneInput.setAttribute("maxlength", "20");
        const nameOneButton = document.createElement("button");
        nameOneButton.textContent = "Enter";
        inputOneForm.setAttribute("onsubmit", "return false");
        const inputContainer = document.getElementById("info");
        inputContainer.textContent = "";
        inputOneForm.appendChild(nameOneInput);
        inputOneForm.appendChild(nameOneButton);
        inputContainer.appendChild(inputOneForm);

        let playerName;
        nameOneButton.addEventListener("click", () => {
           
            playerName = nameOneInput.value;
            const playerOne = player(playerName, "X");
            return playerOne
        });
        
        
    }());

    // const inputOneForm = document.createElement("form");
    // const nameOneInput = document.createElement("input");
    // nameOneInput.setAttribute("placeholder", "Player One Name");
    // nameOneInput.setAttribute("maxlength", "20");
    // const nameOneButton = document.createElement("button");
    // nameOneButton.textContent = "Enter";
    // inputOneForm.setAttribute("onsubmit", "return false");
    // const inputContainer = document.getElementById("info");
    // inputContainer.textContent = "";
    // inputOneForm.appendChild(nameOneInput);
    // inputOneForm.appendChild(nameOneButton);
    // inputContainer.appendChild(inputOneForm);

    // let playerName;
    // nameOneButton.addEventListener("click", () => {
           
    // playerName = nameOneInput.value;
    // const playerOne = player(playerName, "X");
    // console.log(playerOne.getMarker());
    // })
    

    // const playerTwoName = prompt("player 2's name? ");
    // const playerTwo = player(playerTwoName, "Y");

    // for (moveCount = 0; moveCount < 8;) {

    //    let playerOneMove = prompt("where do you want to place your marker? ");

    //    while (!playerOne.checkMove(playerOneMove)) {
    //     playerOneMove = prompt("where do you want to change your marker to? ");
    //    } 
    //    playerOne.makeMove(playerOneMove);
    //    moveCount++
    //    console.log(moveCount);

    //    let playerTwoMove = prompt("where do you want to place your marker ");
    //    while (!playerTwo.checkMove(playerTwoMove)) {
    //     playerTwoMove = prompt("where do you want to change your marker to? ");
    //    } 
    //    playerTwo.makeMove(playerTwoMove);
    //    moveCount++
    //    console.log(moveCount);
    // };
};

// Create game when "New Game" is pressed
const newGame = document.getElementById("newGame");
newGame.addEventListener("click", createGame);