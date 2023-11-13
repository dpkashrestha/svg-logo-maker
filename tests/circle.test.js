const Circle = require("../lib/circle.js");

describe("Circle", () => {
  describe("render", () => {
    test("should render circle svg", () => {
      const expectedSvg = '<circle cx="100" cy="100" r="60" fill="green" />';

      const circle = new Circle("green");
      expect(circle.render()).toEqual(expectedSvg);
    });
  });
});
