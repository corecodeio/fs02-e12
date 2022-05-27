"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Tablet {
    constructor(pos) {
        this.position = [0, 0];
        this.volumen = 0;
        this.position = [...pos];
    }
    tap() {
        const [x, y] = this.position;
        console.log(`Position[Tablet]: ${x}, ${y}`);
    }
    play(song) {
        console.log(`Playing: ${song} 🎶`);
    }
}
exports.default = Tablet;
