const carEscape = (parkingLot, initialFloor, initialPosition) => {
  const numberOfMoves =
    parkingLot[initialFloor].indexOf(true) - initialPosition;
  const moves = [];

  for (let index = 0; index < numberOfMoves; index++) {
    moves.push("right");
  }

  if (parkingLot.length > 1) {
    moves.push("down");
  }
  return moves;
};

module.exports = carEscape;
