const Shapes = require("./shapes.js");

class Circle extends Shapes {
  constructor(shapeColor) {
    super(shapeColor);
  }
  render() {
    return `<circle cx="100" cy="100" r="60" fill="${this.shapeColor}" />`;
  }
}

module.exports = Circle;
