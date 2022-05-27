"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Iphone_1 = __importDefault(require("./models/Iphone"));
const Kindle_1 = __importDefault(require("./models/Kindle"));
const Tablet_1 = __importDefault(require("./models/Tablet"));
class Main {
    addToPosition(device) {
        const [x, y] = device.position;
        device.position[0] = x + 1;
        device.position[1] = y + 1;
    }
    callToGt(device) {
        device.call('+502', 1234567890);
    }
    start() {
        const x = (n) => `${n + 4}`;
        const y = (n) => `${n + 100}`;
        const iphone1 = new Iphone_1.default(0, 0, 12345, x);
        const iphone2 = new Iphone_1.default(0, 0, 6789, y);
        const kindle = new Kindle_1.default(0, 0);
        const tablet = new Tablet_1.default([3, 1]);
        this.addToPosition(iphone1);
        this.addToPosition(kindle);
        this.addToPosition(tablet);
        this.callToGt(iphone1);
        this.callToGt(iphone2);
        const stack = [iphone1, iphone2, tablet];
        stack.forEach((device) => device.play('Despacito'));
    }
}
exports.default = Main;
