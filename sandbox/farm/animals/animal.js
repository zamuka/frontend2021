function Animal() {
  this._canvas = null;
  this.pixels = [];
  this.color = 'white';
}

Animal.prototype.init = function (canvas) {
  this._canvas = canvas;
  this.x = Math.floor(Math.random() * this._canvas.width);
  this.y = Math.floor(Math.random() * this._canvas.height);
};

Animal.prototype.draw = function () {
  this._canvas.setColor(this.color);
  this.pixels.forEach(({ x, y }) => this._canvas.setPixel(this.x + x, this.y + y));
};

Animal.prototype.move = function () {
  this.x = this.x + Math.random() - 0.5;
  this.y = this.y + Math.random() - 0.5;
};

const baseAnimal = new Animal();

export {
  Animal,
  baseAnimal,
};
