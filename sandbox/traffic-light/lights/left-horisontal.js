import { Light } from './light.js';
import { COLORS } from './index.js';

class LeftHorisontal extends Light {
    color = COLORS.GREEN;

    element = document.querySelector('.left.tall');
}

export {
  LeftHorisontal,
};
