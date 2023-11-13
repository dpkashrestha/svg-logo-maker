const Shapes = require("./shapes.js");

class Triangle extends Shapes {
  constructor(shapeColor) {
    super(shapeColor);
  }
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`;
  }
}

module.exports = Triangle;
