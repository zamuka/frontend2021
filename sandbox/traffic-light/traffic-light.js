const redDuration = 20000;
const yellowDuration = 3000;
const greenDuration = 20000;
const nightModeDuration = 700;

const leftTraffic = {
  red: {
    element: document.querySelector('.light.left.tall .bulb:first-child'),
    class: 'red',
    duration: redDuration,
    changeColor(cb) {
      this.element.classList.add(this.class);
      setTimeout(() => {
        this.element.classList.remove(this.class);
        cb();
      }, this.duration);
    },
  },

  yellow: {
    element: document.querySelector(
      '.light.left.tall .bulb:not(:first-child):not(:last-child)'
    ),
    class: 'yellow',
    duration: yellowDuration,
    changeColor(cb) {
      this.element.classList.add(this.class);
      setTimeout(() => {
        this.element.classList.remove(this.class);
        cb();
      }, this.duration);
    },
    nightMode() {
      setInterval(() => {
        this.element.classList.toggle(this.class);
      }, nightModeDuration);
    },
  },

  green: {
    element: document.querySelector('.light.left.tall .bulb:last-child'),
    class: 'green',
    duration: greenDuration,
    changeColor(cb) {
      this.element.classList.add(this.class);
      setTimeout(() => {
        this.element.classList.remove(this.class);
        cb();
      }, this.duration);
    },
  },
};

const rightTraffic = {
  red: {
    element: document.querySelector('.light.right.tall .bulb:first-child'),
    class: 'red',
    duration: redDuration,
    changeColor(cb) {
      this.element.classList.add(this.class);
      setTimeout(() => {
        this.element.classList.remove(this.class);
        cb();
      }, this.duration);
    },
  },

  yellow: {
    element: document.querySelector(
      '.light.right.tall .bulb:not(:first-child):not(:last-child)'
    ),
    class: 'yellow',
    duration: yellowDuration,
    changeColor(cb) {
      this.element.classList.add(this.class);
      setTimeout(() => {
        this.element.classList.remove(this.class);
        cb();
      }, this.duration);
    },
    nightMode() {
      setInterval(() => {
        this.element.classList.toggle(this.class);
      }, nightModeDuration);
    },
  },

  green: {
    element: document.querySelector('.light.right.tall .bulb:last-child'),
    class: 'green',
    duration: greenDuration,
    changeColor(cb) {
      this.element.classList.add(this.class);
      setTimeout(() => {
        this.element.classList.remove(this.class);
        cb();
      }, this.duration);
    },
  },
};

const leftVertical = {
  red: document.querySelector('.light.vertical.right .bulb:first-child'),
  green: document.querySelector('.light.vertical.right .bulb:last-child'),
  toGreen(countdown) {
    this.green.innerHTML = countdown / 1000;
    let timer = setInterval(() => {
      countdown = countdown - 1000;
      this.green.innerHTML = countdown / 1000;
      if (countdown === 0) {
        clearInterval(timer);
      }
    }, 1000);
    this.green.classList.add('green');
    this.red.classList.remove('red');
  },
  toRed(countdown) {
    this.red.innerHTML = countdown / 1000;
    let timer = setInterval(() => {
      countdown = countdown - 1000;
      this.red.innerHTML = countdown / 1000;
      if (countdown === 0) {
        clearInterval(timer);
      }
    }, 1000);
    this.red.classList.add('red');
    this.green.classList.remove('green');
  },
};

const rightVertical = {
  red: document.querySelector('.light.vertical.left .bulb:first-child'),
  green: document.querySelector('.light.vertical.left .bulb:last-child'),
  toGreen(countdown) {
    this.green.innerHTML = countdown / 1000;
    let timer = setInterval(() => {
      countdown = countdown - 1000;
      this.green.innerHTML = countdown / 1000;
      if (countdown === 0) {
        clearInterval(timer);
      }
    }, 1000);
    this.green.classList.add('green');
    this.red.classList.remove('red');
  },
  toRed(countdown) {
    this.red.innerHTML = countdown / 1000;
    let timer = setInterval(() => {
      countdown = countdown - 1000;
      this.red.innerHTML = countdown / 1000;
      if (countdown === 0) {
        clearInterval(timer);
      }
    }, 1000);
    this.red.classList.add('red');
    this.green.classList.remove('green');
  },
};

function leftTrafficLight() {
  leftTraffic.red.changeColor(function () {
    leftTraffic.yellow.changeColor(function () {
      leftTraffic.green.changeColor(function () {
        leftTraffic.yellow.changeColor(function () {
          leftTrafficLight();
        });
      });
    });
    leftVertical.toRed(greenDuration + yellowDuration + yellowDuration);
  });
  leftVertical.toGreen(redDuration);
}

function rightTrafficLight() {
  rightTraffic.green.changeColor(function () {
    rightTraffic.yellow.changeColor(function () {
      rightTraffic.red.changeColor(function () {
        rightTraffic.yellow.changeColor(function () {
          rightTrafficLight();
        });
        rightVertical.toRed(greenDuration + yellowDuration + yellowDuration);
      });
      rightVertical.toGreen(redDuration);
    });
  });
  rightVertical.toRed(greenDuration + yellowDuration);
}

function trafficLight() {
  let date = new Date();
  let hours = date.getHours();
  if (hours > 4 && hours < 23) {
    leftTrafficLight();
    rightTrafficLight();
    setInterval(trafficLight, 2.16e7);
  } else {
    leftTraffic.yellow.nightMode();
    rightTraffic.yellow.nightMode();
    setInterval(trafficLight, 2.16e7);
  }
}

trafficLight();
