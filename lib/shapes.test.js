const {Square, Circle, Triangle} = require("./shapes.js");

describe("Square test", () => {
    test("test for a square with a red background", () => {
        const shape = new Square();
        shape.setColor("red");
        expect(shape.render()).toEqual(
            '<rect x="75" y="40" width="160" height="160" fill="red" />'
        );
    });
});

describe("Circle test", () => {
    test("test for a circle with a green background", () => {
        const shape = new Circle();
        shape.setColor("green");
        expect(shape.render()).toEqual(
            '<circle cx="150" y="110" r="75" fill="green" />'
        );
    });
});

describe("Triangle test", () => {
    test("test for a triangle with a yellow background", () => {
        const shape = new Triangle();
        shape.setColor("yellown");
        expect(shape.render()).toEqual(
            '<polygon points="150, 20 250, 180 50, 180" fill="yellow" />'
        );
    });
});
