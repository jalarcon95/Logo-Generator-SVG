const {Square, Circle, Triangle} = require("./shapes.js");

describe("Square test", () => {
    test("test for a square with a red background", () => {
        const shape = new Square();
        shape.setColor("red");
        expect(shape.render()).toEqual(
            '<rect x="75" y="40" width="150" height="150" fill="red" />'
        );
    });
});

describe("Circle test", () => {
    test("test for a circle with a green background", () => {
        const shape = new Circle();
        shape.setColor("green");
        expect(shape.render()).toEqual(
            '<circle cx="150" cy="115" r="82" fill="green" />'
        );
    });
});

describe("Triangle test", () => {
    test("test for a triangle with a yellow background", () => {
        const shape = new Triangle();
        shape.setColor("yellow");
        expect(shape.render()).toEqual(
            '<polygon points="150, 30 240, 180 60, 180" fill="yellow" />'
        );
    });
});
