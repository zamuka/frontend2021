function myFunction() {
  function permit() {
    const walkerFirst = document.getElementById('walkerFirst');
    walkerFirst.classList.add('red');
    walkerFirst.classList.remove('green');

    const vehicleFirst = document.getElementById('vehicleFirst');
    vehicleFirst.classList.add('green');
    vehicleFirst.classList.remove('red');

    const walkerSecond = document.getElementById('walkerSecond');
    walkerSecond.classList.add('green');
    walkerSecond.classList.remove('red');

    const vehicleSecond = document.getElementById('vehicleSecond');
    vehicleSecond.classList.add('red');
    vehicleSecond.classList.remove('green');
  }
  setTimeout(permit, 0);

  function forbit() {
    const walkerFirst = document.getElementById('walkerFirst');
    walkerFirst.classList.remove('red');
    walkerFirst.classList.add('green');

    const vehicleFirst = document.getElementById('vehicleFirst');
    vehicleFirst.classList.remove('green');
    vehicleFirst.classList.add('red');

    const walkerSecond = document.getElementById('walkerSecond');
    walkerSecond.classList.remove('green');
    walkerSecond.classList.add('red');

    const vehicleSecond = document.getElementById('vehicleSecond');
    vehicleSecond.classList.remove('red');
    vehicleSecond.classList.add('green');
  }
  setTimeout(forbit, 6000);

  function yellow() {
    function yellowOn() {
      const vehicleFirst = document.getElementById('vehicleFirst');
      vehicleFirst.classList.add('yellow');

      const vehicleSecond = document.getElementById('vehicleSecond');
      vehicleSecond.classList.add('yellow');
    }
    setTimeout(yellowOn, 3000);

    function yellowOff() {
      const vehicleFirst = document.getElementById('vehicleFirst');
      vehicleFirst.classList.remove('yellow');

      const vehicleSecond = document.getElementById('vehicleSecond');
      vehicleSecond.classList.remove('yellow');
    }
    setTimeout(yellowOff, 6000);
    setTimeout(yellowOn, 9000);
    setTimeout(yellowOff, 12000);
  }
  yellow();
}

myFunction();

setInterval(myFunction, 12000);
