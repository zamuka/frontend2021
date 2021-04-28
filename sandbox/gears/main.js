function scrollRotate() {
  const gear = document.querySelector('.gear');
  gear.addEventListener('wheel', function (e) {
    const delta = e.deltaY || e.detail || e.wheelDelta;
    gear.style.transform = `rotate(${delta}deg)`;
    e.preventDefault();
  });
}

window.addEventListener('load', scrollRotate);
