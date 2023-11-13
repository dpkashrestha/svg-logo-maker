const inquirer = require("inquirer");
const fs = require("fs");

const questions = [
  {
    type: "input",
    message: "Please enter up to three characters:",
    name: "text",
  },
  {
    type: "input",
    message: "Please enter a color keyword (OR a hexadecimal number)r:",
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
    message: "Please enter a color keyword (OR a hexadecimal number):",
    name: "shapeColor",
  },
];

// Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((response) => {
    console.log(response);
  });
}

// Function call to initialize app
init();
