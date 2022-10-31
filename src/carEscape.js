const carEscape = (parkingLot, initialFloor, initialPosition) => {
  checkValidity(initialFloor);
  let position = initialPosition;
  let moves = [];
  for (let floors = initialFloor; floors >= 0; floors--) {
    const numberOfMoves = getNumberOfMoves(floors, parkingLot, position);
    moves.push(...seeker(numberOfMoves));

    position = numberOfMoves + position;

    moves = notGroundFloor(floors, moves);
  }
  return moves;
};

const seeker = (numberOfMoves) => {
  const moves = [];
  const direction = numberOfMoves > 0 ? "right" : "left";
  numberOfMoves = Math.abs(numberOfMoves);
  for (let index = 0; index < numberOfMoves; index++) {
    moves.push(direction);
  }
  return moves;
};

const getNumberOfMoves = (floor, parkingLot, position) => {
  const exitOrStairs = floor !== 0 ? "stairs" : "exit";
  const parkingFloor = parkingLot[floor];
  return parkingFloor.indexOf(exitOrStairs) - position;
};

const notGroundFloor = (floors, moves) => {
  if (floors !== 0) moves.push("down");
  return moves;
};

const checkValidity = (floors) => {
  if (floors == "X") throw new TypeError("invalid value configuration");
};

module.exports = carEscape;
