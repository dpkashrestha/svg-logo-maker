class Shapes {
  constructor(shapeColor = "", text = "" , textColor = "") {
    this.shapeColor = shapeColor;
    this.text = text;
    this.textColor = textColor;
  }
  render() {
    throw new Error("Child class must implement a render() method.");
  }

  // Renders the common text section of the SVG content for all shapes
  renderText() {
    return (`<text x="100" y="110" font-size="35" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`);
  }

  // Renders the final and full SVG content
  renderSvgLogo() {
    const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
      ${this.render()}
      ${this.renderText()}
    </svg>
    `;
    return svg;
  }
}

module.exports = Shapes;
