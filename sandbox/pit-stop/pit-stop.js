const WHEEL_INSTALLED = 'wheelInstalled';
const TANK_FULL = 'tankFull';
const mechanicsPromises = [];

/**
 * @param {Element} node
 */
class Mechanic {
  _resolve = null;
  promise = new Promise((resolve) => {
    this._resolve = resolve;
  });

  /**
   * @param {Element} node
   */
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
    this._resolve();
  }
}

function createMechanics() {
  document
    .querySelectorAll('.mechanic')
    .forEach((node) => mechanicsPromises.push(new Mechanic(node).promise));
}

function main() {
  createMechanics();
  const pitstop = document.getElementById('pit-stop');
  Promise.all(mechanicsPromises)
    .then(() => pitstop.classList.add('go'))
    .catch((error) => console.log('Error', error));
}

window.addEventListener('load', main);
