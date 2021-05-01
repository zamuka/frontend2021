class Animal {
  color = 'white';
  _canvas = null;
  pixels = [];

  constructor(canvas) {
    this._canvas = canvas;
    this.x = Math.floor(Math.random() * this._canvas.width);
    this.y = Math.floor(Math.random() * this._canvas.height);
  }

  draw() {
    this._canvas.setColor(this.color);
    this.pixels.forEach(({ x, y, color }) => {
      if (color) {
        this._canvas.setColor(color);
      }
      this._canvas.setPixel(this.x + x, this.y + y);
    });
  }

  move() {
    this.x = this.x + Math.random() - 0.5;
    this.y = this.y + Math.random() - 0.5;
  }
}

export {
  Animal,
};
