"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Kindle {
    constructor(x, y) {
        this.position = [0, 0];
        this.position[0] = x;
        this.position[1] = y;
    }
    tap() {
        const [x, y] = this.position;
        console.log(`Position[Kindle]: ${x}, ${y}`);
    }
}
exports.default = Kindle;
