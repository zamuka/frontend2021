const WHEEL_INSTALLED = 'wheelInstalled';
const TANK_FULL = 'tankFull';

/**
 * @param {Element} node
 */
class Mechanic {
  _resolve = null;

  // saving "resolve" function for future use
  promise = new Promise((resolve) => { this._resolve = resolve; });

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
  document.querySelectorAll('.mechanic')
    .forEach((node) => new Mechanic(node));
}

function main() {
  createMechanics();

  /**
   * YOUR CODE HERE
   * Add a "go" class to an element with "#pit-stop"
   * */
}

window.addEventListener('load', main);
