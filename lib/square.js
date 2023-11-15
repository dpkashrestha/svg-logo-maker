const Shapes = require('./shapes.js');

class Square extends Shapes {
  constructor(shapeColor, text, textColor) {
    super(shapeColor, text, textColor);
  }
  render() {
    return (`<rect x="50" y="50" width="100" height="100" fill="${this.shapeColor}" />`);
  }
}

module.exports = Square;
