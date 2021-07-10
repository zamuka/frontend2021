// eslint-disable-next-line max-classes-per-file
import TrafficLight from './TrafficLight.js';

const redDuration = 20000;
const yellowDuration = 3000;
const greenDuration = 20000;
const nightModeDuration = 700;

class RedTrafficLight extends TrafficLight {
  duration = redDuration;

  color = 'red';
}

class YellowTrafficLight extends TrafficLight {
  duration = yellowDuration;

  color = 'yellow';

  nightMode() {
    setInterval(() => {
      this.element.classList.toggle(this.color);
    }, nightModeDuration);
  }
}

class GreenTrafficLight extends TrafficLight {
  duration = greenDuration;

  color = 'green';
}

const leftHorizontal = {
  red: new RedTrafficLight('item-vs_1'),
  yellow: new YellowTrafficLight('item-vs_2'),
  green: new GreenTrafficLight('item-vs_3'),
};

const rightHorizontal = {
  red: new RedTrafficLight('item-vf_1'),
  yellow: new YellowTrafficLight('item-vf_2'),
  green: new GreenTrafficLight('item-vf_3'),
};

const leftVertical = {
  red: new RedTrafficLight('item-ws_1'),
  green: new GreenTrafficLight('item-ws_2'),
};

const rightVertical = {
  red: new RedTrafficLight('item-wf_1'),
  green: new GreenTrafficLight('item-wf_2'),
};

function delay(duration) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), duration);
  });
}

function trafficLight() {
  Promise.resolve()
    .then(() => {
      leftHorizontal.red.switchOn();
      rightHorizontal.green.switchOn();

      leftVertical.green.switchOn();
      rightVertical.red.switchOn();
    })
    .then(() => delay(redDuration))
    .then(() => {
      leftHorizontal.red.switchOff();
      rightHorizontal.green.switchOff();
    })
    .then(() => {
      leftHorizontal.yellow.switchOn();
      rightHorizontal.yellow.switchOn();

      leftVertical.green.switchOff();
      leftVertical.red.switchOn();
    })
    .then(() => delay(yellowDuration))
    .then(() => {
      leftHorizontal.yellow.switchOff();
      rightHorizontal.yellow.switchOff();
    })
    .then(() => {
      leftHorizontal.green.switchOn();
      rightHorizontal.red.switchOn();

      leftVertical.red.switchOn();

      rightVertical.red.switchOff();
      rightVertical.green.switchOn();
    })
    .then(() => delay(greenDuration))
    .then(() => {
      leftHorizontal.green.switchOff();
      rightHorizontal.red.switchOff();
    })
    .then(() => {
      leftHorizontal.yellow.switchOn();
      rightHorizontal.yellow.switchOn();

      rightVertical.red.switchOn();
      rightVertical.green.switchOff();
    })
    .then(() => delay(yellowDuration))
    .then(() => {
      leftHorizontal.yellow.switchOff();
      rightHorizontal.yellow.switchOff();

      leftVertical.red.switchOff();

      rightVertical.red.switchOff();
    })
    .then(() => {
      trafficLight();
    });
}

function main() {
  const date = new Date();
  const FIVE_HOURS = 1.8e7;
  const hours = date.getHours();
  const dayMode = hours > 4 && hours < 23;
  if (dayMode) {
    trafficLight();
    setInterval(main, FIVE_HOURS);
  } else {
    leftHorizontal.yellow.nightMode();
    rightHorizontal.yellow.nightMode();
    setInterval(main, FIVE_HOURS);
  }
}

main();
