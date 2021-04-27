let deltaSize = 15;

function rotateGear(event) {
  if (event.deltaY > 0) {
    deltaSize = deltaSize + 15;
  }
  if (event.deltaY < 0) {
    deltaSize = deltaSize - 15;
  }
  gear.style.transform = `rotate(${deltaSize}deg)`;
  event.preventDefault();
}

function main() {
  const gear = document.getElementById('gear');
  gear.addEventListener('wheel', rotateGear);
}

window.addEventListener('load', main);
