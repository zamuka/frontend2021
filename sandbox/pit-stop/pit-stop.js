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
  let weel = 0;
  let readyTank = false;
  let pitStop = document.querySelector('#pit-stop');
  function ready (event) {
    if (event.type === WHEEL_INSTALLED) {
      weel = weel + 1;
      console.log(weel);
    } 
    if (event.type === TANK_FULL){
      readyTank = true;
      console.log(readyTank);
    }
    if (readyTank && weel === 4) {
      pitStop.classList.add('go');
    }
  }
  
  pitStop.addEventListener(WHEEL_INSTALLED, ready);
  pitStop.addEventListener(TANK_FULL, ready);

}

window.addEventListener('load', main);
