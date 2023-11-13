const Square = require("../lib/square.js");

describe("Square", () => {
  describe("render", () => {
    test("should render square svg", () => {
      const expectedSvg =
        '<rect x="50" y="50" width="70" height="70" fill="blue" />';

      const square = new Square("blue");
      expect(square.render()).toEqual(expectedSvg);
    });
  });
});
