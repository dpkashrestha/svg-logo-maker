const Triangle = require("../lib/triangle.js");

describe("Triangle", () => {
  describe("render", () => {
    test("should render triangle svg", () => {
      const expectedSvg =
        '<polygon points="150, 18 244, 182 56, 182" fill="blue" />';

      const triangle = new Triangle("blue");
      expect(triangle.render()).toEqual(expectedSvg);
    });
  });
});
