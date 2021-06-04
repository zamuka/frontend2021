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

    if (this.isWheelman) {
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

    if (!this.node.closest('.go')) {
      this.node.classList.add('ready');
    }

    this._resolve();
  }
}

function createMechanics() {
  const mechanics = [];

  document.querySelectorAll('.mechanic')
    .forEach((node) => mechanics.push(new Mechanic(node)));

  return mechanics;
}

function main() {
  const mechanics = createMechanics();
  const pitStop = document.querySelector('#pit-stop');
  const mechanicsPromises = mechanics.map((mechanic) => mechanic.promise);

  Promise.all(mechanicsPromises).then(() => pitStop.classList.add('go'));
}

window.addEventListener('load', main);
