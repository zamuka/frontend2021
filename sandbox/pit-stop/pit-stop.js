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
  const pitStop = document.querySelector('#pit-stop');
  let tankFull = false;
  let counterInstalledWheel = 0;
  
  createMechanics();

  function readyHandler(event) {
    if (event.type === TANK_FULL) {
      tankFull = true;
    }
    if (event.type === WHEEL_INSTALLED) {
      counterInstalledWheel = counterInstalledWheel + 1;
    }
    if (tankFull && counterInstalledWheel === 4) {
      pitStop.classList.add('go');
    }
  }
  pitStop.addEventListener(TANK_FULL, readyHandler);
  pitStop.addEventListener(WHEEL_INSTALLED, readyHandler)
}

window.addEventListener('load', main);
