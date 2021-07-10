class TrafficLight {
  constructor(element) {
    this.element = document.getElementById(element);
  }

  switchOn() {
    this.element.classList.add(this.color);
  }

  switchOff() {
    this.element.classList.remove(this.color);
  }
}

export default TrafficLight;
