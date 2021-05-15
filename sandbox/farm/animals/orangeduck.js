import { Duck } from "./duck.js";

class OrangeDuck extends Duck {
    color = 'orange';

    direction = Math.random() * 5;
    move() {
        this.direction = this.direction - 0.1;
        this.y = this.y + Math.cos(this.direction);
    }
}

export {
    OrangeDuck,
}