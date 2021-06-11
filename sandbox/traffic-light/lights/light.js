import { COLORS } from './config.js';

class Light {
  constructor(options) {
    this.color = options.color;
    this.element = options.element;
  }

  accessToRed = true;

  accessToGreen = true;

  start() {
    this.element.classList.remove(COLORS.RED, COLORS.YELLOW, COLORS.GREEN);
    this.element.classList.add(this.color);
  }

  replaceColor(deleteColor, addColor) {
    this.element.classList.remove(deleteColor);
    this.element.classList.add(addColor);
  }

  changeColor() {
    if (this.element.classList.contains(COLORS.RED)) {
      this.element.classList.add(COLORS.YELLOW);
    }
    this.replaceColor(COLORS.GREEN, COLORS.YELLOW);
  }

  changeYellow() {
    debugger;
    console.log(this.accessToRed);
    if (this.element.classList.contains(COLORS.YELLOW)) {
      if (this.accessToRed) {
        this.replaceColor(COLORS.YELLOW, COLORS.RED);
        this.accessToRed = false;
        return;
      }
      console.log('Access to red is false');
    }
  }

  doGreenBlink() {
    if (this.element.classList.contains(COLORS.GREEN)) {
      const blink = setInterval(() => {
        this.element.classList.remove(COLORS.GREEN);
        setTimeout(() => {
          this.element.classList.add(COLORS.GREEN);
        }, 200);
      }, 500);
      setTimeout(() => {
        clearInterval(blink);
      }, 1500);
    }
  }
}
export {
  Light,
};
