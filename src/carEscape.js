const carEscape = (parkingLot, initialFloor, initialPosition) => {
  const numberOfMoves =
    parkingLot[initialFloor].indexOf(true) - initialPosition;
  const moves = [];
  for (let index = 0; index < numberOfMoves; index++) {
    moves.push("right");
  }
  return moves;
};

module.exports = carEscape;
