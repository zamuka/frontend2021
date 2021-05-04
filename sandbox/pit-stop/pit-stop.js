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
  createMechanics();

  const pitStop = document.querySelector('#pit-stop');
  let countOfReadyMechanics = 0;

  function start() {
    countOfReadyMechanics = countOfReadyMechanics + 1;
    if (countOfReadyMechanics === 5) {
        pitStop.classList.add('go');
    }
  }
  
  document.addEventListener(WHEEL_INSTALLED, start);
  document.addEventListener(TANK_FULL, start);
}

window.addEventListener('load', main);
