const carEscape = require("../src/carEscape");

describe("Parking lot with one floor", () => {
  it("Should  a two spaces parking lot the moves to the exit should be 'right'", () => {
    const initialFloor = 0;
    const initialPosition = 0;
    const parkingLot = [["slot", "exit"]];
    expect(carEscape(parkingLot, initialFloor, initialPosition)).toStrictEqual([
      "right",
    ]);
  });

  it("Should a three spaces parking lot with one floor moves to the exit be 'right' 'right'", () => {
    const initialFloor = 0;
    const initialPosition = 0;
    const parkingLot = [["slot", "slot", "exit"]];
    expect(carEscape(parkingLot, initialFloor, initialPosition)).toStrictEqual([
      "right",
      "right",
    ]);
  });
});

describe("Parking Lot with two floors", () => {
  it("Should a 3 spaces parking lot with two floors moves to the exit be 'right' 'right' 'down'", () => {
    const initialFloor = 1;
    const initialPosition = 0;
    const parkingLot = [
      ["slot", "slot", "exit"],
      ["slot", "slot", "stairs"],
    ];
    expect(carEscape(parkingLot, initialFloor, initialPosition)).toStrictEqual([
      "right",
      "right",
      "down",
    ]);
  });

  it("Should a 7 spaces parking lot with two floors moves to the exit be three right ,down, three right", () => {
    const initialFloor = 1;
    const initialPosition = 0;
    const parkingLot = [
      ["slot", "slot", "slot", "slot", "slot", "slot", "exit"],
      ["slot", "slot", "slot", "stairs", "slot", "slot", "slot"],
    ];
    expect(carEscape(parkingLot, initialFloor, initialPosition)).toStrictEqual([
      "right",
      "right",
      "right",
      "down",
      "right",
      "right",
      "right",
    ]);
  });

  it("Should a 2 spaces parking lot with two floors moves to the exit be three left ,down, right", () => {
    const initialFloor = 1;
    const initialPosition = 1;
    const parkingLot = [
      ["slot", "exit"],
      ["stairs", "slot"],
    ];
    expect(carEscape(parkingLot, initialFloor, initialPosition)).toStrictEqual([
      "left",
      "down",
      "right",
    ]);
  });
});

describe("Parking Lot with three floors", () => {
  it("Should a 2 spaces parking lot with two floors moves to the exit be three right ,down, three right", () => {
    const initialFloor = 2;
    const initialPosition = 0;
    const parkingLot = [
      ["slot", "exit"],
      ["stairs", "slot"],
      ["slot", "stairs"],
    ];
    expect(carEscape(parkingLot, initialFloor, initialPosition)).toStrictEqual([
      "right",
      "down",
      "left",
      "down",
      "right",
    ]);
  });
});

describe("Parking Lot with four floors", () => {
  test("Should 10 spaces parking lot with four floors moves to the exit be five left, down, four right, down, four left, down, seven right", () => {
    const initialFloor = 3;
    const initialPosition = 7;
    const parkingLot = [
      [
        "slot",
        "slot",
        "slot",
        "slot",
        "slot",
        "slot",
        "slot",
        "slot",
        "slot",
        "exit",
      ],
      [
        "slot",
        "slot",
        "stairs",
        "slot",
        "slot",
        "slot",
        "slot",
        "slot",
        "slot",
        "slot",
      ],
      [
        "slot",
        "slot",
        "slot",
        "slot",
        "slot",
        "slot",
        "stairs",
        "slot",
        "slot",
        "slot",
      ],
      [
        "slot",
        "slot",
        "stairs",
        "slot",
        "slot",
        "slot",
        "slot",
        "slot",
        "slot",
        "slot",
      ],
    ];
    expect(carEscape(parkingLot, initialFloor, initialPosition)).toStrictEqual([
      "left",
      "left",
      "left",
      "left",
      "left",
      "down",
      "right",
      "right",
      "right",
      "right",
      "down",
      "left",
      "left",
      "left",
      "left",
      "down",
      "right",
      "right",
      "right",
      "right",
      "right",
      "right",
      "right",
    ]);
  });
});

describe("Parking Lot with invalid configuration", () => {
  describe("I want to use the initial floor for start my road on the parking", () => {
    it("Given a initial floor as X", () => {
      const initialFloor = "X";
      const initialPosition = 0;
      const parkingLot = [["slot", "exit"]];
      expect(() =>
        carEscape(parkingLot, initialFloor, initialPosition)
      ).toThrow(TypeError("invalid value configuration"));
    });
  });
});
