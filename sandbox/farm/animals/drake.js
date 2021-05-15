import { Animal } from "./animal.js";

class Drake extends Animal {
    direction = Math.random() * 5;
    color = 'yellow';

    pixels = [
        { x: -4, y: -2, color: 'orange' },
    { x: -3, y: -3, color: 'black' },
    { x: -3, y: -2, color: 'orange' },
    { x: -2, y: -3, color: 'brown' },
    { x: -2, y: -2, color: 'yellow' },
    { x: -1, y: -2, color: 'darkgreen' },
    { x: -1, y: -1, color: 'yellow' },
    { x: -1, y: 0, color: 'darkgreen' },
    { x: -1, y: 1, color: 'yellow' },
    { x: -0, y: -1 },
    { x: 0, y: 0},
    { x: 0, y: 1, color: 'darkgreen' },
    { x: 0, y: 2, color: 'yellow' },
    { x: 1, y: 0 },
    { x: 1, y: 1, color: 'darkgreen' },
    { x: 1, y: 2, color: 'yellow' },
    { x: 1, y: 3, color: 'orange' },
    { x: 2, y: 0, color: 'yellow' },
    { x: 2, y: 1, color: 'darkgreen' },
    { x: 2, y: 2, color: 'yellow' },
    { x: 3, y: 0 },
    { x: 3, y: 1 },
    { x: 4, y: -1 },
    { x: 4, y: 0 },
    ];

    move() {
        this.direction = this.direction + 0.1;
        this.x = this.x + Math.cos(this.direction);
        this.y = this.y + Math.cos(this.direction);
    }
}

export {
    Drake,
}