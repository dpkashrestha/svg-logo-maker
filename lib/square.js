const Shapes = require('./shapes.js');

class Square extends Shapes {
  constructor(shapeColor) {
    super(shapeColor);
  }
  render() {
    return (`<rect x="50" y="50" width="70" height="70" fill="${this.shapeColor}" />`);
  }
}

module.exports = Square;
