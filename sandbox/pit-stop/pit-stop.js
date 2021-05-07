const WHEEL_INSTALLED = 'wheelInstalled';
const TANK_FULL = 'tankFull';
let tankFull = false;
let wheelInstalled = false;
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

  const pitStop = document.getElementById('pit-stop');
  let tankFull = false;
  let wheelsInstalled = [];

  function check(event) {
    if (event.type === "tankFull") {
      tankFull = true;
    };

    if (event.type === "wheelInstalled") {
      wheelsInstalled.push(true)
    }
    // console.log(tankFull)
    // console.log(wheelsInstalled)
    if (tankFull && wheelsInstalled.length === 4) {
      pitStop.classList.add('go')
    }
  }

  window.addEventListener('tankFull', check)
  window.addEventListener('wheelInstalled', check)

  //window.addEventListener('wheelInstalled', (event) => console.log(event));
}

window.addEventListener('load', main);
