import React, { useState, useEffect } from "react";
import { findWinner } from "./helpers/validateWinner";

function App() {
  const [board, setBoard] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);
  const [turn, setTurn] = useState("X");
  const [winner, setWinner] = useState();
  const [playCount, setPlayCount] = useState(0);

  const resetBoard = () => {
    setWinner();
    setPlayCount(0);
    setTurn("X");
    setBoard([
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ]);
  };

  useEffect(() => {
    let winner = findWinner(board);
    if (winner) {
      setWinner(winner);
    }
  }, [board]);

  const switchTurn = (turn) => {
    if (turn === "X") {
      return setTurn("O");
    }
    return setTurn("X");
  };

  const modifyBoard = (index1, index2, board, value) => {
    if (board[index1][index2] !== "")
      throw new Error(`Index already has an input: ${board[index1][index2]}`);

    if (winner || playCount === 9) {
      throw new Error("Game has already ended.");
    }
    board[index1][index2] = value;
    let newBoard = [...board];
    setBoard(newBoard);
    switchTurn(turn);
    setPlayCount((playCount) => playCount + 1);
  };

  return (
    <div className="container">
      {winner && (
        <div className="winnerWidgetContainer">
          <div className="winnerWidgetBackground">
            <p>Winner: {winner}</p>
            <button onClick={resetBoard}>Play Again</button>
          </div>
        </div>
      )}
      {!winner && playCount === 9 && (
        <div className="winnerWidgetContainer">
          <div className="winnerWidgetBackground">
            <p>It's a draw.</p>
            <button onClick={resetBoard}>Play Again</button>
          </div>
        </div>
      )}
      <div className="navBar">
        <button className="resetBoard" onClick={resetBoard}>
          New Game
        </button>
        <p>Turn: {turn}</p>
      </div>
      <div className="board">
        {board.map((subArray, parentIndex) => {
          return subArray.map((subSection, subIndex) => {
            return (
              <div
                onClick={() => modifyBoard(parentIndex, subIndex, board, turn)}
                key={`${parentIndex}:${subIndex}`}
                className="subsection"
              >
                {subSection}
              </div>
            );
          });
        })}
      </div>
    </div>
  );
}

export default App;
