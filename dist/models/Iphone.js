"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Iphone {
    constructor(x, y, number, myDynamicImplementation) {
        this.position = [0, 0];
        this.volumen = 0;
        this.secterCode = '0';
        this.position[0] = x;
        this.position[1] = y;
        this.number = number;
        this.dynamic = myDynamicImplementation;
    }
    tap() {
        const [x, y] = this.position;
        console.log(`Position[Iphone]: ${x}, ${y}`);
    }
    play(song) {
        console.log(`Playing: ${song} 🎶`);
    }
    genrateDynamicCode() {
        this.secterCode = this.dynamic(3);
    }
    call(zone_code, number_to_call) {
        console.log(`Calling: ${zone_code} ${number_to_call} from ${this.number}`);
    }
}
exports.default = Iphone;
