const lights = Array.from(document.querySelectorAll('.light'));
const majorVer = lights[0];
const majorHor = lights[1];
const minorHor = lights[2];
const minorVer = lights[3];
const colors = {
  green: 'green',
  yellow: 'yellow',
  red: 'red'
}

function start () {
  
  majorVer.classList.remove(colors.green, colors.red);

  majorHor.classList.remove(colors.red, colors.yellow, colors.green);

  minorHor.classList.remove(colors.green, colors.yellow, colors.red);

  minorVer.classList.remove(colors.red, colors.green);
}

function firstStage () {
  majorVer.classList.add(colors.red);
  majorVer.classList.remove(colors.green);

  majorHor.classList.add(colors.green);
  majorHor.classList.remove(colors.red, colors.yellow);

  minorHor.classList.remove(colors.green, colors.yellow);
  minorHor.classList.add(colors.red);

  minorVer.classList.remove(colors.red);
  minorVer.classList.add(colors.green)
}

function secondStage () {
  majorVer.classList.remove(colors.red);
  majorVer.classList.add(colors.green);

  majorHor.classList.add(colors.red);
  majorHor.classList.remove(colors.green, colors.yellow);

  minorHor.classList.remove(colors.red, colors.yellow);
  minorHor.classList.add(colors.green);

  minorVer.classList.remove(colors.green);
  minorVer.classList.add(colors.red)
}

function firstTransitionalStage (elem) {

  minorHor.classList.add(colors.yellow);
  majorHor.classList.add(colors.yellow);
}

function secondTransitionalStage () {


  minorHor.classList.remove(colors.green, colors.red);
  majorHor.classList.remove(colors.green, colors.red);
}

function delay (fn, ms) {
  return new Promise ((resolve) => {
    setTimeout(() => {
      fn();
      resolve();
    }, ms);
  })
}
function blinking(elem, ms) {
  setTimeout(() => {
      const intervalId = setInterval(() => {
        elem.classList.toggle(colors.green)
      }, 400);
      setTimeout(() => {
          clearInterval(intervalId)
      }, 3000);
  }, ms);
}

function main () {
  Promise.resolve()
    .then(() => {start()})
    .then(() => {delay(firstStage, 0)})
    .then(() => {delay(firstTransitionalStage, 9000)})
    .then(() => {blinking(majorHor, 9000)})
    .then(() => {delay(secondTransitionalStage, 12000)})
    .then(() => {delay(secondStage, 15000)})
    .then(() => {delay(firstTransitionalStage, 24000)})
    .then(() => {blinking(minorHor, 24000)})
    .then(() => {delay(secondTransitionalStage, 27000)})
    .then(() => {delay(main, 30000)})
    
}

document.addEventListener('load', main())