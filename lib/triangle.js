const Shapes = require("./shapes.js");

class Triangle extends Shapes {
  constructor(shapeColor, text, textColor) {
    super(shapeColor, text, textColor);
  }
  render() {
    return `<polygon points="100, 10 200, 190 0, 190" fill="${this.shapeColor}" />`;
  }
}

module.exports = Triangle;
