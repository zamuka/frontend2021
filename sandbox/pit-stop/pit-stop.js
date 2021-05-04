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

    if (!this.node.closest('.go')) {
      this.node.classList.add('ready');
    }

    const event = new CustomEvent(this.eventName, { bubbles: true });
    this.node.dispatchEvent(event);
  }
}

function createMechanics() {
  document.querySelectorAll('.mechanic')
    .forEach((node) => new Mechanic(node));
}

function isReady({currentTarget}){
  const ready = document.querySelectorAll('.ready')
  const mechanics = document.querySelectorAll('.mechanic')

  if(ready.length === mechanics.length){
    currentTarget.classList.add('go')
  }
}

function main() {
  const events = ['wheelInstalled', 'tankFull']
  const pit_stop = document.querySelector('#pit-stop')
  createMechanics();

  for(let event of events){
    pit_stop.addEventListener(event, isReady)
  }
}

window.addEventListener('load', main);
