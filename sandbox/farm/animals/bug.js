import { Animal } from './animal.js';

class Bug extends Animal {
 
  color = 'black';

  direction = Math.random() * 10;
  
  pixels = [
    { x: 0, y: 0},
    { x: 1, y: 0 },
    { x: 2, y: 0 },
    { x: 3, y: 0 },
    { x: 4, y: 1 },
    { x: -1, y: 0 },
    { x: -2, y: 0 },
    { x: -3, y: 0 },
    { x: -4, y: 1 },
    { x: 0, y: -1 },
    { x: 2, y: -1 },
    { x: -2, y: -1 },
    { x: -1, y: -1, color: 'cyan' },
    { x: -1, y: -2, color: 'cyan' },
    { x: 1, y: -1, color: 'cyan' },
    { x: 1, y: -2, color: 'cyan' },
    { x: 0, y: -2 , color: 'black'},
    { x: 2, y: -2 },
    { x: -2, y: -2 },
    { x: 0, y: -3 },
    { x: 1, y: -3 },
    { x: 2, y: -3 },
    { x: -1, y: -3 },
    { x: -2, y: -3 },
    { x: 1, y: -4 },
    { x: -1, y: -4 },
    { x: 2, y: -5 },
    { x: -2, y: -5 },
    { x: 0, y: 1 },
    { x: 1, y: 1 },
    { x: 2, y: 1 },
    { x: -1, y: 1 },
    { x: -2, y: 1 },
    { x: 0, y: 2 },
    { x: 1, y: 2 },
    { x: 2, y: 2 },
    { x: -1, y: 2 },
    { x: -2, y: 2 },
    { x: 2, y: 3 },
    { x: -2, y: 3 },
    { x: 1, y: 4 },
    { x: -1, y: 4 },
  ];

  move() {
    this.direction = this.direction + 0.05;
    this.x = this.x + Math.cos(this.direction);
    this.y = this.y + Math.sin(this.direction);
  }
}

export {
  Bug,
};
