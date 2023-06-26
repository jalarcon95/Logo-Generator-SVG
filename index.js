const fs = require("fs");
const inquirer= require("inquirer");
const {Square, Circle, Triangle} = require("./lib/shapes.js");

function writeToFile(fileName, answers) {
    let svgString = "";
    svgString = '<svg version="1.1" xlmns="http://w3.or/2000/svg" width="300" height="200">';
    svgString += "<g>";
    svgString += `${answers.shape}`;

    let shapeChoice;
    if (answers.shape === "Square") {
        shapeChoice = new Square();
        svgString += `<rect x="75" y="40" width="160" height="160" fill="${answers.backgroundColor}"/>`;
    } else if (answers.shape === "Circle") {
        shapeChoice = new Circle();
        svgString += `<circle cx="150" y="110" r="75" fill="${answers.backgroundColor}"/>`;
    } else {
        shapeChoice = new Triangle();
        svgString += `<polygon points="150, 20 250, 180 50, 180" fill="${answers.backgroundColor}"/>`;
    }

    svgString += `<text x="150" y="120" font-size="40" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>`;
    svgString += "</g>";
    svgString += "</svg>";

    fs.writeFile(fileName, svgString, (err) => {
        err ? console.log(err) : console.log("Generated logo.svg");
    });
}

function promptUser() {
    inquirer 
        .prompt([
            {
                type: "input",
                message: "Enter desired text for the logo to display (up to 3 characters)",
                name:"text",
            },
            {
                type: "input",
                message: "Choose the desired color for the text (keyword OR hexadecimal number)",
                name:"text",
            },
            {
                type: "list",
                message: "Choose which shape your logo will be",
                choices: ["Square", "Circle", "Triangle"],
                name:"shape",
            },
            {
                type: "input",
                message: "Choose the desired color for the logo shape (keyword OR hexadecimal number)",
                name:"backgroundColort",
            },
        ])
        .then((answers) => {
            if (answers.text.length > 3) {
                console.log("Text entered must be no more than 3 characters");
                promptUser();
            } else {
                writeToFile("logo.svg", answers);
            }
        });
}

promptUser();