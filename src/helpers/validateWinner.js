export const findWinner = (board) => {
  let coordsNeededToWin = [
    [
      [0, 0],
      [1, 1],
      [2, 2],
    ],
    [
      [0, 0],
      [0, 1],
      [0, 2],
    ],
    [
      [1, 0],
      [1, 1],
      [1, 2],
    ],
    [
      [2, 0],
      [2, 1],
      [2, 2],
    ],
    [
      [0, 0],
      [1, 0],
      [2, 0],
    ],
    [
      [0, 1],
      [1, 1],
      [2, 1],
    ],
    [
      [0, 2],
      [1, 2],
      [2, 2],
    ],
    [
      [2, 0],
      [1, 1],
      [0, 2],
    ],
  ];

  for (let coordsArray of coordsNeededToWin) {
    if (
      board[coordsArray[0][0]][coordsArray[0][1]] !== "" &&
      board[coordsArray[0][0]][coordsArray[0][1]] ===
        board[coordsArray[1][0]][coordsArray[1][1]] &&
      board[coordsArray[1][0]][coordsArray[1][1]] ===
        board[coordsArray[2][0]][coordsArray[2][1]]
    ) {
      return board[coordsArray[0][0]][coordsArray[0][1]];
    }
  }
  return false;
};
