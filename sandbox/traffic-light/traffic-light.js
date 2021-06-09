import { LeftHorisontal } from './lights/left-horisontal.js';
import { RightHorisontal } from './lights/right-horisontal.js';
import { LeftVertical } from './lights/left-vertical.js';
import { RightVertical } from './lights/right-vertical.js';
import { DELAY } from './lights/index.js';

const lights = {
  leftHor: new LeftHorisontal(),
  rightHor: new RightHorisontal(),
  leftVer: new LeftVertical(),
  rightVer: new RightVertical(),
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
