const Shapes = require("../lib/shapes.js");

describe("shapes", () => {
  describe("render", () => {
    it("should throw error if called directly", () => {
      const shapes = new Shapes();
      expect(() => shapes.render()).toThrowError(
        "Child class must implement a render() method."
      );
    });
  });
});