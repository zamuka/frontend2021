import { COLORS } from './index.js';

class Light {
  color = COLORS.RED;

  element = null;

  flag = false;

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
    if (this.element.classList.contains(COLORS.YELLOW)) {
      if (this.flag === false) {
        this.replaceColor(COLORS.YELLOW, COLORS.RED);
        this.flag = true;
        return;
      }
      this.element.classList.remove(COLORS.RED);
      this.replaceColor(COLORS.YELLOW, COLORS.GREEN);
      this.flag = false;
      return;
    }

    if (this.element.classList.contains(COLORS.RED)) {
      this.replaceColor(COLORS.RED, COLORS.GREEN);
      return;
    }
    this.replaceColor(COLORS.GREEN, COLORS.RED);
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
