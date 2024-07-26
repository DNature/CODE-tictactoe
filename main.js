import "./style.css";
import { TicTacToe } from "./tictactoe.js";

const game = new TicTacToe();
const boardElement = document.getElementById("board");
const messageElement = document.getElementById("message");
const resetButton = document.getElementById("resetButton");

function updateBoard() {
  boardElement.innerHTML = "";
  game.board.forEach((cell, index) => {
    const cellElement = document.createElement("div");
    cellElement.classList.add("cell");
    cellElement.textContent = cell;
    if (game.winningCells.includes(index)) {
      cellElement.classList.add("winning-cell");
    }
    cellElement.addEventListener("click", () => handleCellClick(index));
    boardElement.appendChild(cellElement);
  });
}

function handleCellClick(index) {
  const result = game.makeMove(index);
  if (result === true) {
    messageElement.textContent = `Player ${game.currentPlayer}'s turn`;
  } else if (typeof result === "string") {
    messageElement.textContent = result;
  } else {
    messageElement.textContent = "Invalid move";
  }
  updateBoard();
}

function resetGame() {
  game.resetGame();
  updateBoard();
  messageElement.textContent = `Player ${game.currentPlayer}'s turn`;
}

resetButton.addEventListener("click", resetGame);

// Initialize the game
updateBoard();
messageElement.textContent = `Player ${game.currentPlayer}'s turn`;
