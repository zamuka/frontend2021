window.onload = function () {

  const ourGear = document.querySelector('.gear');
  let currentRotate = 0;

  function ourWheel(eve) {

    eve.preventDefault()
    let delta = eve.deltaY;
    
    if (delta > 0) {
      currentRotate = currentRotate - 15
      ourGear.style.transform = 'rotate(' + currentRotate + 'deg)';
    } if (delta < 0) {
      currentRotate = currentRotate + 15
      ourGear.style.transform = 'rotate(' + currentRotate + 'deg)';
    }
  }
  ourGear.addEventListener('wheel', ourWheel);
};