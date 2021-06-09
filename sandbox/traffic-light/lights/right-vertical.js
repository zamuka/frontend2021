import { Light } from './light.js';
import { COLORS } from './index.js';

class RightVertical extends Light {
    color = COLORS.GREEN;

    element = document.querySelector('.vertical.left');
}
export {
  RightVertical,
};
