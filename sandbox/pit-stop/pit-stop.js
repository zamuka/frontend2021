const WHEEL_INSTALLED = 'wheelInstalled';
const TANK_FULL = 'tankFull';

/**
 * @param {Element} node
 */
class Mechanic {
  static countWheelInstalled = 0;
  static isTankFull = false;

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
    if (!this.node.closest('.go')) {
      this.node.classList.add('ready');
    }
  }
}

function createMechanics() {
  document.querySelectorAll('.mechanic')
    .forEach((node) => new Mechanic(node));
}

function main() {
  createMechanics();
  let pitStop = document.querySelector('#pit-stop');
  function eventHandler (event) {
    if (event.type === WHEEL_INSTALLED) {
      Mechanic.countWheelInstalled = Mechanic.countWheelInstalled + 1;
    } else if (event.type === TANK_FULL) {
      Mechanic.isTankFull = true;
    }
  
    if (Mechanic.isTankFull && Mechanic.countWheelInstalled === 4) {
      pitStop.classList.add('go');
    }
  }
  pitStop.addEventListener(WHEEL_INSTALLED, eventHandler);
  pitStop.addEventListener(TANK_FULL, eventHandler);
}

window.addEventListener('load', main);
