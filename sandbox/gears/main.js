function spinGear() {
  const gear = document.querySelector('.gear');
  gear.addEventListener('wheel', function (event) {
    console.log(event);
    const spinDegree = event.deltaY;
    if (spinDegree > 0) {
      gear.style.transform = 'rotate(15deg)';
    }
    else gear.style.transform = 'rotate(-15deg)';
    event.preventDefault();
  },
  );
}

window.addEventListener('load', spinGear);
