// import { LeftHorisontal } from './lights/left-horisontal.js';
// import { RightHorisontal } from './lights/right-horisontal.js';
// import { LeftVertical } from './lights/left-vertical.js';
// import { RightVertical } from './lights/right-vertical.js';
// import { DELAY } from './lights/config.js';
import { Light } from './lights/light.js';
import { COLORS, DELAY } from './lights/config.js';

const lights = {
  leftHor: new Light({ color: COLORS.GREEN, element: document.querySelector('.left.tall') }),
  rightHor: new Light({ color: COLORS.RED, element: document.querySelector('.horizontal') }),
  leftVer: new Light({ color: COLORS.RED, element: document.querySelector('.vertical.right') }),
  rightVer: new Light({ color: COLORS.GREEN, element: document.querySelector('.vertical.left') }),
};

const horisontalLights = [lights.leftHor, lights.rightHor];

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), ms);
  });
}

function main() {
  Promise.resolve()
    .then(() => Object.values(lights).forEach((light) => light.start()))
    .then(() => delay(DELAY.LONG))
    .then(() => {
      lights.leftHor.doGreenBlink();
    })
    .then(() => delay(DELAY.SHORT))
    .then(() => {
      horisontalLights.forEach((light) => light.changeColor());
    })
    .then(() => delay(DELAY.MEDIUM))
    .then(() => {
      Object.values(lights).forEach((light) => light.changeYellow());
    })
    .then(() => delay(DELAY.LONG))
    .then(() => lights.rightHor.doGreenBlink())
    .then(() => delay(DELAY.SHORT))
    .then(() => {
      horisontalLights.forEach((light) => light.changeColor());
    })
    .then(() => delay(DELAY.MEDIUM))
    .then(() => Object.values(lights).forEach((light) => light.changeYellow()))
    .then(() => main());
}

main();
