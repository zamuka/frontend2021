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
  }
}

function createMechanics() {
  document.querySelectorAll('.mechanic')
    .forEach((node) => new Mechanic(node));
}

function main() {
  createMechanics();
  function addListenerMultiplyEvents(element, eventNames, listener) {
    const events = eventNames.split(' ');
    for (let i = 0, iLen = events.length; i < iLen; i = i + 1) {
      element.addEventListener(events[i], listener, false);
    }
  }
  const addClassGo = document.getElementById('pit-stop').classList.add('go');
  addListenerMultiplyEvents(window, 'WHEEL_INSTALLED TANK_FULL', addClassGo);
}

window.addEventListener('load', main);
