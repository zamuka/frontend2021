import { Light } from './light.js';
import { COLORS } from './index.js';

class RightHorisontal extends Light {
    element = document.querySelector('.horizontal');

    flag = false;

    changeYellow() {
      this.element.classList.remove(COLORS.RED);
      if (this.flag === false) {
        this.replaceColor(COLORS.YELLOW, COLORS.GREEN);
        this.flag = true;
        return;
      }
      this.replaceColor(COLORS.YELLOW, COLORS.RED);
      this.flag = false;
    }
}
export {
  RightHorisontal,
};
