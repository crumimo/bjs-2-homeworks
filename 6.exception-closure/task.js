// Задача №1. Форматтер чисел

function parseCount(value) {
    const parseValue = Number.parseInt(value, 10);
    if (isNaN(parseValue)) {
        throw new Error("Невалидное значение");
    } else {
        return parseValue;
    }
}

function validateCount(value) {
    try {
        return parseCount(value);
    } catch (err) {
        return err;
    }
}

class Triangle {
    constructor(a, b, c) {
        if ((a + b < c) || (a + c < b) || (b + c < a)) {
            throw new Error("Треугольник с такими сторонами не существует");
        } else {
            this.a = a;
            this.b = b;
            this.c = c;
        }
    }

    getPerimeter() {
        return this.a + this.b + this.c;
    }

    getArea() {
        let semiP =  this.getPerimeter() / 2;
        return +(Math.sqrt(semiP * (semiP - this.a) * (semiP - this.b) * (semiP - this.c))).toFixed(3);
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (err) {
        return {
            getArea() {return "Ошибка! Треугольник не существует"},
            getPerimeter() {return "Ошибка! Треугольник не существует"}
        }
    }
}