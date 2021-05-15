/* eslint-disable max-classes-per-file */
class Car {
  constructor() {
    console.log('car constructor', this.fuel);
  }

  fuel = 100;

  drive(distance) {
    console.log('Static property can be used here', Car.wheelCount);
    this.fuel = this.fuel - distance;
    console.log(`${this.fuel} fuel remaining`);
  }

  stop() {
    this.velocity = 0;
  }

  static fromScratch() {

  }

  static wheelCount = 4;
}

class Taxi extends Car {
  fuel = 200;

  money = 0;

  drive(distance) {
    super.drive(distance);
    this.money = this.money + distance;
    console.log(`Total money ${this.money}`);
    this.stop();
  }
}

const taxi = new Taxi();

taxi.drive(20);
console.log(taxi);
