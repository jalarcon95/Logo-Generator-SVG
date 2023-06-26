class Shape {
    constructor () {
        this.color ="";
    }

    setColor(colorVar) {
        this.color = colorVar;
    }
}

class Square extends Shape {
    render() {
        return `<rect x="75" y="40" width="160" height="160" fill="${this.color}" />`;
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="150" y="110" r="75" fill="${this.color}"/>`;
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points="150, 20 250, 180 50, 180" fill="${this.color}"/>`;
    }
}

module.exports = {Square, Circle, Triangle};