const carEscape = require("../src/carEscape");

describe("carEscape", () => {
  it("when parked one spot to the left of the exit, the output should be 'right' to move to the exit", () => {
    const initialFloor = 0;
    const initialPosition = 0;
    const parkingLot = [[false, true]];
    expect(carEscape(parkingLot, initialFloor, initialPosition)).toStrictEqual([
      "right",
    ]);
  });

  it("when parked on the spot that is second left of the exit, the path to exit the car park would be 'right, right'", () => {
    const initialFloor = 0;
    const initialPosition = 0;
    const parkingLot = [[false, false, true]];
    expect(carEscape(parkingLot, initialFloor, initialPosition)).toStrictEqual([
      "right",
      "right",
    ]);
  });

  it("When parked in a random place in a floor with 3 spaces and 2 levels park", () => {
    const initialFloor = 1;
    const initialPosition = 0;
    const parkingLot = [
      [false, false, true],
      [false, false, true],
    ];
    expect(carEscape(parkingLot, initialFloor, initialPosition)).toStrictEqual([
      "right",
      "right",
      "down",
    ]);
  });
});
