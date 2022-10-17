const carEscape = require("../src/carEscape");

describe("carEscape", () => {
  it("when parked one spot to the left of the exit, the output should be 'right' to move to the exit", () => {
    expect(carEscape([[false, true]])).toStrictEqual(["right"]);
  });

  it("when parked on the spot that is second left of the exit, the path to exit the car park would be 'right, right'", () => {
    expect(carEscape([[false, false, true]], [0, 0])).toStrictEqual([
      "right",
      "right",
    ]);
  });
});
