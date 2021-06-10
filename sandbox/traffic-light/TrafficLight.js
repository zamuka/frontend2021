class TrafficLight {
  /**
   *
   * @param {HTMLDivElement} node
   */
  constructor(node) {
    this.node = node;
    this.colors = ['red', 'green', 'yellow'];
  }

  removeColors() {
    this.colors.forEach((color) => {
      this.node.classList.remove(color);
    });
  }

  setRed() {
    this.removeColors();
    this.node.classList.add(this.colors[0]);
    return this;
  }

  setGreen() {
    this.removeColors();
    this.node.classList.add(this.colors[1]);
    return this;
  }

  setYellow() {
    this.removeColors();
    this.node.classList.add(this.colors[2]);
    return this;
  }

  setRedYellow() {
    this.removeColors();
    this.node.classList.add(this.colors[0], this.colors[2]);
    return this;
  }

  init() {
    return Promise.resolve(this);
  }

  delay(ms) {
    return new Promise((resolved) => {
      setTimeout(() => {
        resolved(this);
      }, ms);
    });
  }
}

export default TrafficLight;
