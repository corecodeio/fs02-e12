"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
class Device {
    constructor() {
        this.serialNumber = (0, uuid_1.v4)();
    }
    getSerialNumber() {
        return this.serialNumber;
    }
}
exports.default = Device;
