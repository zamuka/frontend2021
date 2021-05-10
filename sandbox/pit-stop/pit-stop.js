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
    if (!this.node.closest('.go')) {
      this.node.classList.add('ready');
    }
    this.node.dispatchEvent(event);
  }
}

function createMechanics() {
  document.querySelectorAll('.mechanic')
    .forEach((node) => new Mechanic(node));
}

function main() {
  const pitStopBox = document.querySelector('#pit-stop');
  let fullTank = false;
  let readyWheel = 0;
  
  createMechanics();

  function readyHandler(event) {
    if (event.type === TANK_FULL) {
      fullTank = true;
    }
    if (event.type === WHEEL_INSTALLED) {
      readyWheel = readyWheel + 1;
    }
    if (fullTank && readyWheel === 4) {
      pitStopBox.classList.add('go');
    }
  }
  pitStopBox.addEventListener(TANK_FULL, readyHandler);
  pitStopBox.addEventListener(WHEEL_INSTALLED, readyHandler)
}

window.addEventListener('load', main);
