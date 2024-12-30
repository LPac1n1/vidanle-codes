const startButton = document.querySelector(".submit-names")
const playersName = document.querySelector(".players-name")
const game = document.querySelector(".game") 

startButton.onclick = () => {
    playersName.classList.add("hide")
    game.classList.remove("hide")

    showNamesOnScore()
}

const cellElements = document.querySelectorAll("[data-cell]");
const winningMessageTextElement = document.querySelector("[data-winning-message-text]");
const board = document.querySelector("[data-board]")
const winningMessage = document.querySelector("[data-winning-message]");
const restartButton = document.querySelector("[data-restart-button]");

let isCircleTurn;

const winningCombinations = [
[0, 1, 2],
[3, 4, 5],
[6, 7, 8],
[0, 3, 6],
[1, 4, 7],
[2, 5, 8],
[0, 4, 8],
[2, 4, 6],
];

const startGame = () => {
    isCircleTurn = false;

    for (const cell of cellElements) {
        cell.classList.remove("circle");
        cell.classList.remove("x");
        cell.removeEventListener("click", handleClick);
        cell.addEventListener("click", handleClick, { once: true });
    }

    setBoardHoverClass();
    winningMessage.classList.remove("show-winning-message");
};

let xScore = 0
let oScore = 0

let firstPlayerName = document.getElementById("first-player")
let secondPlayerName = document.getElementById("second-player")

const firstScoreName = document.getElementById("first-player-name")
const secondScoreName = document.getElementById("second-player-name")

const showNamesOnScore = () => {
    if (firstPlayerName.value == "") {
        firstPlayerName.value = "Jogador 1"
    }
    if (secondPlayerName.value == "") {
        secondPlayerName.value = "Jogador 2"
    }

    firstScoreName.innerHTML = firstPlayerName.value
    secondScoreName.innerHTML = secondPlayerName.value
}

const firstPlayerScoreText = document.getElementById("first-player-score")
const secondPlayerScoreText = document.getElementById("second-player-score")

const showScore = () => {
    firstPlayerScoreText.innerText = xScore
    secondPlayerScoreText.innerText = oScore
}

const endGame = (isDraw) => {
    if (isDraw) {
        winningMessageTextElement.innerText = "Empate!";
    } else {
        winningMessageTextElement.innerText = isCircleTurn
        ? '"O" Venceu!'
        : '"X" Venceu!';

        isCircleTurn ? oScore = oScore + 1 : xScore = xScore + 1
        showScore()
    }

    winningMessage.classList.add("show-winning-message");
};

const checkForWin = (currentPlayer) => {
    return winningCombinations.some((combination) => {
        return combination.every((index) => {
        return cellElements[index].classList.contains(currentPlayer);
        });
    });
};

const checkForDraw = () => {
    return [...cellElements].every((cell) => {
        return cell.classList.contains("x") || cell.classList.contains("circle");
    });
};

const placeMark = (cell, classToAdd) => {
    cell.classList.add(classToAdd);
};

const setBoardHoverClass = () => {
    board.classList.remove("circle");
    board.classList.remove("x");

    if (isCircleTurn) {
        board.classList.add("circle");
    } else {
        board.classList.add("x");
    }
};

const swapTurns = () => {
    isCircleTurn = !isCircleTurn;

    setBoardHoverClass();
};

const handleClick = (e) => {
    const cell = e.target;
    const classToAdd = isCircleTurn ? "circle" : "x";

    placeMark(cell, classToAdd);

    const isWin = checkForWin(classToAdd);
    const isDraw = checkForDraw();

    if (isWin) {
        endGame(false);
    } else if (isDraw) {
        endGame(true);
    } else {
        swapTurns();
    }
};

startGame();
restartButton.addEventListener("click", startGame);