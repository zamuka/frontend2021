import { Animal } from './animal.js';

class Rabbit extends Animal{
    color = 'gray';
    
    pixels = [
        { x: 1, y: -7 },
        { x: 1, y: -6 },
        { x: 1, y: -5 },
        { x: -1, y: -7 },
        { x: -1, y: -6 },
        { x: -1, y: -5 },
        { x: 1, y: -4 },
        { x: 0, y: -4 },
        { x: -1, y: -4 },
        { x: 1, y: -3 },
        { x: 0, y: -3 },
        { x: -1, y: -3 },
        { x: 0, y: -2 },
        { x: 2, y: -1 },
        { x: 1, y: -1 },
        { x: 0, y: -1 },
        { x: -1, y: -1 },
        { x: -2, y: -1 },
        { x: 1, y: 0 },
        { x: -1, y: 0 },
        { x: 0, y: 0 },
        { x: -1, y: 1 },
        { x: 0, y: 1 },
        { x: 1, y: 1 },
        { x: 0, y: 2 },
        { x: -1, y: 3 },
        { x: 1, y: 3 },
];
}

export {
    Rabbit,
};