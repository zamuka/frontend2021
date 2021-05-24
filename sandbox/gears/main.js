let rotate = 0;

function main() {
  const gear = document.querySelector('.gear');
  function onWheel(event) {
    const delta = event.deltaY;
    if (delta > 0) rotate = rotate + 15;
    else rotate = rotate - 15;
    gear.style.transform = `rotate(${rotate}deg)`;
    event.preventDefault();
}
  gear.addEventListener('wheel', onWheel);
}

window.addEventListener('load', main);