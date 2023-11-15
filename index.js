const inquirer = require("inquirer");
const fs = require("fs");
const Circle = require('./lib/circle.js');
const Square = require('./lib/square.js');
const Triangle = require('./lib/triangle.js');

//Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "Please enter up to three characters:",
    name: "text",
  },
  {
    type: "input",
    message: "Please enter a text color keyword (OR a hexadecimal number):",
    name: "textColor",
  },
  {
    type: "list",
    message: "Please select shape of your logo:",
    name: "shape",
    choices: ["circle", "triangle", "square"],
  },
  {
    type: "input",
    message: "Please enter a shape color keyword (OR a hexadecimal number):",
    name: "shapeColor",
  },
];

function createSvgLogo(response) {
  let shape;
  if (response.shape === "circle") {
    shape = new Circle(response.shapeColor, response.text, response.textColor);
  } else if (response.shape === "square") {
    shape = new Square(response.shapeColor, response.text, response.textColor);
  } else if (response.shape === "triangle") {
    shape = new Triangle(response.shapeColor, response.text, response.textColor);
  }
  return shape.renderSvgLogo();
}

// Create a function to create logo file
function writeToFile(fileName, data) {
  fs.writeFile("./examples/" + fileName, data, (err) =>
    err ? console.error(err) : console.log("Generated logo.svg")
  );
}

// Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((response) => {
    const svgContent = createSvgLogo(response);
    writeToFile("logo.svg", svgContent);
  });
}

// Function call to initialize app
init();
