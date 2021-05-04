const WHEEL_INSTALLED = 'wheelInstalled';
const TANK_FULL = 'tankFull';

/**
 * @param {Element} node
 */
class Mechanic {
  constructor(node) {
    this.node = node;
    this.isWheelman = this.node.classList.contains('wheelman');
    this.eventName = TANK_FULL;
    if (this.isWheelman) {
      this.eventName = WHEEL_INSTALLED;
      this.wheel = document.querySelector('.wheel:not(.taken)');
      this.wheel.classList.add('taken');
    }
    const timeoutMs = 1000 + Math.random() * 6000;
    setTimeout(() => this.ready(), timeoutMs);
  }

  ready() {
    if (this.isWheelman) {
      this.wheel.classList.add('installed');
    }
    const event = new CustomEvent(this.eventName, { bubbles: true });
    this.node.dispatchEvent(event);
    if (!this.node.closest('go')) {
      this.node.classList.add('ready');
    }
  }
}

function createMechanics() {
  document.querySelectorAll('.mechanic')
    .forEach((node) => new Mechanic(node));
}

function main() {
  let installedWheelCounter = 0;
  let tankFull = false;
  const pitStop = document.querySelector('#pit-stop');
  
  createMechanics();

  function hendler(event) {
    if (event.type === WHEEL_INSTALLED) {
      installedWheelCounter = installedWheelCounter + 1;
    }
    if (event.type === TANK_FULL) {
      tankFull = true;
    }
    if (tankFull && installedWheelCounter === 4) {
      pitStop.classList.add('go');
    }
  } 

  pitStop.addEventListener(WHEEL_INSTALLED, hendler);
  pitStop.addEventListener(TANK_FULL, hendler)
}

window.addEventListener('load', main);
