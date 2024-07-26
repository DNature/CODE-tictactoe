export class TicTacToe {
  constructor() {
    this.board = Array(9).fill(null);
    this.currentPlayer = "X";
    this.gameOver = false;
    this.winningCells = [];
  }

  makeMove(position) {
    if (this.gameOver || this.board[position] !== null) {
      return false;
    }

    this.board[position] = this.currentPlayer;

    const winResult = this.checkWin();
    if (winResult) {
      this.gameOver = true;
      this.winningCells = winResult;
      return `${this.currentPlayer} wins!`;
    }

    // if all cells are filled and there is no winner
    if (this.board.every((cell) => cell !== null)) {
      this.gameOver = true;
      return "It's a draw!";
    }

    this.currentPlayer = this.currentPlayer === "X" ? "O" : "X";
    return true;
  }

  checkWin() {
    // [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    // [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    // [0, 4, 8], [2, 4, 6]             // Diagonals
    const winPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const pattern of winPatterns) {
      const [a, b, c] = pattern;
      if (
        this.board[a] &&
        this.board[a] === this.board[b] &&
        this.board[a] === this.board[c]
      ) {
        return pattern;
      }
    }
    return null;
  }

  resetGame() {
    this.board = Array(9).fill(null);
    this.currentPlayer = "X";
    this.gameOver = false;
    this.winningCells = [];
  }
}
